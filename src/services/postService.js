import axios from "axios";
class ProductService {
    static getAllProducts = () => axios.get('/products')
    static getSingleProduct = (productId) => axios.get(`/products/${productId}`)
}

export default ProductService;