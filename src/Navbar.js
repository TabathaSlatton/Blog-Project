// sfc creates a stateless functional component with the simple react snippets extension

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Book Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#35605a",
                    borderRadius: '8px'
                }}>New Book Review</a>

            </div>
        </nav>
    );
}
 
export default Navbar;