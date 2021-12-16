import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    // border:solid 1px violet;
    margin:auto;
`;

export const Wrapper = styled.div`
    width:90%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const Menu = styled.ul`
    display:flex;
    justify-content: space-between;
    list-style:none;


    @media (max-width:768px){
        position:fixed;
        top:-16px;
        left:${({open})=> open ? "0" : "-100%"}; //Si OPEN es falso su valor va a ser -100% pero si es verdadero valdra 0
        width:50%;
        height:100vh;
        z-index:2;
        background-color:black;
        box-shadow: rgba(176, 0, 221, 0.25);
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        transition: 0.5s all ease;
    }
`;

export const MenuItems = styled.li`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

export const MenuLink = styled.a`
    color:white;
    margin-right:25px;
    cursor:pointer;
`;

export const MobileIcon = styled.div`
    display:none;

    @media (max-width:768px){
        display:flex;
        align-items:center;
        justify-content:center
    }

    svg{
        fill: white;
        margin-right:0.5rem;
    }
`;