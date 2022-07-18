import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import card1 from '../Assets/card1.png';
import card2 from '../Assets/card2.png';
import card3 from '../Assets/card3.png';

const Socials = () =>{
    return(
      <div class='socials-bd'>
        <h1 class='social-title'>Над проектом работали следующие прекрасные люди.</h1>
        <div class='cont-card'>
            <Row xs={1} md={5} className="g-4">
            <Col></Col>
            
            <Col>
            <Card>
            <Card.Img variant="top" src={card1}
            height={200}
            />
            <Card.Body>
                <Card.Title><div class="card_title"><Link to='/advice'>Волощенко Алексей</Link></div></Card.Title>
                <Card.Text>
                Подборка 20 артефактов брони, наносящих пассивный урон противнику и не ломающих систему игры.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
            <Card.Img variant="top" src={card2}
            height={200}
            />
            <Card.Body>
                <Card.Title><div class="card_title"><Link to='/advice'>Гем Иван</Link></div></Card.Title>
                <Card.Text>
                "Методы построения интересных и сложных боёв" или "Сказание о том, как не сделать бой повседневной рутиной".
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
            <Card.Img variant="top" src={card3}
            height={200}
            />
            <Card.Body>
                <Card.Title><div class="card_title"><Link to='/advice'>Кобец Кузьма</Link></div></Card.Title>
                <Card.Text>
                Все любят слухи – они могут сбивать с толку, могут быть тем самым «крюком», который вытянет вашу кампанию, а могут и просто взбодрить заскучавших игроков.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col></Col>
            </Row>
        </div>
        <h3 class='cont'>Так же вы можете отправлять нам свои пожелания/статьи или сценарии на почту: voloshchenko.alexey01@gmail.com </h3>
      </div>
    )
  }
  
  export {Socials}