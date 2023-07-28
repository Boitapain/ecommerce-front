import { styled } from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius: 10px;

    img{
        max-width: 100%;
        max-height: 80px;
    }
`;
const ProductWrapper =styled.div`
`;
const Title = styled(Link)`
    font-weight:normal;
    font-size:.9rem;
    margin:0;
    color: inherit;
    text-decoration:none;
`;
const ProductInfoBox = styled.div`
    margin-top: 5px;
`;
const PriceRow = styled.div`
    display: block;
    align-items: center;
    justify-content: space-between;
    margin-top:2px;

    @media screen and (min-width: 768px) {
        display:flex;
        gap:5px;
    }
`;
const Price = styled.div`
    font-size:1rem;
    font-weight: 600;
    text-align:right;
    @media screen and (min-width: 768px) {
        font-size:1.2rem;
        text-align:left;
    }
`;

export default function ProductBox({_id,title,description,price,images}){
    const {addProduct} = useContext(CartContext);
    return(
        <ProductWrapper>
            <WhiteBox href={"/product/"+_id}>
                <div>
                    <img src={images?.[0]} alt="0"/>  
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={"/product/"+_id}>{title}</Title>
                <PriceRow>
                    <Price>   
                        {price}€
                    </Price>
                    <Button block primary outline onClick={() => addProduct(_id)}>Add to cart</Button>
                </PriceRow>
                
            </ProductInfoBox>
        </ProductWrapper>
    );
}