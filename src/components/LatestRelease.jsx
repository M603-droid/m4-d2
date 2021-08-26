import React from 'react'
import {Button , Card} from 'react-bootstrap'
import horror from '../data/horror.json'


export default function LatesrRelease(){

    return <div className = "d-flex flex-wrap">{
        horror.map(book => {
            return <Card className = "book-images">
            <Card.Img variant="top"  src= {book.img} />
            <Card.Body>
            <Card.Title>{book.Title}</Card.Title>

              
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        })
    }

    </div>
}

