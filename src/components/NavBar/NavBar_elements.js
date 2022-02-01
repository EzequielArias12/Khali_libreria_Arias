import styled from 'styled-components';

export const NavbarContainer = styled.div`
width:100%;
height:80px;
position:sticked;
top:0;
z-index: 99:
background-color:#FEAA89;`;


export const NavBarWrapper = styled.div`
margin:auto;
width:100%
max-width:1300px;
height:100%;
align-items:center;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
border:1px solid white;
`;

/*export const IconLogo = styled.div `
display:flex;
flex-wrap:wrap
justify-content:flex-start;
align-items:center;
font-family: 'Roboto', sans-serif;
font-weight: 500;
letter-spacing: 1.42px;
color: #FFFFFF `*/

export const MenuItem = styled.li`
height: 100%;
padding: 0.5rem 1.5rem;
display:flex;
justify-content:center;
align-items:center;
font-size: 1.2rem;
font-family:'Roboto', sans-serif;
letter-spacing: 1.42px;
color: #FFFFFF;
font-weight:400;
&:hover{
    background-color : #343297;
    border-bottom: 0.3rem solid #abc88b;
    transition:0.4s ease-in;
}
`


export const Menu = styled.ul `
height:100%;
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width: 768px) {
    width:100%;
    height:90vh;
    position:absolute;
    top:80px;
    left:0;
    flex-direction:column;
    transition: 0.5s all ease-in;
    background-color: black;
}
`

export const MenuItemLink = styled.a`
text-decoration: none !important;
color: #FFFFFF !important;
font-size: 16px;
font-family: 'Roboto', sans-serif;
font-weight: 500;
letter-spacing: 1.42px;
`

export const IconLogoMobile = styled.div `
display:none

@media screen and (max-width 768px) {
    display:flex;
    color: #abc88b;
    font-size: 2rem;
}`