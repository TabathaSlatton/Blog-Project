import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Cracking the Coding Interview', body: "This book is really helpful and has shown me what an ever-evolving world coding is. I'm very inspired for the next steps of my journey.", author: 'Ken', id: 1 },
        { title: 'How to Train your Puppy', body: 'Bark Bark Walking Bark Bark Fetch Bark Bark Treats..SOOO FETCH', author: 'Luma', id: 2 },
        { title: 'Eloquent JavaScript', body: "Today I read chapter one. It was really great and I'm excited to continue to learn more about building my JS skills!", author: 'Scott', id: 3 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
        );
}
 
export default Home;