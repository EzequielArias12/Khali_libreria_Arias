import Navbar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer/index';

function App() {
  return (
   <>
    <Navbar/>
    <div className='mt-5 ml-5'>
    <ItemListContainer/>
    </div>
   </>
  );
}

export default App;
