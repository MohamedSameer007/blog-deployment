import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div>
      <div className="card mb-4">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <img
              className="w-100 h-100 object-fit-cover"
              src={post.image}
              alt="Post"
            />
          </div>
          <div className="card-body col-md-8">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">
              {post.content.length > 50
                ? `${post.content.substr(0, 50)}...`
                : post.content}
            </p>
            <Link to={`/posts/${post._id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;


// import { Link } from "react-router-dom";

// const Post = ({post}) => {
//   return (
//     <div>
//       <div class="card mb-4">
//         <div class="row">
//           <div class="col-sm-12 col-md-3">
//             <img
//               class="w-100 h-100 object-fit-cover"
//               src={post.image}
//               alt="..."
//             />
//           </div>
//           <div class="card-body col-md-8">
//             <h5 class="card-title">{post.title}</h5>
//             <p class="card-text">
//                 {post.content.substr(0,50)} ...
//             </p>
//             <Link to={`/posts/${post._id}`} class="btn btn-primary">
//               Read More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;
