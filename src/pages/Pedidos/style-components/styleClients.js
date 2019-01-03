import styled from 'styled-components';

export const ContainerPedidos = styled.View`
  justify-content: space-around;
  margin: 8px;
`;
/**
 * Nome do Cliente (Topo)
 */
export const TituloCard = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 7px;
`;

/**
 * A view do card
 */
export const CardPedidos = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border: 1px #306b98;
  border-radius: 10px;
  padding: 5px;
  height: 100px;
`;
/**
 * Data e status (recebido)
 */
export const StatusPedidos = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  margin: 15px;
  margin-top: 2px;
`;

/**
 * Valor
 */
export const InformacaoCentro = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 7px;
  margin-top: 7px;
`;
export const RodapeCard = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const IconDiv = styled.View`
  display: flex;
  left: 80px;
  align-items: flex-start;
  background-color: transparent;
`;

/**
 * Pedido-Detalhes
 */

export const DetalhePedidoCard = styled.View`
  background-color: #fff;
  border: 1px #306b98;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  height: 65px;
`;
export const DetalhePedido = styled.View`
  justify-content: space-around;
  display: flex;
  flex-flow: column;
  background-color: white;
`;
export const DetalhePedidoInput = styled.Text`
  color: #306b98;
  font-size: 17px;
  font-weight: bold;
`;
export const DetalhePedidoText = styled.Text`
  font-size: 17px;
  margin-top: 4px;
`;
/**
 * Itens
 */
export const CardProdutos = styled.View`
  display: flex;
  background-color: white;
  border: 1px #306b98;
  border-radius: 9px;
  padding: 5px;
  margin-bottom: 5px;
  margin-horizontal: 15px;
  margin-vertical: 6px;
  height: 100px;
`;
export const RodapeCardProdutos = styled.View`
  font-size: 16px;
  font-weight: bold;
  flex-direction: row;
  justify-content: space-between;
`;
export const TituloCardProdutos = styled.Text`
font-size: 16px
width: 300px;
font-weight: bold;
padding-left: 7px;
justify-content: center;
flex-wrap: wrap;
flex-direction:row;
`;
export const InformacaoProdutos = styled.Text`
  justify-content: center;
  font-size: 15px;
`;
export const StatusProdutos = styled.Text`
  position: absolute;
  font-size: 15px;
  width: 320px;
  padding-left: 65px;
  padding-top: 65px;
`;
