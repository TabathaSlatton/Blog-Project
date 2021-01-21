import { Link } from 'react-router-dom'
// sfc creates a stateless functional component with the simple react snippets extension

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Book Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#35605a",
                    borderRadius: '8px'
                }}>New Book Review</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;