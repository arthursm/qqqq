import React, { Component } from "react";
import { TouchableOpacity, Text, View, Modal } from "react-native";
import {
  DetalheCliente,
  DetalheClienteCard,
  DetalheClienteInput
} from "./style/style";
import { estilo } from "./style/sub-pesquisa-informacoes.css";
import { FormLabel, FormInput } from "react-native-elements";
import { Icon, Button } from "react-native-elements";

export default class SudPesquisaInformacoes extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  static navigationOptions = {
    title: "Informações"
  };

  render() {
    return (
      <View>
        <DetalheCliente>
          <DetalheClienteCard>
            <DetalheClienteInput>Produto</DetalheClienteInput>
            <Text style={estilo.detalheClienteText}>
              914 - ASA DE FRANGO CONGELADA
            </Text>
          </DetalheClienteCard>

          <DetalheClienteCard>
            <DetalheClienteInput>Supermercado</DetalheClienteInput>
            <Text style={estilo.detalheClienteText}>
              40 - CENTERBOX JOAO XVIII
            </Text>
          </DetalheClienteCard>

          <DetalheClienteCard>
            <DetalheClienteInput>Observação</DetalheClienteInput>
            <Text style={estilo.detalheClienteText}>Motorista Erick</Text>
          </DetalheClienteCard>
        </DetalheCliente>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          style={estilo.backmodal}
          onRequestClose={() => alert("Modal has been closed.")}
        >
          <View style={estilo.fundoModal}>
            <View style={estilo.conteudoModal}>
              <View>
                <FormLabel labelStyle={estilo.title}>Concorrência</FormLabel>
                <FormInput inputStyle={estilo.testes} />
                <FormLabel labelStyle={estilo.title}>Preço</FormLabel>
                <FormInput inputStyle={estilo.testes} />
                <View style={estilo.botoes}>
                  <Button
                    buttonStyle={estilo.cancelar}
                    title="Cancelar"
                    onPress={() => {
                      this.setModalVisible(false);
                    }}
                  />
                  <Button
                    buttonStyle={estilo.salvar}
                    title="Salvar"
                    onPress={() => this.verificaLogin()}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={estilo.icone}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Icon style={estilo.icone} color="#FFF" name="add" size={60} />
        </TouchableOpacity>
      </View>
    );
  }
}
