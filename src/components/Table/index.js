import React, { Suspense, useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function TableDisplay() {
    const [detail, setDetail] = useState([]);
    const history = useHistory();
    const [data, setData] = useState([]);
    const forceUpdate = useForceUpdate();

  useEffect(() => {
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
    ])
    }, []);

    const onClickLink = (id) => {
      fetch(`http:// /article/details?articleId=${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setDetail(result)
          history.push("/detail");
        },
        (error) => {
          console.log('Fetch error')
          setDetail({
            articleId : 1,
            content:  `Great Book, Among the top 100, childrens’ favorite`
        }
        )
        history.push("/detail");
        }
      )
    };

    const generateTableRow = (data) => {
      console.log('ppp', data)
        let dataList = data.map((item, i) => 
            <tr key={i} style={{fontSize: '10px'}}>
                <td >{item.articleId}</td>
                <td><a href={``} onClick={(e) => {e.preventDefault(); onClickLink(item.articleId)}}>{item.title}</a></td>
                <td >{item.upvotes}</td>
                <td >{item.date}</td>
            </tr>
        );
       return dataList 
    } 
    console.log(data)
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-end', margin: '5%'}}>
        <Button variant={data.length > 0 ? "primary" : "secondary"} type="submit" style={{margin: '2%'}} onClick={() => {setData(data.sort((a,b) => new moment(b.date).format('YYYYMMDD') - new moment(a.date).format('YYYYMMDD'))); forceUpdate()}}>
            Newest
        </Button>
        <Button variant={data.length > 0 ? "primary" : "secondary"} type="submit" style={{margin: '2%'}} onClick={() => {setData(data.sort((a,b) => b.upvotes - a.upvotes)); forceUpdate()}}>
            Top
        </Button>
      </div>
      {data.length > 0 &&
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Vote</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                {data.length > 0 && generateTableRow(data)}
            </tbody>
        </Table>
      }
      {data.length === 0 &&
          'No result found'
      }
    </Suspense>
    
  );
}

export default TableDisplay;
