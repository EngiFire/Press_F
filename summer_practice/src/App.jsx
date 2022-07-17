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

import { Routes, Route } from 'react-router-dom';

import {Home} from './Pages/Home';
import {Stories} from './Pages/Stories';
import {Account} from './Pages/Account';
import { Notfound } from './Pages/Notfound';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div class='wrapper'>

      <Header/>

      <div class='content'>
        <Routes>
          <Route path='/welcome' element={<Home />} />
          <Route path='/stories/' element={<Stories />} />
          <Route path='/account/' element={<Account />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>

      <Footer/>

    </div>
    </>
  );
}

export default App;