import {useState} from 'react'; 

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum........', author: 'hattori', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum........', author: 'misuki', id: 2},
        {title: 'Happy birthday', body: 'lorem ipsum........', author: 'nezuko', id: 3},
    ]);

    return ( 
        <div className="home">
           { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
           ))}
        </div>
    );
}
 
export default Home;