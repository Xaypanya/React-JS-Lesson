import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending: isPendingHuh, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        
        <div className="home">
         { error && <h2>{error}</h2> } 
         {  isPendingHuh && <h2>Loading Data...</h2>}
         {blogs && <Bloglist blogs={blogs} tutu={"All blogs!"}/>}
        </div>
    );
}
 
export default Home;