import styled from 'styled-components/native';

export const CardCliente = styled.View`
  background-color: #fff;
  border-width: 1;
  border-color: blue;
  border-radius: 5;
  padding: 5px;
  margin-horizontal: 15;
  margin-vertical: 6px;
  height: 100px;
  flex-direction: column;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 3;
`;

export const IconDiv = styled.View`
  position: absolute;
  margin-left: 275px;
  margin-top: 8px;
  height: 40px;
  width: 40px;
  border-width: 3;
  border-color: #6e6e6e;
  border-radius: 35;
  justify-content: center;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 3;
`;

export const RodapeCard = styled.View`
  display: flex;
  justify-content: space-between;
`;

export const StatusClientes = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 7px;
  margin-top: 7px;
`;
export const Ramal = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #2c3e50;
  text-align: right;
  margin-right: 8px;
`;
export const TituloCard = styled.Text`
  font-size: 19;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 7px;
`;

// / --------------------------------------------------------------- ///
// detalhe-cleiente

export const DetalheCliente = styled.View`
  display: flex;
  background-color: white;
`;

export const DetalheClienteCard = styled.View`
  background-color: #fff;
  border-width: 1;
  border-color: #ddd;
  border-radius: 5;
  padding: 5px;
  margin: 1px;
  height: 65px;
`;

export const DetalheClienteInput = styled.Text`
  color: #306b98;
  font-size: 17;
  font-weight: bold;
`;

export const DetalheClienteText = styled.Text`
  font-size: 17;
  margin-top: 4px;
`;


// / --------------------------------------------------------------- ///
// Cliente-Informações

export const CardClienteInformacoes = styled.View`
background-color: #fff;
border-width: 1;
border-color: blue;
border-radius: 5;
padding: 5px;
margin-horizontal: 15;
margin-vertical: 6px;
height: 60px;
width: 318px;
flex-direction: column;
shadow-color: #000;
shadow-opacity: 0.8;
shadow-radius: 2;
elevation: 3;
`;
export const TituloCardInformacoes = styled.Text`
  font-size: 19;
  font-weight: bold;
  color: #2c3e50;
  padding-top: 8px;
  padding-left: 7px;
`;