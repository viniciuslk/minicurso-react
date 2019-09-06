import gql from "graphql-tag";

export const GET_TODOES = gql`
  query Todoes {
    todoes {
      id
      title
      done
    }
  }
`;
