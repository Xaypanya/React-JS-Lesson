import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>Octopus Blog</h1></Link>
            {/* <h1>Octopus Blog</h1> */}
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

 
export default Navbar;