import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "Wowwwww I'm like sooooooooooo cool", author: 'Ken', id: 1 },
        { title: 'Welcome party!', body: 'Bark Bark Bark', author: 'Luma', id: 2 },
        { title: 'Web dev top tips', body: "There's this one video game...it's reaaalllllyyyy coool", author: 'Scott', id: 3 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
        );
}
 
export default Home;