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

import { Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav} from 'react-bootstrap';

import {Home} from './Pages/Home';
import {Stories} from './Pages/Stories';
import {Account} from './Pages/Account';
import { Notfound } from './Pages/Notfound';

import logo from './Components/logo1.png';

function App() {
  return (
    <>
    <div class='wrapper'>
      <div id="rectangle"></div>
      <div class="header">
        <NavbarBrand href='/welcome'>
          <img class='logo'
            src={logo}
            alt='Logo' 
          />
        </NavbarBrand>
          {/* <div class="burger-menu">
              <div class="nav-burger"><a href="#about">О салоне</a></div>
              <div class="nav-burger">Цены</div>
              <div class="nav-burger">Контакты</div>
            </div> */}
        <div class="nav-menu">
            <div class="nav-item"><Link to='/welcome'>Home</Link></div>
            <div class="nav-item"><Link to='/stories'>Stories</Link></div>
            <div class="nav-item"><Link to='/account'>Account</Link></div>
            {/* <div class="nav-open">
                <img style="width: 30px" src="./menu.png" alt="" srcset=""  draggable="false" />
            </div> */}
        </div>
      </div>

      <div class='content'>
        <Routes>
          <Route path='/welcome' element={<Home />} />
          <Route path='/stories/' element={<Stories />} />
          <Route path='/account/' element={<Account />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;