import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const API_URL = process.env.REACT_APP_API_URL; // 👈 using env variable

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error while fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []); // include 'id' in dependency array to avoid warnings

  if (!post) {
    return <p>Loading......</p>;
  }

  const formattedDate = Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.createdAt));

  return (
    <div>
      <main className="container my-4">
        <div className="row">
          <article className="col-lg-8">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-meta">
              {formattedDate} <a href="#">{post.author}</a>
            </p>
            <img
              className="object-fit-cover img-fluid"
              src={post.image}
              alt=""
            />
            <div className="blog-post-content">
              <p>{post.content}</p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default PostDetail;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const PostDetail = () => {
//   const [post, setPost] = useState(null);
//   const { id } = useParams();

//   const fetchPost = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
//       setPost(response.data);
//     } catch (error) {
//       console.error("Error while fetching post:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPost();
//   }, []);

//   if (!post) {
//     return <p>Loading......</p>;
//   }

//   const formattedDate = Intl.DateTimeFormat("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   }).format(new Date(post.createdAt));

//   return (
//     <div>
//       <main class="container my-4">
//         <div class="row">
//           <article class="col-lg-8">
//             <h2 class="blog-post-title">{post.title}</h2>
//             <p class="blog-post-meta">{formattedDate}<a href="#">{post.author}</a></p>
//             <img class="object-fit-cover img-fluid" src={post.image} alt="" />
//             <div class="blog-post-content">
//               <p>{post.content}</p>
//             </div>
//           </article>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PostDetail;
