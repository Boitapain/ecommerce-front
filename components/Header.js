import Link from "next/link";
import { styled, css } from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";

const StyledHeader = styled.header`
    background-color:#222;
`;
const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 3;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    display: block;
    gap: 15px;
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #222;

    ${props => props.mobileNavActive ? `
        display:block;
        z-index: 1;
    `:`
        display:none;
    `}

    @media screen and (min-width: 768px) {
        display: flex;
        position: static;
        padding:0;
    };
`;
const NavLink = styled(Link)`
    display:block;
    color: #aaa;
    text-decoration: none;
    padding: 10px 0;

    ${props => props.dead && css`
        display: none;
    `}

    @media screen and (min-width: 768px) {
        padding: 0;
    };
`;
const NavButton = styled.button`
    background-color: transparent;
    width: 35px;
    height: 35px;
    border:0;
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 3;

    @media screen and (min-width: 768px) {
        display:none;
    };
`;

export default function Header(){
    const {cartProducts} = useContext(CartContext);
    const [mobileNavActive, setMobileNavActive] = useState(false);

    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={"/"}>Ecommerce</Logo>
                    <StyledNav mobileNavActive={mobileNavActive}>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/products"}>All products</NavLink>
                        <NavLink dead href={"/categories"}>Categories</NavLink>
                        <NavLink dead href={"/account"}>Account</NavLink>
                        <NavLink href={"/cart"}>Cart ({cartProducts?.length})</NavLink>
                    </StyledNav>
                    <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
                        <BarsIcon/>
                    </NavButton>
                </Wrapper>
            </Center>
        </StyledHeader>
        
    );
}