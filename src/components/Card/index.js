import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function CardItem(props) {
  const [data, setData] = useState({
		articleId : 1,
		content: `Great Book, Among the top 100, childrens’ favorite`
}
)
  return (
    <Card style={{ width: '18rem', boxShadow:'5px 6px #888888' }}>
        <Card.Body>
            <Card.Title>{data.articleId}</Card.Title>
            <Card.Text>
            {data.content}
            </Card.Text>
           
        </Card.Body>
    </Card>
  )
}

export default CardItem