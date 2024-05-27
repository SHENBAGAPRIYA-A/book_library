import React from 'react'

const Library = () => {
    
  return (
    <div style={{display:"flex",
        justifyContent:"space-between",
        padding:"50px",}}>
        <div >
        <img src="https://img.freepik.com/premium-photo/book-library-back-school_670008-3481.jpg" alt="library" width="300" height="300"/>
        </div>
        <div style={{padding:"50px"}}>
            <h2 >BookLibrary</h2>
            <h3>A Home For Your Books.</h3>
            <p style={{fontFamily:"sans-serif"}}>A library is a collection of sources of information and similar resources, made accessible to a defined community for reference or borrowing. It provides physical or digital access to material and may be a physical building or room, or a virtual space, or both. A library's collection can include books, periodicals, newspapers, manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks, databases, and other formats. Libraries range in size from a few shelves of books to several million items. Sidney Sheldon perfectly describes: “Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life.”</p>
            <ul>
                <li>BookLibrary is completely free.</li><br></br>
                <li>Add books, movies and music from Amazon, the Library of Congress and 4,941 other libraries.</li><br></br>
                <li>Track your reading progress, rate and review.</li><br></br>
                <li>See detailed charts and stats about your library and reading life.</li><br></br>
                <li>Find your new favorite book with personalized recommendations.</li><br></br>   
            </ul>
        </div>
        <div>
            <h3></h3>
            <nav>
                <ul style={{fontSize:"large"}}>
                    <a href="#">Login  </a>
                    <br></br>
                    <p>or</p>
                    
                    <a href="#">SignUp</a>
                </ul>
            </nav>
        </div>
        
      
    </div>
  )
}

export default Library
