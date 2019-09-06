import { GET_TODOES } from "../../../Apollo/Queries/list";

export const removeDeletedItem = (cache, returnedData) => {
  let data = cache.readQuery({ query: GET_TODOES });

  data.todoes = data.todoes.filter(item => item.id !== returnedData.id);

  cache.writeQuery({ query: GET_TODOES, data });
};

export const addCreatedItem = (cache, returnedData) => {
  let data = cache.readQuery({
    query: GET_TODOES
  });

  data.todoes = [
    ...data.todoes,
    {
      ...returnedData
    }
  ];

  cache.writeQuery({
    query: GET_TODOES,
    data
  });
};

export const changeUpdatedItem = (cache, returnedItem) => {
  let data = cache.readQuery({ query: GET_TODOES });

  data.todoes = data.todoes.map(item => {
    return item.id === returnedItem.id ? returnedItem : item;
  });

  cache.writeQuery({ query: GET_TODOES, data });
};
