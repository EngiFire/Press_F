import { Link } from "react-router-dom"

const Notfound = () => {
    return(
      <div>
        <h1>Мне кажется ты потерялся.</h1>
        <p>Попробуешь вернуться на главную страницу?</p>
        <Link to="/">Home</Link>
      </div>
    )
  }
  
  export {Notfound}