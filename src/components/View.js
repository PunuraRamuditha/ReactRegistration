import React,{useState,useEffect} from 'react';
import "./table.css";


function View() {
  const handleDelete = (id) => {
    fetch('http://localhost:8000/UserData/' + id, {
        method: 'DELETE',
    }).then(() => {
        setData(prevEntries => prevEntries.filter(value => value.id !== id));
    })
};
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch(' http://localhost:8000/Data'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
       
    }
    
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      });
  }
  
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="container">
     {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
     <div>
     <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Delete</th>
      </tr>
    {data.map(value => 
      <tr>
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
        <td>{value.email}</td>
        <td><button onClick={() => handleDelete(value.id)}>Delete</button></td>
      </tr>
    )}
   </table>
    </div>
    </div>
  );
}

export default View;