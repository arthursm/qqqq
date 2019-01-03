import { createStackNavigator } from 'react-navigation';

// Páginas
import Splash from '../pages/SplashScreen/Splash';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Clientes from '../pages/Clientes/Clientes';
import ClienteDetalhe from '../pages/Clientes/ClienteDetalhe';
import ClientesInformacoes from '../pages/Clientes/ClientesInformacoes';
import Pedidos from '../pages/Pedidos/Pedidos';
import PedidosDetalhes from '../pages/Pedidos/PedidosDetalhes';
import Pesquisa from '../pages/Pesquisas/Pesquisa';
import Produtos from '../pages/Produtos/Produtos';
import SubPesquisa from '../pages/Pesquisas/SubPesquisa';
import SubPesquisaProdutos from '../pages/Pesquisas/SubPesquisaProdutos';
import SubPesquisaInformacoes from '../pages/Pesquisas/SubPesquisaInformacoes';

const titulo = 'Informações';

// Rotas
export default createStackNavigator(
  {
    Splash,
    Produtos,
    Login,
    Home,
    Clientes,
    ClienteDetalhe,
    ClientesInformacoes,
    Pedidos,
    PedidosDetalhes,
    Pesquisa,
    SubPesquisa,
    SubPesquisaProdutos,
    SubPesquisaInformacoes,
  },
  // Opções de estilo no header de cada página
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#004f8b',
      },
      title: titulo,
      headerTintColor: '#FFF',
    },
  },
);
