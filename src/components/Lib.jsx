import React from 'react'
import axios from 'axios';
const Lib = (props) => {
    const{data,setData}=props;
    const{book,setBook}=props;
  return (
    <div>
      <hr></hr>
      <div class="card-container">
      {data.map((item) => (
        <div className='card'>
        
            <p>{item.sentence}</p>
        
        </div>
        ))}
        </div>
        <hr></hr>
        {/* <h3>Book Stocks</h3>
            <table className="table"
                style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Name</th>
                            <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Category</th>
                            <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Author</th>
                        </tr>
                    </thead>
                <tbody>
                     {book && book?.map((user) => (
                        <tr>
                            <td style={{ border: "2px solid black" }}>{user.name}</td>
                            <td style={{ border: "2px solid black" }}>{user.category}</td>
                            <td style={{ border: "2px solid black" }}>{user.author}</td>
                            
                            
                        </tr>
                    ))}
                </tbody>
            </table>  */}
    </div>
  )
}

export default Lib






