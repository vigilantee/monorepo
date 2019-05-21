import React from 'react';
import ProductListComponentStyle from '../styles/productListComponentStyle.native';
import {
    Text,
    FlatList,
    Image,
    View,
} from 'react-native';

const ProductTile = ({item}) => {
    const url = "https://www.childrensplace.com/wcsstore/GlobalSAS/images/tcp/products/500/"+item.imagename+"-6.jpg";
    const pic = {
        uri: url
    };
    return(
        <ProductListComponentStyle key={item.product_name} className="product-item">
         <Text className="product-name"> Fetching from core</Text>
                <Text className="product-name">
                    {item.product_name}
                </Text>
                <Text className="product-disc-price">
                    {item.min_offer_price}
                </Text>
                <Text className="product-original-price">
                    {`Was ${item.min_list_price}`}
                </Text>
        </ProductListComponentStyle>
    )
}

export const ProductList = ({data}) => {
    return(
        <React.Fragment>
            <Text>PLP Page</Text>
            <FlatList className="product-wrapper"
                      data={data}
                      renderItem={ProductTile}>
            </FlatList>
        </React.Fragment>
    )
}