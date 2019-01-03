import { ToastAndroid } from "react-native";
import {
  CHAVE_CLIENTE,
  CHAVE_GRUPOS_PRODUTOS,
  salvarDadosStorage,
  recuperarDadosStorage
} from "./storage";
import api from "./api";

export const baixarClientes = async () => {
  const response = await api.post("/clientes.json");

  try {
    salvarDadosStorage(CHAVE_CLIENTE, JSON.stringify(response.data));
  } catch (err) {
    ToastAndroid.showWithGravity(
      "Não foi possivel fazer o download dos clientes",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }
};

export const baixarGruposProdutos = async () => {
  const response = await api.post("/gruposProdutos.json");

  try {
    // alert(JSON.stringify(response.data));
    salvarDadosStorage(CHAVE_GRUPOS_PRODUTOS, JSON.stringify(response.data));
    recuperarDadosStorage(CHAVE_GRUPOS_PRODUTOS);
  } catch (err) {
    ToastAndroid.showWithGravity(
      "Não foi possivel fazer o download dos grupos produtos",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }
};

