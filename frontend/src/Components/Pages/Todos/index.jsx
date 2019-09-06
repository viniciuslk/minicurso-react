import React, { useState } from "react";
import { useApolloClient, useQuery } from "@apollo/react-hooks";

import {
  Row,
  Col,
  Input,
  Alert,
  ListGroup,
  ListGroupItem,
  Spinner,
  Badge
} from "reactstrap";

import { CREATE_TODO } from "../../../Apollo/Mutations/create";
import { GET_TODOES } from "../../../Apollo/Queries/list";
import { UPDATE_TODO } from "../../../Apollo/Mutations/update";
import { DELETE_TODO } from "../../../Apollo/Mutations/delete";
import { removeDeletedItem, addCreatedItem, changeUpdatedItem } from "./cache";

import MncButton from "../../Atoms/Button";
import MncCheckbox from "../../Atoms/Checkbox";
import MncTodoListActions from "../../Molecules/TodoListActions";
import MncButtonGroup from "../../Molecules/ButtonGroup";

import "./style.css";

const MncTodosPage = () => {
  const client = useApolloClient();
  const [todo, setTodo] = useState({ title: "", done: false });
  const [createLoading, setCreateLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState({
    isLoading: false,
    currentDeleteId: null
  });
  const [completeLoading, setCompleteLoading] = useState({
    isLoading: false,
    currentComleteId: null
  });

  const { data, loading } = useQuery(GET_TODOES);

  const onChange = e => {
    setTodo({
      ...todo,
      title: e.target.value
    });
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      if (!isEditting) {
        onSubmit();
      } else {
        onUpdate();
      }
    }
  };

  const onSubmit = async () => {
    setCreateLoading(true);

    await client.mutate({
      mutation: CREATE_TODO,
      variables: {
        data: todo
      },
      update: (cache, { data: { createTodo } }) =>
        addCreatedItem(cache, createTodo)
    });

    setCreateLoading(false);
    setAlert(true);
    setTodo({ title: "", done: false });

    setTimeout(() => setAlert(false), 2000);
  };

  const onUpdate = async () => {
    setCreateLoading(true);
    await client.mutate({
      mutation: UPDATE_TODO,
      variables: {
        data: { title: todo.title, done: todo.done },
        where: { id: todo.id }
      },
      update: (cache, { data: { updateTodo } }) =>
        changeUpdatedItem(cache, updateTodo)
    });

    setTodo({ title: "", done: false });
    setCreateLoading(false);
    setIsEditting(false);
  };

  const onDelete = async id => {
    setDeleteLoading({ isLoading: true, currentDeleteId: id });

    await client.mutate({
      mutation: DELETE_TODO,
      variables: {
        where: { id }
      },
      update: (cache, { data: { deleteTodo } }) =>
        removeDeletedItem(cache, deleteTodo)
    });

    setDeleteLoading({ isLoading: false, currentDeleteId: null });
  };

  const onCompleteTodo = async todo => {
    setCompleteLoading({ isLoading: true, currentCompleteId: todo.id });

    await client.mutate({
      mutation: UPDATE_TODO,
      variables: {
        data: { done: !todo.done },
        where: { id: todo.id }
      },
      update: (cache, { data: { updateTodo } }) =>
        changeUpdatedItem(cache, updateTodo)
    });

    setCompleteLoading({ isLoading: false, currentDeleteId: null });
  };

  const onEdit = todo => {
    setTodo(todo);
    setIsEditting(true);
  };

  const onCancel = () => {
    setIsEditting(false);
    setTodo({ title: "", done: null });
  };

  return (
    <>
      <Alert color="success" isOpen={alert}>
        Registro gravado com sucesso!
      </Alert>
      <Row>
        <Col md="8">
          <Input
            value={todo.title}
            onChange={e => onChange(e)}
            onKeyDown={e => onKeyDown(e)}
            placeholder="Título"
          />
        </Col>
        <Col md="4" className="mnc-todos--buttons">
          {!isEditting ? (
            <MncButton
              onClick={onSubmit}
              className="mnc-todos--button"
              color="primary"
              disabled={loading || createLoading}
              loading={createLoading}
            >
              Adicionar
            </MncButton>
          ) : (
            <MncButtonGroup
              ColProps={{
                xs: 6
              }}
              LeftButtonProps={{
                content: "Editar",
                onClick: onUpdate,
                className: "mnc-todos--button",
                color: "primary",
                disabled: loading || createLoading,
                loading: createLoading
              }}
              RightButtonProps={{
                content: "Cancelar",
                onClick: onCancel,
                className: "mnc-todos--button",
                color: "secondary"
              }}
            />
          )}
        </Col>
      </Row>
      <ListGroup>
        {data.todoes &&
          data.todoes.map((item, index) => (
            <ListGroupItem
              className="d-flex justify-content-between"
              key={index}
            >
              <div>
                <MncCheckbox
                  checked={item.done}
                  onChange={() => onCompleteTodo(item)}
                  loading={
                    completeLoading.isLoading &&
                    completeLoading.currentCompleteId === item.id
                  }
                  SpinnerProps={{
                    color: item.done ? "danger" : "success"
                  }}
                />
                {item.title}
                <Badge pill color={item.done ? "success" : "danger"}>
                  {item.done ? "Concluída" : "Não concluída"}
                </Badge>
              </div>
              <MncTodoListActions
                onDelete={() => onDelete(item.id)}
                onEdit={() => onEdit(item)}
                deleteLoading={
                  deleteLoading.isLoading &&
                  deleteLoading.currentDeleteId === item.id
                }
              />
            </ListGroupItem>
          ))}

        {data.todoes && data.todoes.length === 0 && (
          <h3>Não há dados cadastrados!</h3>
        )}

        {loading && (
          <Spinner className="mnc-todos--loading" type="grow" color="primary" />
        )}
      </ListGroup>
    </>
  );
};

export default MncTodosPage;
