import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */


const [cart, setCart] = useState([])
const totalPrice = cart.reduce((a, c) =>a + c.price * c.qty, 0);



const addToCart = (product) => {
  const exist = cart.find(x => x.name === product.name);
  if (exist) {
    setCart(cart.map(x => x.name === product.name ? {...exist, qty: exist.qty+1} : x
      )
    );
  }
  else{
    setCart([...cart, {...product, qty:1} ])
  }

}

  return (
    <div className="App">
      <div class="menu-section">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div class="menu">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem key={index.name} data={item} addToCart={addToCart} /> ))
             // replace with BakeryItem component
          
          }
        </div>
      </div>
     

      <div>
        <h2>Cart</h2>
        <div>
          {cart.length === 0 && <div> Cart is Empty</div>}
        </div>

        {cart.map((item)=> (
          <div key = {item.name} className = "row">
            <div>
            {item.qty} x {item.name}
            </div>
          </div>        
        ))}

        {cart.length !== 0  && (
          <>
          <hr></hr>
          <div className="row">
            <div><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</div>
            

            </div>
          </>
        )
        }

        
      </div>
    </div>
  );
}

export default App;
