import './shop.styles.scss';

import PRODUCTS from '../../shop-data.json';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
    return (
        <div className="products-container">
            {PRODUCTS.map(product => (
                <ProductCard key = {product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;