import React, { Suspense, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

function FormInput() {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const history = useHistory();
   

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (name.length > 2) {
            fetch(`http://articles?authorName=‘${name}’`)
            .then(res => res.json())
            .then(
                (result) => {
                setData(result)
                history.push("/table");
                },
                (error) => {
                console.log('Fetch error')
                setData([ 	
                    {
                        articleId : 1,
                        title: `Harry Potter and the Sorcerer’s Stone Review`,
                        upvotes: 56,
                        date: `12/23/2016`
                    },
                
                {
                        articleId : 2,
                        title: `Harry Potter and the Half Blood Prince Review`,
                        upvotes: 23,
                        date: `12/2/2016`
                    },
                {
                        articleId : 3,
                        title: `Harry Potter and the Goblet of Fire Review`,
                        upvotes: 3,
                        date: `11/2/2017`
                    }
                ]
                )
                history.push("/table");
                }
            )
        }
    }

  return (
       <Form>
        <Form.Group>
            <Form.Label>Author's Name</Form.Label>
            <Form.Control placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Button variant={name.length > 2 ? "primary" : "secondary"} type="submit" onClick={(e) => {handleOnSubmit(e)}} >
            Submit
        </Button>
      </Form>
    
  );
}

export default FormInput;
