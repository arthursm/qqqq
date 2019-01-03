import React from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import { estilo } from "./style/detalhe-cliente.css";
import {
  CardClienteInformacoes,
  TituloCardInformacoes,
  DetalheCliente,
  DetalheClienteCard,
  DetalheClienteInput,
  DetalheClienteText
} from "./styledComponents/Styled";
import {
  recuperarDadosStorage,
  CHAVE_GRUPOS_PRODUTOS
} from "../../services/storage";

class Informacoes extends React.Component {
  render() {
    const { dados } = this.props.navigation.state.params;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetalheCliente>
          <DetalheClienteCard>
            <DetalheClienteInput> Cliente: </DetalheClienteInput>
            <DetalheClienteText> {dados.nome} </DetalheClienteText>
          </DetalheClienteCard>

          <DetalheClienteCard>
            <DetalheClienteInput> Endereço:</DetalheClienteInput>
            <DetalheClienteText> {dados.endereco} </DetalheClienteText>
          </DetalheClienteCard>

          <DetalheClienteCard>
            <DetalheClienteInput> Telefone:</DetalheClienteInput>
            <DetalheClienteText> {dados.telefone1} </DetalheClienteText>
          </DetalheClienteCard>

          {/* <DetalheClienteCard> */}
          <DetalheClienteInput>Grupos De Produtos</DetalheClienteInput>

          <FlatList
            data={dados.grupoProdutos}
            renderItem={({ item }) => (
              <DetalheClienteText>
                {" "}
                {item.id} -{item.nome}{" "}
              </DetalheClienteText>
            )}
            keyExtractor={({ id }, index) => id}
          />
          {/* </DetalheClienteCard> */}

          <DetalheClienteCard>
            <DetalheClienteInput> Categoria:</DetalheClienteInput>
            <DetalheClienteText> {dados.categoriaPreco} </DetalheClienteText>
          </DetalheClienteCard>

          <DetalheClienteCard>
            <DetalheClienteInput>Limite de crédito:</DetalheClienteInput>
            <DetalheClienteText>
              R$
              {dados.limiteCredito}
            </DetalheClienteText>
          </DetalheClienteCard>

          <DetalheClienteCard>
            <DetalheClienteInput>Saldo disponivel:</DetalheClienteInput>
            <DetalheClienteText> {dados.saldoDisponivel} </DetalheClienteText>
          </DetalheClienteCard>

          <DetalheClienteCard>
            <DetalheClienteInput>Prazo:</DetalheClienteInput>
            <DetalheClienteText> {dados.prazoPagamento} </DetalheClienteText>
          </DetalheClienteCard>
        </DetalheCliente>
      </ScrollView>
    );
  }
}

class Financeiro extends React.Component {
  render() {
    const { dados } = this.props.navigation.state.params;
    const { nome, codigoCliente, codigo } = dados
    return (
      <DetalheCliente>
        <DetalheClienteCard style={estilo.detalheClienteCard2}>
          <DetalheClienteInput>
            Cliente: {nome}
          </DetalheClienteInput>
          <DetalheClienteInput>
            Código Cliente: {codigoCliente}
          </DetalheClienteInput>
          <DetalheClienteInput>
            Código: {codigo}
          </DetalheClienteInput>
          <DetalheClienteInput>Situação: 01</DetalheClienteInput>
          <DetalheClienteInput>Valor: R$ 300,50 </DetalheClienteInput>
          <DetalheClienteInput>Data de pedido: 22/10/2018</DetalheClienteInput>
          <DetalheClienteInput>Entrega: 05/01/2019</DetalheClienteInput>
          <DetalheClienteInput>Vencimento: 06/02/2019</DetalheClienteInput>
        </DetalheClienteCard>

        <DetalheClienteCard style={estilo.detalheClienteCard2}>
          <DetalheClienteInput>
            Cliente: {nome}
          </DetalheClienteInput>
          <DetalheClienteInput>
            Código Cliente: {codigoCliente}
          </DetalheClienteInput>
          <DetalheClienteInput>
            Código: {codigo}
          </DetalheClienteInput>
          <DetalheClienteInput>Situação: 01</DetalheClienteInput>
          <DetalheClienteInput>Valor: R$ 100,30 </DetalheClienteInput>
          <DetalheClienteInput>Data de pedido: 22/10/2018</DetalheClienteInput>
          <DetalheClienteInput>Entrega: 05/01/2019</DetalheClienteInput>
          <DetalheClienteInput>Vencimento: 06/02/2019</DetalheClienteInput>
        </DetalheClienteCard>
      </DetalheCliente>
    );
  }
}

class Pedido extends React.Component {
  state = {
    data: [],
    spinner: true,
    dadosCliente: []
  };

  pacote = [];

  componentDidMount() {
    //dados refererentes ao cliente selecionado na página anterior
    const { dados } = this.props.navigation.state.params;
    recuperarDadosStorage(CHAVE_GRUPOS_PRODUTOS).then(valor => {
      teste = JSON.parse(valor);
      teste.forEach(dados => {
        this.pacote.push(dados);
      });

      this.setState({ dadosCliente: dados });
      this.setState({ data: this.pacote }); // Dados referentes aos grupos de produtos
      this.setState({ spinner: false });
    });
  }

  render() {
    //const { dados } = this.props.navigation;
    return (
      <View style={estilo.page}>
        <ScrollView>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={estilo.geral2}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("ClientesInformacoes", {
                      dados: item,
                      dadosCliente: this.state.dadosCliente
                    });
                  }}
                >
                  <CardClienteInformacoes>
                    <TituloCardInformacoes> {item.nome}</TituloCardInformacoes>
                  </CardClienteInformacoes>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={({ id }, index) => id}
          />
        </ScrollView>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Informacoes: {
      screen: Informacoes,
      navigationOptions: {
        tabBarLabel: "Informações",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="info-outline" size={30} color={tintColor} />
        )
      }
    },
    Financeiro: {
      screen: Financeiro,
      navigationOptions: {
        tabBarLabel: "Financeiro",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="attach-money" size={30} color={tintColor} />
        )
      }
    },
    Pedido: {
      screen: Pedido,
      navigationOptions: {
        tabBarLabel: "Pedido",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="add" size={30} color={tintColor} />
        )
      }
    }
  },

  {
    order: ["Informacoes", "Financeiro", "Pedido"],
    tabBarOptions: {
      activeTintColor: "#004f8b",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white"
      }
    }
  }
);
