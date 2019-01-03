import Styled from 'styled-components';

export const CardProdutos = Styled.View`
height: 100;
border-width: 1;
border-color: #DDD;
border-radius: 5;
margin: 5px;
background-color: #FFF;
`;

export const Imagens = Styled.Image`
 width: 50;
 height: 50;
 margin-top: 20;
`;

export const InformacaoProdutos = Styled.Text`
position: absolute;
font-size: 15;
padding-left: 65;
padding-top: 50;
`;

export const RodapeCardProdutos = Styled.View`
  font-size: 16;
  font-weight: bold;
  flex-direction: row;
  justify-content: space-between;
`;

export const TituloCardProdutos = Styled.Text`
font-size: 16;
width: 300;
font-weight: bold;
padding-left: 7px;
justify-content: center;
flex-wrap: wrap;
flex-direction: row;
`;

export const StatusProdutos = Styled.Text`
position: absolute;
font-size: 15;
padding-left: 65px;
padding-top: 65px
`;
