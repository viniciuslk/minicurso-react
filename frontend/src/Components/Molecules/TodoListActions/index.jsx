import React from "react";
import MncButton from "../../Atoms/Button";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const MncTodoListActions = ({ onDelete, onEdit, deleteLoading }) => (
  <div className="mnc-todo-list-actions">
    <MncButton
      outline
      size="sm"
      color="danger"
      icon={faTrash}
      spinnerColor="danger"
      loading={deleteLoading}
      onClick={onDelete}
    />
    <MncButton
      outline
      size="sm"
      color="warning"
      icon={faPen}
      onClick={onEdit}
    />
  </div>
);

export default MncTodoListActions;
