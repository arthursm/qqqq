import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View } from 'react-native';
import { Texto, Item, Linha } from './style-components/styledSideMenu';

class sideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View>
        <View>
          <Texto> Menu </Texto>
        </View>
        <Linha />
        <ScrollView>
          <View>
            <Item onPress={this.navigateToScreen('Pesquisa')}> Pesquisa </Item>
          </View>
          <Linha />
          <View>
            <Item onPress={this.navigateToScreen('Clientes')}> Clientes </Item>
          </View>
          <Linha />
          <View>
            <Item onPress={this.navigateToScreen('Produtos')}> Produtos </Item>
          </View>
          <Linha />
          <View>
            <Item onPress={this.navigateToScreen('Clientes')}> Detalhes </Item>
          </View>
          <Linha />
          <View>
            <Item onPress={this.navigateToScreen('Clientes')}> Detalhes </Item>
          </View>
          <Linha />
          <View>
            <Item onPress={this.navigateToScreen('Clientes')}> Detalhes </Item>
          </View>
          <Linha />
        </ScrollView>
      </View>
    );
  }
}
export default sideMenu;
