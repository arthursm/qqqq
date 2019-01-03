import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { estilo } from "./style/home.css";
import { CHAVE_GRUPOS_PRODUTOS, recuperarDadosStorage } from "../../services/storage";
export default class Home extends Component {
  static navigationOptions = {
    title: "Vendas",
    headerLeft: null
  };

  render() {
    return (
      <View style={estilo.page}>
        <View style={estilo.geral}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Clientes");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto}>Clientes</Text>
              <Image
                style={estilo.img}
                source={require("../../images/cliente.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Pedidos");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto}>Pedidos</Text>
              <Image
                style={estilo.img}
                source={require("../../images/pedidos.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={estilo.geral}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Pesquisa");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto2}>Pesquisas</Text>
              <Image
                style={estilo.img}
                source={require("../../images/pesquisa.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Produtos");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto3}>Produtos</Text>
              <Image
                style={estilo.img}
                source={require("../../images/produto.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={estilo.geral}>
          <TouchableOpacity>
            <View style={estilo.block}>
              <Text style={estilo.texto2}>Sincronizar</Text>
              <Image
                style={estilo.img}
                source={require("../../images/sincronizar.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={estilo.block}>
              <Text style={estilo.texto}>Metas</Text>
              <Image
                style={estilo.img}
                source={require("../../images/metas.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
