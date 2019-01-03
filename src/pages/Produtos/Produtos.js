import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import FlatLister from './Flatlist';

export default class Produtos extends Component {
  static navigationOptions = {
    title: 'Produtos',
  };

  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          id: 57,
          produtos: 'CAJUÍNA GRANDE LATA',
          valor: 'R$ 2,26',
          status: '500 ml',
        },
        {
          id: 385,
          produtos: 'ASA DE FRANGO PEQUENA CONGELADA',
          valor: 'R$ 5,47 ',
          status: ' 10 Kg',
        },
        {
          id: 11,
          produtos: 'OVO SUPER EXTRA INDUSTRIAL C/30',
          valor: 'R$ R$ 10,26',
          status: 'C/30',
        },
      ],
      ListFilter: [],
    };
  }

  componentWillMount() {
    List = this.state.List;
    this.setState({
      ListFilter: List,
    });
  }

  setSearchText(event) {
    searchText = event.nativeEvent.text;
    // Um evento nativo de react
    List = this.state.List;
    this.setState({
      ListFilter: List,
    });
    searchText = searchText.trim().toLowerCase();
    // converte o texto pesquisado para letras minusculas(toLowerCase)
    // Remove os espaços em branco (trim)
    List = List.filter((pesquisa) => {
      return pesquisa.produtos.toLowerCase().match(searchText);
      // retorna produtos que é o que eu to filtrando
      return pesquisa.valor.toLowerCase().match(searchText);
      return pesquisa.id.toLowerCase().match(searchText);
      // (match) procura uma string para da partida em uma expressao
    });
    this.setState({
      ListFilter: List,
    });
  }

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          clearIcon={{ color: '#2c3e50' }}
          searchIcon={false}
          // onChangeText={someMethod}
          // onClear={someMethod}
          onChange={this.setSearchText.bind(this)}
          placeholder="Pesquisa..."
        />

        <FlatList
          data={this.state.ListFilter}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <FlatLister {...item} />}
        />
      </View>
    );
  }
}
