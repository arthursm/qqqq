import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';

import {
  TituloCard,
  CardPedidos,
  StatusPedidos,
  InformacaoCentro,
  RodapeCard,
  IconDiv,
  ContainerPedidos,
} from './style-components/styleClients';

export default class Pedidos extends Component {
  static navigationOptions = {
    title: 'Pedidos',
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
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PedidosDetalhes')}>
          <ContainerPedidos>
            <CardPedidos>
              <TituloCard> Edvaldo Viera da Silva</TituloCard>
              <InformacaoCentro>R$ 450,26 </InformacaoCentro>
              <RodapeCard>
                <StatusPedidos>12/12/2012</StatusPedidos>
                <IconDiv>
                  <Icon
                    name="info-outline"
                    size={30}
                    color="#32CD32"
                    iconStyle={{ alignContent: 'flex-start' }}
                    containerStyle={{ alignSelf: 'flex-end', marginBottom: 50 }}
                    onPress={() => this.props.navigation.navigate('Informações')}
                  />
                </IconDiv>
                <StatusPedidos>RECEBIDO</StatusPedidos>
              </RodapeCard>
            </CardPedidos>
          </ContainerPedidos>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('PedidosDetalhes')}>
          <ContainerPedidos>
            <CardPedidos>
              <TituloCard>Bruno Vitor Carvalho</TituloCard>
              <InformacaoCentro>R$ 1.486,12 </InformacaoCentro>
              <RodapeCard>
                <StatusPedidos>28/10/2014</StatusPedidos>
                <IconDiv>
                  <Icon
                    name="info-outline"
                    size={30}
                    color="#32CD32"
                    onPress={() => this.props.navigation.navigate('DetalhePedido')}
                  />
                </IconDiv>
                <StatusPedidos>RECEBIDO</StatusPedidos>
              </RodapeCard>
            </CardPedidos>
          </ContainerPedidos>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PedidosDetalhes')}>
          <ContainerPedidos>
            <CardPedidos>
              <TituloCard>Noah Vitor Corte Real</TituloCard>
              <InformacaoCentro>R$ 47,12 </InformacaoCentro>
              <RodapeCard>
                <StatusPedidos>31/01/2015</StatusPedidos>
                <IconDiv>
                  <Icon
                    name="info-outline"
                    size={30}
                    color="#32CD32"
                    onPress={() => this.props.navigation.navigate('DetalhePedido')}
                  />
                </IconDiv>
                <StatusPedidos>RECEBIDO</StatusPedidos>
              </RodapeCard>
            </CardPedidos>
          </ContainerPedidos>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('PedidosDetalhes')}>
          <ContainerPedidos>
            <CardPedidos>
              <TituloCard>Otávio Rodrigo Gonçalves</TituloCard>
              <InformacaoCentro>R$ 783,45 </InformacaoCentro>
              <RodapeCard>
                <StatusPedidos>01/05/2013</StatusPedidos>
                <IconDiv>
                  <Icon
                    name="info-outline"
                    size={30}
                    color="#32CD32"
                    onPress={() => this.props.navigation.navigate('DetalhePedido')}
                  />
                </IconDiv>
                <StatusPedidos>RECEBIDO</StatusPedidos>
              </RodapeCard>
            </CardPedidos>
          </ContainerPedidos>
        </TouchableOpacity>
      </View>
    );
  }
}
