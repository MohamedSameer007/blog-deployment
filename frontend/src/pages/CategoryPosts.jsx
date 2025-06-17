import Post from "../components/Post";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const CategoryPosts = () => {
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState([]);
    const { id } = useParams();

    const API_URL = process.env.REACT_APP_API_URL; // 👈 use env variable

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/posts/category/${id}`);
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching category posts:", error);
        }
    };

    const fetchCategory = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/categories/${id}`);
            setCategory(response.data);
        } catch (error) {
            console.error("Error fetching category:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
        fetchCategory();
    }, []); // 👈 include 'id' to ensure refetching when param changes

    if (!category) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <main>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-8">
  <h1 className="mb-4">{category?.name}</h1>
  {Array.isArray(posts) && posts.length > 0 ? (
    posts.map((post) => <Post key={post._id} post={post} />)
  ) : (
    <h4>No posts available</h4>
  )}
</div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default CategoryPosts;

// import Post from "../components/Post";
// import {useEffect, useState} from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom";

// const CategoryPosts = () => {
    
//     const [posts, setPosts] = useState([]);
//     const [category, setCategory] = useState(null);
//     const { id } = useParams()

//     const fetchPosts = async () => {
//         const response = await axios.get(`http://localhost:8000/api/posts/category/${id}`)
//         setPosts(response.data);
//     }

// 	const fetchCategory = async () => {
//         const response = await axios.get(`http://localhost:8000/api/categories/${id}`)
//         setCategory(response.data);
//     }


//     useEffect(() => {
//         fetchPosts();
// 		fetchCategory();
//     }, [])

//     if (!category) {
//         return <p>Loading...</p>
//     }
//   return (
//     <div>
//         <main>
//         <div class="container mt-4">
//             <div class="row">
//                 <div class="col-lg-8">
//                     <h1 class="mb-4">{category.name}</h1>

//                     {
//                         posts.length > 0 ? posts.map((post) => <Post post={post} />) : <h4>No posts available</h4>
//                     }
                 

//                 </div>

               
//             </div>
//         </div>
//     </main>
        
//     </div>
//   )
// }

// export default CategoryPosts