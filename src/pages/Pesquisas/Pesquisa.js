import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { Container, Texto, Block } from './style/style';
import { estilo } from './style/pesquisa.css';

import {
  CardClienteInformacoes,
  TituloCardInformacoes
} from "../Clientes/styledComponents/Styled";


export default class Pesquisa extends Component {
  static navigationOptions = {
    title: 'Pesquisas',
  };
  state = {
    data: [],
    spinner: true
  };

  data = ["a", "b", "c"];
  render() {
    return (
      <View style={estilo.page}>
        <ScrollView>
          {/* <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={estilo.geral2}>*/}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SubPesquisa");
            }}
          >
            <CardClienteInformacoes>
              <TituloCardInformacoes> OVOS COMERCIAIS </TituloCardInformacoes>
            </CardClienteInformacoes>
          </TouchableOpacity>
          {/*  </View>
            )}
            keyExtractor={({ id }, index) => id}
          /> */}
        </ScrollView>
      </View>
    );
  }
}
