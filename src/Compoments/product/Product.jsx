import './Product.css';

function Product(objectName){
    return(
        <div>
            <h1>Product</h1>
            <div>
                <div id="firstproduct">
                    <p>product price is {objectName.p.price}</p>
                    <p>product id is {objectName.p.id}</p>
                    <p>product title is {objectName.p.title}</p>
                    <img src={objectName.p.image} alt="" />
                </div>
                
            </div>
        </div>
    )
}
export default Product;