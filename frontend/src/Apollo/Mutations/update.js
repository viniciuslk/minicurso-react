import gql from "graphql-tag";

export const UPDATE_TODO = gql`
  mutation UpdateTodo($data: TodoUpdateInput!, $where: TodoWhereUniqueInput!) {
    updateTodo(data: $data, where: $where) {
      id
      title
      done
    }
  }
`;
