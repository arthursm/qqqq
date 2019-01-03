import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  AsyncStorage,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Button } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import api from "../../services/api";
import { styles } from "./style/login.css";
import { CHAVE_LOGADO } from "../../services/storage";
import {
  baixarClientes,
  baixarGruposProdutos,
  baixarProdutos
} from "../../services/select";

export default class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      display: "none"
    }
  };

  state = {
    spinner: false
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      load: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem(CHAVE_LOGADO).then(data => {
      // AsyncStorage.setItem(CHAVE_LOGADO, '0')
      // Comentar essa linha quando usar o app para a produção
      if (data == "1") {
        this.props.navigation.navigate("Home");
      }
    });
  }

  verificandoLogin(status) {
    this.setState({ spinner: false });
    switch (status) {
      case 0:
        baixarClientes();
        baixarGruposProdutos();
        this.setState({ spinner: false });
        this.props.navigation.navigate("Home");
        // Quando usar em produção troque de 0 para 1
        AsyncStorage.setItem(CHAVE_LOGADO, "1");

        break;
      case 1:
        ToastAndroid.showWithGravity(
          "Verifique o ID e a SENHA",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        break;
      case 2:
        ToastAndroid.showWithGravity(
          "Sem conexão com a internet",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        break;

      default:
        break;
    }
  }

  async verificaLogin() {
    if (this.state.name !== "" && this.state.pass !== "") {
      this.setState({
        spinner: !this.state.spinner
      });

      try {
        const response = await api.post("/select.php", {
          usuario: this.state.name,
          senha: this.state.pass
        });

        const { senha } = response.data;

        if (senha == 1) {
          this.verificandoLogin(0);
        } else {
          this.verificandoLogin(1);
        }
      } catch (err) {
        alert(err);
        this.verificandoLogin(2);
      }
    } else {
      ToastAndroid.showWithGravity(
        "Favor preencha todos os campos",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent="Carregando..."
          textStyle={styles.spinnerTextStyle}
          overlayColor="rgba(0,79,139,0.4)"
          size="large"
        />

        <Image
          style={styles.imagem}
          source={require("../../images/logo.png")}
        />
        <ImageBackground
          source={require("../../images/background.jpg")}
          style={styles.background}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView behavior="padding">
              <View style={styles.nome}>
                <Text style={styles.welcome}>ID</Text>
                <TextInput
                  onChangeText={name => this.setState({ name })}
                  value={this.state.name}
                  keyboardType="numeric"
                  style={styles.input}
                />
                <Text style={styles.welcome2}>Senha</Text>

                <TextInput
                  onChangeText={pass => this.setState({ pass })}
                  value={this.state.pass}
                  secureTextEntry
                  keyboardType="numeric"
                  style={styles.input}
                />
              </View>
              <View style={styles.botao}>
                <Button
                  title="Entrar"
                  onPress={() => this.verificaLogin()}
                  backgroundColor="#004f8b"
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
