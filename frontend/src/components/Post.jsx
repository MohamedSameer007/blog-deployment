import { Link } from "react-router-dom";

const Post = ({post}) => {
  return (
    <div>
      <div class="card mb-4">
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <img
              class="w-100 h-100 object-fit-cover"
              src={post.image}
              alt="..."
            />
          </div>
          <div class="card-body col-md-8">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">
                {post.content.substr(0,50)} ...
            </p>
            <Link to={`/posts/${post._id}`} class="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
