import {Routes,Route} from 'react-router-dom'
import File from './components/File';
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
        
          <Route path ='/file' element={<File/>}/>
         </Routes>
         </>
  );
}

export default App;
