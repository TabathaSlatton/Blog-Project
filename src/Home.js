import BlogList from './BlogList'
import useFetch from './useFetch';
// npx json-server --watch data/db.json --port 8000


const Home = () => {
   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div id="loading">{ error }</div> }
            { isPending && <div id="loading">Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
            {/* <BlogList blogs={blogs.filter(blog => blog.author === "Ken")} title="Ken's Blogs"/> */}

        </div>
        );
}
 
export default Home;