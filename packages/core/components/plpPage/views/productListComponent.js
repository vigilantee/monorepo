import React from 'react';
import ProductListComponentStyle from '../styles/productListComponentStyle';

export const ProductList = ({data}) => {
    return(
        <React.Fragment>
          <h1>PLP Page</h1>
          <ProductListComponentStyle className="product-wrapper">
            {
              data && data.map(item => (
                <li key={item.productid} className="product-item">
                  <p className="product-name">
                    {item.product_name}
                  </p>
                  <p className="product-disc-price">
                    {item.min_offer_price}
                  </p>
                  <p className="product-original-price">
                    {`Was ${item.min_list_price}`}
                  </p>
                </li>
            ))
            }
          </ProductListComponentStyle>
        </React.Fragment>
    )
}