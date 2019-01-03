// Adiciona produtos

import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { FormLabel, FormInput, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SearchBar } from "react-native-elements";

import { estilo } from "./style/incluir-pedido.css";

function salvarItem(nome, preco, qtd) {
  alert('AIMEU')
  state.push({
    nom: nome,
    pre: preco,
    qua: qtd
  });
}

global.itensSelecionados = [
  {
    nome: "Franguim",
    preco: "5,3",
    qtd: "5"
  }
];


state = {
  nome: 'A',
  preco: "a",
  qtd: "4"
};
function rr() {
  "nossa deu certo?"
}

class ClientesInformacoes extends React.Component {
  state = {
    itemSelecionado: "",
    data: []
  };
  componentDidMount() {
    const { dadosCliente } = this.props.navigation.state.params;
    this.setState({ dadosCliente: dadosCliente });
  }
  render() {
    return (
      <ScrollView>
        <View style={estilo.incluirPedido}>
          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Nº Pedido </Text>
            <Text style={estilo.incluirPedidoText}>358</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Data </Text>
            <Text style={estilo.incluirPedidoText}>13/11/2018</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Cliente </Text>
            <Text style={estilo.incluirPedidoText}>
              Anario Barroso de Menezes Filho
            </Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Limite de Crédito </Text>
            <Text style={estilo.incluirPedidoText}>R$ 1.000,00</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Saldo </Text>
            <Text style={estilo.incluirPedidoText}>R$ 1.000,00</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Categoria </Text>
            <Text style={estilo.incluirPedidoText}>1</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Quantidade Itens </Text>
            <Text style={estilo.incluirPedidoText}>0</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Valor Total </Text>
            <Text style={estilo.incluirPedidoText}>R$ 0,00</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Data Entrega </Text>
            <Text style={estilo.incluirPedidoText}>14/11/2018</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class ClientesPedidos extends React.Component {
  state = {
    data: [],
    modalVisible: false,
    itemSelecionado: [],
    precoSelecionado: 0,
    valorTotalParcial: 0,
    qtdVendido: 0
  };

  setModalVisible(visibilidade) {
    this.setState({ modalVisible: visibilidade });
  }
  alerta = () => {
    alert("Sera?");
  };

  componentDidMount() {
    const { dados } = this.props.navigation.state.params;
    const { dadosCliente } = this.props.navigation.state.params;
    this.setState({ data: dados });
    this.setState({ dadosCliente: dadosCliente });
  }
  render() {
    var { produtos } = this.state.data;
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          style={estilo.backmodal}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <View style={estilo.fundoModal}>
            <View style={estilo.conteudoModal}>
              <View>
                <FormLabel style={estilo.title}>
                  Produto: {this.state.itemSelecionado.nomeProduto}
                </FormLabel>
                <FormLabel style={estilo.title}>
                  {" "}
                  Preço unitário: R${" "}
                  {parseFloat(this.state.precoSelecionado)
                    .toFixed(2)
                    .replace(".", ",")}
                </FormLabel>
                <FormLabel>Quantidade em estoque: 200 und</FormLabel>
                <FormLabel>Digite a quantidade</FormLabel>
                <FormInput
                  placeholder="Quantidade"
                  keyboardType="numeric"
                  onChangeText={qtdVendido => {
                    this.setState({ qtdVendido });
                  }}
                  value={this.state.qtdVendido}
                />
                <FormLabel style={estilo.title}>
                  Valor total: R${" "}
                  {parseFloat(
                    this.state.qtdVendido * this.state.precoSelecionado
                  )
                    .toFixed(2)
                    .replace(".", ",")}
                </FormLabel>

                <View style={estilo.botoes}>
                  <Button
                    style={estilo.botao}
                    title="Cancelar"
                    backgroundColor="#c0392b"
                    onPress={() => {
                      this.setModalVisible(false);
                    }}
                  />
                  <Button
                    style={estilo.botao}
                    title="Salvar"
                    backgroundColor="#27ae60"
                    onPress={() => {
                      salvarItem("a", "3", "5");
                      alert(JSON.stringify(state));
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/*  </View> */}
        </Modal>

        <SearchBar
          lightTheme
          clearIcon={{ color: "#2c3e50" }}
          searchIcon={false}
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder="Pesquisa..."
        />

        <FlatList
          data={produtos}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.setState({ itemSelecionado: item });
                this.setState({
                  precoSelecionado: 5
                });
                this.setModalVisible();
              }}
            >
              <View style={estilo.cardProdutos}>
                <View style={estilo.rodapeCardProdutos}>
                  <Image
                    style={estilo.imagem}
                    source={require("../../images/egg-carton.png")}
                  />
                  <Text style={estilo.tituloCardProdutos}>
                    {item.nomeProduto}
                  </Text>
                </View>
                <Text style={estilo.informacaoProdutos}>
                  {/* Recupera o valor do produto, adiciona duas casas decimais ao seu valor e põe uma virgula no lugar do ponto
                  R${" "}
                  {parseFloat(
                    item.tabelaPreco[this.state.dadosCliente.categoriaPreco - 1]
                  )
                    .toFixed(2)
                    .replace(".", ",")} */}
                </Text>
                <Text style={estilo.statusProdutos}>0 BD</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

class ClientesItens extends React.Component {
  state = {
    nome: 'A',
    preco: "a",
    qtd: "4"
  };
  componentDidMount() {
    this.setState();
  }
  render() {
    return (
      <View>
        <FlatList
          data={state}
          renderItem={({ item }) => (
            <View>
              <View style={estilo.cardProdutos}>
                <View style={estilo.rodapeCardProdutos}>
                  <Image
                    style={estilo.imagem}
                    source={require("../../images/egg-carton.png")}
                  />
                  <Text style={estilo.tituloCardProdutos}>{this.props.show}</Text>
                </View>
                <Text style={estilo.informacaoProdutos}>{item.preco} </Text>
                <Text style={estilo.statusProdutos}>{item.qtd}</Text>
              </View>
            </View>
          )}
          keyExtractor={({ id }, index) => id}
        />
        <Text>{this.props.show}</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    ClientesInformacoes: {
      screen: ClientesInformacoes,
      navigationOptions: {
        tabBarLabel: "Informações",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="info-outline" size={30} color={tintColor} />
        )
      }
    },
    ClientesPedidos: {
      screen: ClientesPedidos,
      navigationOptions: {
        tabBarLabel: "Novo",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="add" size={30} color={tintColor} />
        )
      }
    },
    ClientesItens: {
      screen: ClientesItens,
      navigationOptions: {
        tabBarLabel: "Itens",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={30} color={tintColor} />
        )
      }
    }
  },

  {
    order: ["ClientesInformacoes", "ClientesPedidos", "ClientesItens"],
    tabBarOptions: {
      activeTintColor: "#004f8b",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white"
      }
    }
  }
);
