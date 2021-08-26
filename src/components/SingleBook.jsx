import {Card} from 'react-bootstrap'
const SingleBook = (props) => (
    <Card className = "book-images ml-5">
            <Card.Img variant="top"  src= {props.book.img} />
            <Card.Body>
            <Card.Title>{props.book.Title}</Card.Title>

              
            </Card.Body>
          </Card>
)
export default SingleBook
