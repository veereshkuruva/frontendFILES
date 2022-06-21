import {Routes,Route} from 'react-router-dom'
import Form from './components/Form';
import Navbar from './components/Navbar';
import Show from './components/Show';

function App() {
  return (
    <>
          <Navbar/>
         <Routes>
          <Route path ='/' element={<Form/>}/>
          <Route path ='/show' element={<Show/>}/>
         </Routes>
         </>
  );
}

export default App;
