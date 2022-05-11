import { useState } from 'react';
import shoes from './shoes.jpg'

function Item2()
{
    const [count, setcount] = useState(0)
    function Shop(){
        
        setcount(count + 1)
    }
    // const [count, setcount] = useState(0)

    return(
        <div>
            <img src={shoes} alt="No img" />
            <h2>Shoes</h2>
            <h3>Price: 500$</h3>
            <button onClick={Shop}>Click Here</button>
            {count}
        </div>
    )
}

export default Item2