import { Link } from "react-router-dom"

const Notfound = () => {
    return(
      <div class='notfound-bd'>
        <h1>Мне кажется ты потерялся.</h1>
        <p>Попробуешь вернуться на главную страницу?</p>
        <Link to="/welcome">Home</Link>
      </div>
    )
  }
  
  export {Notfound}