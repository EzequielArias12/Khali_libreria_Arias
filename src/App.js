import Navbar from './components/NavBar/index';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartProvider";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/categoria/:categoriaId">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
