import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ShowUsers from './components/ShowUsers';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/users/create' element = {<CreateUser/>} />
          <Route path='/users/all' element = {<ShowUsers/>} />
          <Route path='/users/all/:id' element={<EditUser/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
