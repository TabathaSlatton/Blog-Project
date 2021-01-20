import { useState, useEffect } from 'react'
import BlogList from './BlogList'
// npx json-server --watch data/db.json --port 8000


const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    // takes in a function that will run every render
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(blogs => {
                setBlogs(blogs)
            })
    }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === "Ken")} title="Ken's Blogs"/> */}

        </div>
        );
}
 
export default Home;