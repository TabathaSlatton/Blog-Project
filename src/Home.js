import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('ken')
    const [age, setAge] = useState(20)

    const handleClick = () => {
        setName('tabatha')
        setAge(26)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
      );
}
 
export default Home;