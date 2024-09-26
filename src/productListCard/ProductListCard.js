import React from 'react'
import { ProductListCardTitle } from '../productListCardTitle/ProductListCardTitle'
import { ProductCardImages } from '../productCardImages/ProductCardImages'

import {ProductCardDesc} from '../productCardDesc/ProductCardDesc'
import {ProductCardButton} from '../productCardButton/ProductCardButton';

export const ProductListCard = (props) => {
  return (
    <div style={{
      border:props.border,
      padding:props.padding,
      borderRadius:props.borderRadius,
      width: props.width,
      backgroundColor:props.backgroundColor,
    
      
  }}>
      <ProductListCardTitle color="red" title={props.title} marginBottom={props.marginBottom} />
      <ProductCardImages width='200px' borderRadius="5px" imageUrl={props.imageUrl}/>

 <ProductCardDesc Price={props.Price}
                      Size={props.Size}
                        display="inline"
                        fontSize= "18px"
                        marginRight="30px"     />


      <ProductCardButton padding="10px 32px"
                        fontSize="18px"
                        backgroundColor="blue"  
                        color="white"
                        border="none"
                        borderRadius="5px"
                        cursor="pointer"
                    
      />
    
      
    </div>
  )
}


