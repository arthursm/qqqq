import React from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from 'react-navigation';
import {
  DetalhePedido,
  DetalhePedidoCard,
  DetalhePedidoInput,
  DetalhePedidoText,
  CardProdutos,
  RodapeCardProdutos,
  TituloCardProdutos,
  InformacaoProdutos,
  StatusProdutos,
} from './style-components/styleClients';
import { estilo } from './style/pedidos-detalhes.css';

class Informacoes extends React.Component {
  render() {
    return (
      <DetalhePedido>
        <DetalhePedidoCard>
          <DetalhePedidoInput>Código do Cliente </DetalhePedidoInput>
          <DetalhePedidoText>21350</DetalhePedidoText>
        </DetalhePedidoCard>

        <DetalhePedidoCard>
          <DetalhePedidoInput>Código do Pedido </DetalhePedidoInput>
          <DetalhePedidoText>673408</DetalhePedidoText>
        </DetalhePedidoCard>

        <DetalhePedidoCard>
          <DetalhePedidoInput>Pedido </DetalhePedidoInput>
          <DetalhePedidoText>27/04/2018</DetalhePedidoText>
        </DetalhePedidoCard>

        <DetalhePedidoCard>
          <DetalhePedidoInput>Entrega </DetalhePedidoInput>
          <DetalhePedidoText>29/04/2018</DetalhePedidoText>
        </DetalhePedidoCard>

        <DetalhePedidoCard>
          <DetalhePedidoInput>Vencimento </DetalhePedidoInput>
          <DetalhePedidoText>05/05/2018</DetalhePedidoText>
        </DetalhePedidoCard>

        <DetalhePedidoCard>
          <DetalhePedidoInput>Valor Pedido </DetalhePedidoInput>
          <DetalhePedidoText>R$ 208,32</DetalhePedidoText>
        </DetalhePedidoCard>

        <DetalhePedidoCard>
          <DetalhePedidoInput>Valor Total </DetalhePedidoInput>
          <DetalhePedidoText>R$ 208,32</DetalhePedidoText>
        </DetalhePedidoCard>
      </DetalhePedido>
    );
  }
}

class Itens extends React.Component {
  render() {
    return (
      <View>
        <CardProdutos>
          <RodapeCardProdutos>
            <Image style={estilo.imagem} source={require('../../images/meat.png')} />
            <TituloCardProdutos>A29 - FRANGO GRANDE CONGELADO 1.7 ENCAIXADO</TituloCardProdutos>
          </RodapeCardProdutos>
          <InformacaoProdutos>R$ 5,14 </InformacaoProdutos>
          <StatusProdutos>100 kg</StatusProdutos>
        </CardProdutos>

        <CardProdutos>
          <RodapeCardProdutos>
            <Image style={estilo.imagem} source={require('../../images/egg-carton.png')} />
            <TituloCardProdutos>A22 - OVO MARROM GRANDE INDUSTRIAL 6</TituloCardProdutos>
          </RodapeCardProdutos>
          <InformacaoProdutos>R$ 8,15 </InformacaoProdutos>
          <StatusProdutos>330 BD</StatusProdutos>
        </CardProdutos>

        <CardProdutos>
          <RodapeCardProdutos>
            <Image style={estilo.imagem} source={require('../../images/egg-carton.png')} />
            <TituloCardProdutos>011 - OVO SUPER EXTRA INDUSTRIAL C/30</TituloCardProdutos>
          </RodapeCardProdutos>
          <InformacaoProdutos>R$ 10,26 </InformacaoProdutos>
          <StatusProdutos>0 BD</StatusProdutos>
        </CardProdutos>

        <CardProdutos>
          <RodapeCardProdutos>
            <Image style={estilo.imagem} source={require('../../images/egg-carton.png')} />
            <TituloCardProdutos>A26 - OVO PEQUENO BRANCO INDUSTRAL T7</TituloCardProdutos>
          </RodapeCardProdutos>
          <InformacaoProdutos>R$ 5,52 </InformacaoProdutos>
          <StatusProdutos>500 BD</StatusProdutos>
        </CardProdutos>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Itens: {
      screen: Itens,
      navigationOptions: {
        tabBarLabel: 'Itens',
        tabBarIcon: ({ tintColor }) => <Icon name="storage" size={30} color={tintColor} />,
      },
    },
    Informacoes: {
      screen: Informacoes,
      navigationOptions: {
        tabBarLabel: 'Informações',
        tabBarIcon: ({ tintColor }) => <Icon name="info-outline" size={30} color={tintColor} />,
      },
    },
  },

  {
    order: ['Itens', 'Informacoes'],
    tabBarOptions: {
      activeTintColor: '#004f8b',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      },
    },
  },
);
