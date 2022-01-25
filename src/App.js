import Navbar from './components/NavBar/index';
import {ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
   <>
   <div className="mt-5 ml-5">
   <Navbar/>
   </div>
   <main>
     <ItemDetailContainer/>
   </main>
   </>
  );
}

export default App;
