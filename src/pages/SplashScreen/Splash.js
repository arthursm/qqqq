import React, { Component } from 'react';
import {
  View, ImageBackground, Image, AsyncStorage, ActivityIndicator,
} from 'react-native';
import { styles } from './style/splash.css';
import { CHAVE_LOGADO } from '../../services/storage';

export default class Splash extends Component {
  static navigationOptions = {
    headerStyle: {
      display: 'none',
    },
  };

  componentDidMount() {
    AsyncStorage.getItem(CHAVE_LOGADO).then((data) => {
      // AsyncStorage.setItem(CHAVE_LOGADO, '0') // Comentar essa linha quando usar o app para a produção
      if (data == '1') {
        setTimeout(() => this.props.navigation.navigate('Home'), 1500);
      } else {
        setTimeout(() => this.props.navigation.navigate('Login'), 1500);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imagem} source={require('../../images/logo.png')} />
        <View style={styles.carregando}>
          <ActivityIndicator style={styles.indicador} size="large" color="#004f8b" />
        </View>
        <Image style={styles.splash} source={require('../../images/onesplash.png')} />
        <ImageBackground
          source={require('../../images/background.jpg')}
          style={styles.background}
        />
      </View>
    );
  }
}
