import React from 'react'
import {card , Button} from 'react-bootstrap'


export default function LatesrRelease(){

    return <div>{
        horror.map(book => {
            return <Card>
            <Card.Img variant="top" src= {book.img} />
            <Card.Body>
            <Card.Title>{book.Title}</Card.Title>

              
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        })
    }

    </div>
}

