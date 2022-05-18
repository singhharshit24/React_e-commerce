import logo from './logo.svg';
import shoes from './shoes.jpg'
import perfume from './perfume.jpg'
import football from './football.jpg'
import toy from './toy.jpg'
import bottle from './bottle.jpg'
import bag from './bag.jpg'
import './App.css';
import { useState } from 'react';

//This is a function
function App() {
  const [count, setcount] = useState(0)
  const [bill, setbill] = useState(0)

  function Shop(price) {
    setcount(count + 1)
    setbill(bill + price)
  }
  function Item1(prop) {
    return (
      <div className="Item">
        <br />
        <img src={prop.img} className="img1"></img>
        <h2>{prop.label}</h2>
        <h3>{prop.price}$</h3>
        <button className='btns' onClick={() => Shop(prop.price)}>Add to Cart</button>
        {/* <button className='btns'>+</button> */}
        <br /><br />
      </div>
    );
  }
  function check_out(){
    alert("Ready for check out.")

  }

  return (
    <div className="App">
       

      <table align="center" cellSpacing={30}>
        <tr>
          <td colSpan={3} align="left"><h1 className='title'><u>ShopKart.com</u></h1></td>
          <td align='right'>
            <button  className='cart' onClick={check_out}>
              Items in Cart: {count}
              <br />
              Bill: {bill}$
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <Item1 img={shoes} label="Shoes" price={200}></Item1>
          </td>
          <td><Item1 img={perfume} label="Perfume" price={500}></Item1></td>
          <td><Item1 img={football} label="Football" price={20}></Item1></td>
        </tr>
        <tr>
          <td><Item1 img={toy} label="Toy Car" price={50}></Item1></td>
          <td><Item1 img={bottle} label="Water Bottle" price={25}></Item1></td>
          <td><Item1 img={bag} label="Laptop Bag" price={100}></Item1></td>
        </tr>
      </table>

    </div>
  );
}

export default App;
