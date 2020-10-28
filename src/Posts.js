import React, { useState,useEffect  } from 'react';
function Posts() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] =useState([])
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  },[resourceType])
  return (
      <>
    <div>
    <button style={{background: "black", color: "white", padding: "10px", margin: "10px"}} onClick={() => (setResourceType('posts'))}>Posts</button>
   
    <button style={{background: "black", color: "white", padding: "10px", margin: "10px"}} onClick={() => (setResourceType('users'))}>Users</button>
   
    <button style={{background: "black", color: "white", padding: "10px", margin: "10px"}} onClick={() => (setResourceType('comments'))}>Comments</button>
    </div>
  <h1>{resourceType}</h1>
    {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
  );
}

export default Posts;
