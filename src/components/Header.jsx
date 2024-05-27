import React from 'react'

const Header = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"skyblue",
        
           
    }}>
        <img src="https://cdn2.vectorstock.com/i/1000x1000/96/16/tree-with-book-education-logo-template-vector-33109616.jpg"  width="100" height="80"/>
        <h1>BookLibrary</h1> 
        <nav>
            <ul>
                <a href="/home"><li>Home</li></a>
                <a href="/category"><li>Category</li></a>
                <a href="#"><li>Help</li></a>
                <a href="#"><li>More</li></a>
                
            </ul>
        </nav>
    </div>
  )
}

export default Header
