import MyAwesomeTable from './MyAwesomeTable';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';


function App() {
  const [posts, setPosts] = useState([])

  function getPosts(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => setPosts(resp.data))
  }

  useEffect(getPosts,[])


  return (
    
      <MyAwesomeTable dummyrows={posts}/>
    
  )
}

export default App;
