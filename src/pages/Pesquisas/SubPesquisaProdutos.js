import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { CardClientes, InfoCard } from './style/style';

export default class SubPesquisaInformacoes extends Component {
  static navigationOptions = {
    title: 'Pesquisas',
  };

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          clearIcon={{ color: '#2c3e50' }}
          searchIcon={false}
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder="Pesquisa..."
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SubPesquisaInformacoes');
          }}
        >
          <CardClientes>
            <InfoCard>A22 - Frango Congelado 1.7 Encaixado</InfoCard>
          </CardClientes>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SubPesquisaInformacoes');
          }}
        >
          <CardClientes>
            <InfoCard>A22 - Frango Congelado 1.7 Encaixado</InfoCard>
          </CardClientes>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SubPesquisaInformacoes');
          }}
        >
          <CardClientes>
            <InfoCard>A22 - Frango Congelado 1.7 Encaixado</InfoCard>
          </CardClientes>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SubPesquisaInformacoes');
          }}
        >
          <CardClientes>
            <InfoCard>A22 - Frango Congelado 1.7 Encaixado</InfoCard>
          </CardClientes>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SubPesquisaInformacoes');
          }}
        >
          <CardClientes>
            <InfoCard>A22 - Frango Congelado 1.7 Encaixado</InfoCard>
          </CardClientes>
        </TouchableOpacity>
      </View>
    );
  }
}
