import { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL; // 👈 Using environment variable

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">Latest Posts</h1>
            {posts.length > 0 ? (
              posts.map((post) => <Post key={post._id} post={post} />)
            ) : (
              <h3>No Post Available</h3>
            )}
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Categories</h5>
                <ul className="list-group">
                  {categories.map((category) => (
                    <li key={category._id} className="list-group-item">
                      <Link
                        to={`/posts/category/${category._id}`}
                        className="text-black"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;



// import { useEffect, useState } from "react";
// import Post from "../components/Post";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [categories, setCategories] = useState([]);


//   const fetchPosts = async () => {
//     const response = await axios.get('http://localhost:8000/api/posts')
//     setPosts(response.data);
//   }

//   const fetchCategories = async () => {
//     const response = await axios.get('http://localhost:8000/api/categories')
//     setCategories(response.data);
//   }


//   useEffect(() => {
//     fetchPosts();
//     fetchCategories();
//   }, [])
//   return (
//     <div>
//       <div class="container mt-4">
//         <div class="row">
//           <div class="col-lg-8">
//             <h1 class="mb-4">Latest Posts</h1>

//             {posts.length > 0 ?  posts.map((post) => (
//               <Post post={post} />
//             )):<h3>No Post Available</h3>}


//           </div>
//           <div class="col-lg-4">
//             <div class="card mb-4">
//               <div class="card-body">
//                 <h5 class="card-title">About Me</h5>
//                 <p class="card-text">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>

//             <div class="card mb-4">
//               <div class="card-body">
//                 <h5 class="card-title">Categories</h5>
//                 <ul class="list-group">
//                   {categories.map(category => <li class="list-group-item"><Link to={`/posts/category/${category._id}`} class="text-black">{category.name}</Link></li>)}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default PostList;
