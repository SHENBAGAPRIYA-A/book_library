import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Lib from './components/Lib'
import './App.css'
import axios from "axios";
import Library from './components/Library'
import Category from './Category'

function App() {
  const [data,setData]=useState([{sentence:"“If you love books, and love people who love books, LibraryThing is for you.”"},{sentence:"“Creating a catalog on the website is easy.”"},{sentence:"“There are also suggestions of related books to read; it's a virtual feast of information.”"},{sentence:"“Not surprisingly, librarians love LibraryThing.”"},{sentence:"“And it’s all free, with no membership fees, download limits, or ads–how awesome is that?”"},{sentence:"“LibraryThing has evolved into more than just a handy tool; it has become a thriving community.”"}])
  const [book,setBook]=useState(null)
  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const response=await axios.get("http://localhost:2001/api")
      setBook(response.data);
      }
      catch(error){
        console.error(error)
      }
    }
    fetchData();
  },[])
  return (
    <>
    <Header/>
    <Library/>
    <Lib data = {data} setData = {setData} />
    </>
    
  )
}

export default App
