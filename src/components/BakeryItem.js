// TODO: create a component that displays a single bakery item


export default function bakeryItem(props){
  const{data, addToCart } = props;

    return (
        <div class="screen">
            <div class="item-section">
                <img class="img" src= {data.image} />
                <div class="name-desc">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                </div>     
                <div class="price-cart">
                    <p>{data.price}</p>
                    <button type="button" onClick={() => addToCart(data)}>Add to cart </button>
                </div>
            </div>
        </div>
          
    )
 }