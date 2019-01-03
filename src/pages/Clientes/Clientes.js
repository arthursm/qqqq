import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Text
} from "react-native";
import { SearchBar } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import {
  CardCliente,
  TituloCard,
  StatusClientes,
  RodapeCard,
  Ramal
} from "./styledComponents/Styled";
import { recuperarDadosStorage, CHAVE_CLIENTE } from "../../services/storage";

export default class Product extends Component {
  static navigationOptions = {
    title: "Clientes"
  };

  state = {
    data: [],
    spinner: true
  };

  pacote = [];

  componentDidMount() {
    recuperarDadosStorage(CHAVE_CLIENTE).then(valor => {
      teste = JSON.parse(valor);
      teste.forEach(dados => {
        this.pacote.push(dados);
      });

      this.setState({ data: this.pacote });
      this.setState({ spinner: false });
    });
  }

  render() {
    const { data, spinner } = this.state;
    return (
      <View>
        <Spinner
          visible={spinner}
          textContent="Carregando..."
          overlayColor="rgba(0,79,139,0.4)"
          size="large"
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBar
            lightTheme
            clearIcon={{ color: "#2c3e50" }}
            searchIcon={false}
            // onChangeText={someMethod}
            // onClear={someMethod}
            placeholder="Pesquisa..."
          />

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ClienteDetalhe", {
                    dados: item
                  });
                }}
              >
                <CardCliente>
                  <TituloCard> {item.nome} </TituloCard>
                  <RodapeCard>
                    <StatusClientes> {item.cnpj}</StatusClientes>
                    <StatusClientes> R$ 1.000,00 </StatusClientes>
                    <Ramal> {item.codigoCliente} </Ramal>
                  </RodapeCard>
                </CardCliente>
              </TouchableOpacity>
            )}
            keyExtractor={({ id }, index) => id}
          />
        </ScrollView>
      </View>
    );
  }
}
