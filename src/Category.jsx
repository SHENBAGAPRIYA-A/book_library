import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const Category = () => {
    const [book, setBook] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const[name,setName]=useState();
    const[category,setCategory]=useState();
    const[author,setAuthor]=useState();
    const[isEdit,setIsEdit]=useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:2001/api");
                setBook(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const handleCategory = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filterBooksByCategory = () => {
        if (selectedCategory === 'all') {
            return book;
        }
        return book.filter((item) => item.category === selectedCategory);
    };

    const AddCategory = async(event) => {
        event.preventDefault();
        if (!isEdit) {
            // const newexpense = {
            //     id:uuidv4(),
            //     date: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,
            //     category:category,
            //     amount: parseInt(amount)
            // };
            const response=await axios.post('http://localhost:2001/api',{
                name:name,
                category: category,
                author:author,
            })
            setBook([...book, response.data]);  //spread operator
            toast.success("New user Added Successfully!");  
            setName("");
            setCategory("");
            setAuthor("");
        } 
    };
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <div>
            <button onClick={openModal} style={{ marginLeft: "1000px" }}>Add New</button>
            <select id="filter" value={selectedCategory} onChange={handleCategory}>
                <option value="all">All</option>
                <option value="Story">Story</option>
                <option value="Novel">Novel</option>
                <option value="Scientific">Scientific</option>
                <option value="Magazine">Magazine</option>
                <option value="Autobiography">Autobiography</option>
            </select>

            <hr />
            <h1 style={{ marginLeft: "500px", color: "grey" }}>Categories</h1>
            <hr />
            <h3>Book Stocks</h3>
            <table className="table" style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Name</th>
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Category</th>
                        <th style={{ border: "2px solid black", borderCollapse: "collapse" }}>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {filterBooksByCategory().map((user, index) => (
                        <tr key={index}>
                            <td style={{ border: "2px solid black" }}>{user.name}</td>
                            <td style={{ border: "2px solid black" }}>{user.category}</td>
                            <td style={{ border: "2px solid black" }}>{user.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Enter the Book Details</h2>
                        <form onSubmit={(event)=>AddCategory(event)}>
                            <label>Book Name:</label>
                            <input type="text" required /><br />
                            <label>Category:</label>
                            <select>
                                <option value="-">-</option>
                                <option value="Story">Story</option>
                                <option value="Novel">Novel</option>
                                <option value="Scientific">Scientific</option>
                                <option value="Magazine">Magazine</option>
                                <option value="Autobiography">Autobiography</option>
                            </select><br />
                            <label>Author:</label>
                            <input type="text" required /><br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;
