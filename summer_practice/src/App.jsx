// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header.jsx';

// const App = () =>{

//   return(
//     <div>
//       <Header menu={["Москва", "Санкт-Петербург"]}/>
//       <h1>Привет Всем</h1>
//       <p>Я реакт приложение!</p>
//     </div>
//   )
  
// }

// function App() {
//   let title = 'Миигаик - лучший ВУЗ!'
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {title}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { Routes, Route, Link, Router } from 'react-router-dom';

import {Home} from './Pages/Home';
import {Stories} from './Pages/Stories';
import {Account} from './Pages/Account';
import { Notfound } from './Pages/Notfound';

function App() {
  return (
    <>
      <div>
        ffffffffffffff!!
      </div>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/stories'>Stories</Link>
        <Link to='/account'>Account</Link>
      </header>
      <div>
        Hiiii!!
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories/' element={<Stories />} />
          <Route path='/account/' element={<Account />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;