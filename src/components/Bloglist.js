import { Link } from "react-router-dom";

const Bloglist = ({blogs, tutu, }) => {
    // const blogs = props.blogs;
    // const title = props.tutu;
    

    return (  
        <div className="blog-list">
        <h1>{tutu}</h1>
        { blogs.map((bloggie) => (
                <div className="blog-preview" key={bloggie.id}>
                <Link to={`/blogs/${bloggie.id}`}>
                    <h2>{bloggie.title}</h2>
                    <p>Written by: {bloggie.author}</p>
                </Link>
                </div>
        ))}
        </div>
    );
}
 
export default Bloglist;