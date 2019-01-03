import { DrawerNavigator } from 'react-navigation';
import SideMenu from './SideMenu';
import clientes from '../Clientes/Clientes';
import Produtos from '../Produtos/Produtos';
import detalhes from './PedidosDetalhes';
import Pesquisa from '../Pesquisas/Pesquisa';

export default DrawerNavigator(
  {
    Produtos: {
      screen: Produtos,
    },
    Pesquisa: {
      screen: Pesquisa,
    },
    Detalhes: {
      screen: detalhes,
    },
    Clientes: {
      screen: clientes,
    },
  },
  {
    drawerWidth: 300,
    contentComponent: SideMenu,
    drawerBackgroundColor: 'white',
    labelStyle: 'white',
  },
);
