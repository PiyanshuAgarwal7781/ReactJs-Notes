import './Products.css';
import Product from '../product/Product';
function Products(){
    let products=[
        {
             price:500,
             title:"hello",
             id:1,
             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ni-Mk_BC1FX6wSH1QXsQKG3HNneBVwZGmg&s",
        },
        {
            id:2,
            price:1000,
            title:"hi",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ni-Mk_BC1FX6wSH1QXsQKG3HNneBVwZGmg&s"

        },
    ]
    return(
        <div>
            <h1>Products</h1>
            <div id="id">
                {/* <div id="first" ><Product p={products[0]} > </Product></div>
                <div id="second" ><Product p={products[1]}></Product></div> */}
                <Product p={products[0]} ></Product>
                <Product p={products[1]} ></Product>
            </div>
            
        </div>
    )
}
 
export default Products;