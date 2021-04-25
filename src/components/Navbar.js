const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Octopus Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={Styles.home}>New Blog</a>
            </div>
        </nav>
    );
}

const Styles = {
  home: {
    color: "white",
    backgroundColor: "#f1356d",
    borderRadius: '8px',
  }
}
 
export default Navbar;