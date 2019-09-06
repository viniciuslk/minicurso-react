import gql from "graphql-tag";

export const CREATE_TODO = gql`
  mutation createTodo($data: TodoCreateInput!) {
    createTodo(data: $data) {
      id
      title
      done
    }
  }
`;
