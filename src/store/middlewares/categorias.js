import { createListenerMiddleware } from "@reduxjs/toolkit";
import { buscarCategorias } from 'store/reducers/categorias';

export const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: buscarCategorias.pending,
  effect: async (action) => {
    console.log("Bucando categorias: ", action);
  }
})