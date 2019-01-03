import styled from 'styled-components';

/**
 * Pesquisa
 */
export const Block = styled.View`
  background-color: #004f8b;
  height: 150px;
  width: 170px;
  border-radius: 5px;
  margin-right: 6px;
  padding: 50px;
  padding-top: 10px;
`;
export const Container = styled.View`
  flex-direction: row;
  padding-top: 10px;
  justify-content: space-between;
`;
/* export const Img = styled.image`
   height: 80px;
    width: 80px;
    margin-top: 5px;
    padding-left: -4px;
`; */
export const Texto = styled.Text`
  font-size: 24px;
  height: 40px;
  width: 170px;
  margin-left: -5px;
  color: #fff;
  zIndex: 1px;
`;
/**
 * SubPesquisaInformações
 */
export const DetalheCliente = styled.View`
  display: flex;
  background-color: white;
  margin: 5px;
`;
export const DetalheClienteCard = styled.View`
  background-color: #fff;
  border: 1px #ddd;
  border-radius: 5px;
  padding: 5px;
  margin: 1px;
  height: 70px;
`;
export const DetalheClienteInput = styled.Text`
  color: #306b98;
  font-size: 17px;
  font-weight: bold;
`;
/**
 * SubPesquisaProdutos
 */
export const CardClientes = styled.Text`
  background-color: #fff;
  margin: 5px;
  border: 1px #2c3e50;
  border-radius: 5px;
  padding: 5px;
  height: 60px;
  margin-left: 15px;
  margin-right: 15px;
`;
export const RodapeCard = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
export const StatusClientes = styled.Text`
  fontsize: 16px;
  fontweight: bold;
  color: #2c3e50;
  padding-left: 7px;
  position: absolute;
  margin-top: 28px;
`;
export const TituloCard = styled.Text`
  fontsize: 19px;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 7px;
  text-align: center;
`;
export const InfoCard = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #004f8b;
  margin-top: 10px;
`;
/**
 * SubPesquisa
 */
// CardClientes
export const SubCard = styled.View`
  background-color: #fff;
  border: 1px #2c3e50;
  margin: 5px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  padding: 5px;
  height: 85px;
`;
// rodapeCard
export const SubRodapeCard = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
// statusClientes
export const SubstatusClientes = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 7px;
  position: absolute;
  margin-top: 28px;
`;
export const SubTituloCard = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #2c3e50;
  padding-left: 7px;
  text-align: center;
`;
export const SubInfoCard = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
`;
export const DivIcon = styled.View`
  margin-top: 15px;
  position: absolute;
  background-color: #ddd;
  border-radius: 35px;
  z-index: 5;
`;
