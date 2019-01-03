import React, { Component } from "react";
import { View, TouchableOpacity, Modal, Text } from "react-native";
import { Icon, SearchBar, Button } from "react-native-elements";
import { FormLabel, FormInput } from "react-native-elements";
import { estilo } from "./style/sub-pesquisa.css";

import {
  SubCard,
  SubRodapeCard,
  SubstatusClientes,
  SubTituloCard,
  SubInfoCard,
  DivIcon
} from "./style/style";

export default class SubPesquisa extends Component {
  state = {
    modalVisible: false,
    texto: 1,
    teste: "texto"
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          clearIcon={{ color: "#2c3e50" }}
          searchIcon={false}
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder="Pesquisa..."
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisaProdutos");
          }}
        >
          <SubCard>
            <SubRodapeCard>
              <DivIcon>
                <Icon
                  name="check"
                  size={30}
                  color="#32CD32"
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                />
              </DivIcon>
            </SubRodapeCard>
            <SubstatusClientes>18805</SubstatusClientes>
            <SubTituloCard>FRANGOLANDIA</SubTituloCard>
            <SubInfoCard>CE-040</SubInfoCard>
            <SubInfoCard>Eusébio</SubInfoCard>
          </SubCard>
        </TouchableOpacity>
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
                <FormLabel labelStyle={estilo.title}>Código Cliente</FormLabel>
                <FormInput inputStyle={estilo.testes} />
                <FormLabel labelStyle={estilo.title}>Supermercados</FormLabel>
                <FormInput inputStyle={estilo.testes} />
                <FormLabel labelStyle={estilo.title}>Loja</FormLabel>
                <FormInput inputStyle={estilo.testes} />
                <FormLabel labelStyle={estilo.title}>Endereço</FormLabel>
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
