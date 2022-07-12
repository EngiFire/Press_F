// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';

const App = () =>{

  return(
    <div>
      <Header menu={["Москва", "Санкт-Петербург"]}/>
      <h1>Привет Всем</h1>
      <p>Я реакт приложение!</p>
    </div>
  )
  
}

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

export default App;
