import React from 'react';
import { View } from 'react-native';
import {
  CardProdutos,
  InformacaoProdutos,
  RodapeCardProdutos,
  TituloCardProdutos,
  StatusProdutos,
  Imagens,
} from './style/produtos.css';

export default props => (
  <View>
    <CardProdutos>
      <RodapeCardProdutos>
        <Imagens source={require('../../images/can.png')} />
        <TituloCardProdutos>
          {' '}
          {props.produtos}
          {' '}
        </TituloCardProdutos>
      </RodapeCardProdutos>
      <InformacaoProdutos>
        {' '}
        {props.valor}
        {' '}
      </InformacaoProdutos>
      <StatusProdutos>
        {' '}
        {props.status}
        {' '}
      </StatusProdutos>
    </CardProdutos>
  </View>
);
