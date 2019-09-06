import gql from "graphql-tag";

export const DELETE_TODO = gql`
  mutation DeleteTodo($where: TodoWhereUniqueInput!) {
    deleteTodo(where: $where) {
      id
    }
  }
`;
