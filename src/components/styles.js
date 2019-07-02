import styled from 'styled-components';

/* ================================
====>   Topbar Style
================================ */
export const TopbarStyle = styled.div`
background: #2e2e2e;
-webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
-o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
height: auto;
padding: 8px 10px 8px 10px;
z-index: 8;
position: sticky;
top: 0;
left: 0;
right: 0;
& .logo {
    color: #fff;
    font-size: 35px;
    font-family: 'Oleo Script Swash Caps', cursive;
    text-decoration: none;
}
& .right {
    float: right;
    padding: 10px 0 10px 0;
    position: relative;
    top: 3px;
}
& .ico {
    cursor: pointer;
    color: #fff;
    margin: 0 1vw 0 1vw;
    font-size: 18px;
    text-decoration: none;
    vertical-align: middle;
    transition: all 250ms ease-in-out;
}
& .ico:hover {
    color: #11998e;
}
@media screen and (min-width: 300px) and (max-width: 600px){
    & .ico {
        display: none;
    }
    & .search, .menu {
        display: inline-block;
        margin: 0 2vw 0 2vw;
    }
}
@media screen and (min-width: 600px) and (max-width: 812px){
    & .ico {
        margin: 0 1.5vw 0 1.5vw;
    }
}
`;

/* ================================
====>   Menu Style
================================ */
export const MenuStyle = styled.div`
background: rgba(0,0,0,0.5);
height: 100vh;
width: 100%;
z-index: 7;
position: fixed;
top: auto;
right: 0;
& .nav {
    background: #fff;
    height: 100%;
    width: 300px;
    overflow: auto;
    z-index: 7;
    position: fixed;
    top: auto;
    right: 0;
}
& .nav:before {
    content: '';
    background: linear-gradient(to right, #11998e, #38ef7d);
    height: 8px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
& .nav a {
    display: block;
    color: #28282a;
    padding: 20px 10px 20px 10px;
    font-size: 20px;
    text-decoration: none;
    transition: all 250ms ease-in-out;
}
& .nav a:hover {
    border-left: 8px solid #11998e;
    background: #e5e5e5;
}
@media screen and (min-width: 300px) and (max-width: 600px){
    & .nav {
        width: 100%;
    }
}
`;

/* ================================
====>   Sidebar Style
================================ */
export const SidebarStyle = styled.div`
float: right;
height: auto;
width: 23%;
margin: 20px 50px 0 0;
text-align: center;
position: sticky;
top: 80px;
& h1 {
    border-bottom: 4px solid #11998e;
    margin: 0 0 10px 0;
    padding: 5px 5px 5px 5px;
    color: #28282a;
    font-size: 30px;
    text-align: left;
}
& h2 {
    border-bottom: 4px solid #11998e;
    margin: 0 0 10px 0;
    padding: 5px 5px 5px 5px;
    color: #28282a;
    font-size: 30px;
    text-align: left;
}
& h1:before {
    content: '';
    background: #11998e;
    height: 4px;
    width: 35px;
    transform: rotate(-120deg);
    transform-origin: top right;
    position: absolute;
    top: 57px;
    right: 4px;
}
& h2:before {
    content: '';
    background: #11998e;
    height: 4px;
    width: 35px;
    transform: rotate(-120deg);
    transform-origin: top right;
    position: absolute;
    top: 57px;
    right: 4px;
}
& iframe {
    border: none;
    height: auto;
    width: 90%;
    margin: 0 0 5px 0;
}
@media (max-width: 991px){
    display: none;
}
@media (width: 1024px){
    display: none;
}
@media (width: 1280px){
    margin: 20px 100px 0 0;
}
@media (min-width: 1440px){
    margin: 20px 100px 0 0;
}
@media (min-width: 1600px){
    margin: 20px 100px 0 0;
}
@media (min-width: 1920px){
    width: 20%;
    margin: 20px 200px 0 0;
}
`;

/* ================================
====>   Card Style
================================ */
export const CardStyle = styled.div`
height: auto;
margin: 20px 370px 0 50px;
& .wrapper {
    height: auto;
    padding: 0 10px 0 10px;
}
& .card {
    display: block;
    height: auto;
    width: 100%;
    margin: 0 0 10px 0;
    overflow: hidden;
}
& .card:last-child {
    border-bottom: none;
}
& .cardImage {
    float: left;
    height: 25%;
    width: 25%;
    margin: 0 10px 0 0;
}
& .card:nth-child(2n+0) .cardImage {
    float: none !important;
    border-left: 10px solid #11998e !important;
    height: 150px !important;
    width: 100% !important;
    margin: 0 0 0 0 !important;
}
& .dis {
    height: 100%;
}
& .card:nth-child(2n+0) .dis a {
    background: rgba(0,0,0,0.8);
    color: #fff;
    margin: -52px 0 0 10px;
    padding: 5px 5px 5px 5px;
    z-index: 2;
    position: absolute;
    top: auto;
}
& .card:nth-child(2n+0) .dis a:hover {
    color: #11998e;
}
& .dis a {
    color: #28282a;
    font-size: 28px;
    font-weight: bold;
    text-decoration: none;
    transition: all 250ms ease-in-out;
}
& .dis a:hover {
    color: #11998e;
}
& .dis p {
    color: #28282a;
    font-size: 18px;
    line-height: 22px;
}
& .card:nth-child(2n+0) .dis p {
    display: none !important;
}
& .tagBar {
    padding: 5px 5px 5px 5px;
    text-align: right;
}
& .card:nth-child(2n+0) .tagBar {
    display: none !important;
}
& .tagBar span {
    color: #28282a;
    font-size: 18px;
}
@media screen and (min-width: 300px) and (max-width: 600px){
    margin: 0 0 0 0 !important;
    & .wrapper {
        padding: 0 0 0 0;
    }
    & .cardImage {
        float: none;
        height: auto;
        width: 100%;
        margin: 0 0 0 0;
    }
    & .card:nth-child(2n+0) .cardImage {
        float: none !important;
        border-left: none !important;
        height: auto !important;
        width: 100% !important;
        margin: 0 0 0 0 !important;
    }
    & .dis {
        padding: 5px 5px 5px 5px;
    }
    & .card:nth-child(2n+0) .dis a {
        background: transparent !important;
        color: #28282a !important;
        margin: 0 0 0 0 !important;
        padding: 0 0 0 0 !important;
        z-index: 0 !important;
        position: relative !important;
    }
    & .card:nth-child(2n+0) .dis p {
        display: block !important;
    }
    & .card:nth-child(2n+0) .tagBar {
        display: block !important;
    }
}
@media (max-width: 991px){
    margin: 20px 0 0 0;
    & .card {
        margin: 0 0 5px 0;
    }
}
@media (width: 1024px){
    margin: 20px 100px 0 100px;
}
@media (width: 1280px){
    margin: 20px 400px 0 100px;
}
@media (min-width: 1440px){
    margin: 20px 450px 0 100px;
}
@media (min-width: 1600px){
    margin: 20px 500px 0 100px;
}
@media (min-width: 1920px){
    margin: 20px 615px 0 200px;
}
`;

/* ================================
====>   Blog Post Style
================================ */
export const BlogStyle = styled.div`
height: auto;
& .banner {
    height: auto;
}
& .banner ul {
    background: rgba(0,0,0,0.5);
    height: 300px;
    width: 100%;
    z-index: 2;
    position: absolute;
    top: auto;
}
& .bannerImage {
    height: 300px;
}
& .titleBar {
    background: linear-gradient(to right, #11998e, #38ef7d);
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    margin: 0 0 20px 0;
    padding: 0 0 0 10px;
    z-index: 6;
    position: sticky;
    top: 66px;
    left: 0;
    right: 0;
}
& .titleBar::after {
    content: '';
    border-style: solid;
    border-color: #38ef7d #38ef7d transparent transparent;
    border-width: 35px;
    position: absolute;
    top: auto;
    right: 0;
}
& .ico {
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    position: relative;
    top: 1px;
}
& .titleBar p {
    color: #fff;
    margin: 0 0 0 0;
    font-size: 40px;
    font-weight: bold;
}
& .wrapper {
    height: auto;
    margin: 0 250px 0 250px;
    padding: 0 10px 0 10px;
    z-index: 3;
    position: relative;
}
& .gatsby-resp-image-wrapper, .gatsby-resp-iframe-wrapper {
    margin: 10px 0 10px 0;
}
& h1, h2, h3, h4, h5, h6 {
    color: #28282a;
    margin: 10px 0 10px 0;
    font-size: 33px;
}
& p {
    color: #28282a;
    margin: 10px 0 10px 0;
    font-size: 18px;
}
& li {
    color: #28282a;
    margin: 10px 0 10px 30px;
    font-size: 18px;
}
& pre {
    border-left: 10px solid #11998e;
    background: #292d3e;
    margin: 10px 0 10px 0;
    padding: 5px 5px 5px 5px;
    overflow: auto;
}
& blockquote, q {
    border-left: 10px solid #11998e;
    background: #e5e5e5;
    margin: 10px 0 10px 0;
    padding: 5px 5px 5px 5px;
    overflow: auto;
}
& pre code {
    color: #fff;
    margin: 0 0 0 0;
    font-size: 18px;
}
& blockquote p, q p {
    color: #5d6977;
    margin: 0 0 0 0;
    font-size: 18px;
}
& .shareBar {
    border-top: 2px solid #e5e5e5;
    height: auto;
    margin: 20px 0 0 0;
    padding: 10px 0 10px 0;
}
& .shareBtn {
    cursor: pointer;
    outline: none;
    border: none;
    color: #fff;
    margin: 0 0 0 1vw;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    font-weight: bold;
}
& .fb {
    background: #3b5998 !important;
}
& .twitter {
    background: #1da1f2 !important;
}
& .in {
    background: #0077b5 !important;
}
& .reddit {
    background: #ff4500 !important;
}
& .shareBtn .ico {
    color: #fff;
    font-size: 20px;
    position: relative;
    top: 3px;
}
& .dealBtn {
    cursor: pointer;
    float: right;
    outline: none;
    border: none;
    background: #11998e;
    color: #fff;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    font-weight: bold;
}
@media screen and (min-width: 300px) and (max-width: 600px){
    & .banner ul, .bannerImage {
        height: 200px;
    }
    & .shareBar .ico {
        margin: 0 2vw 0 2vw;
    }
}
@media screen and (min-width: 600px) and (max-width: 812px){
    & .shareBar .ico {
        margin: 0 1.5vw 0 1.5vw;
    }
}
@media (max-width: 991px){
    & .titleBar::after {
        display: none;
    }
    & .wrapper {
        margin: 0 0 0 0;
    }
}
@media (width: 1024px){
    & .wrapper {
        margin: 0 130px 0 130px;
    }
}
@media (width: 1280px){
    & .wrapper {
        margin: 0 230px 0 230px;
    }
}
@media (min-width: 1920px){
    & .wrapper {
        margin: 0 450px 0 450px;
    }
}
`;

/* ================================
====>   Search Style
================================ */
export const SearchStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #e5e5e5;
height: auto;
padding: 40px 30px 40px 30px;
& .search {
    outline: none;
    border: none;
    border-radius: 6px;
    background: #fff;
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16);
    color: #28282a;
    height: 40px;
    width: 90%;
    padding: 10px 10px 10px 10px;
    font-size: 16px;
}
@media screen and (min-width: 300px) and (max-width: 600px){
    padding: 30px 10px 30px 10px;
}
`;

/* ================================
====>   404 Page Style
================================ */
export const ErrStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 70vh;
margin: 0 0 10px 0;
text-align: center;
& h1 {
    color: #28282a;
    font-size: 80px;
}
& p {
    color: #28282a;
    width: 60%;
    font-size: 18px;
    font-weight: bold;
}
`;

/* ================================
====>   Footer Style
================================ */
export const FooterStyle = styled.div`
background: #2e2e2e;
height: auto;
margin: 50px 0 0 0;
padding: 30px 10px 30px 10px;
text-align: center;
& p {
    color: #fff;
    margin: 0 0 15px 0;
    font-size: 35px;
}
& .ico {
    cursor: pointer;
    color: #fff;
    margin: 0 1vw 0 1vw;
    font-size: 18px;
    text-decoration: none;
    vertical-align: middle;
    transition: all 250ms ease-in-out;
}
& .ico:hover {
    color: #11998e;
}
@media screen and (min-width: 300px) and (max-width: 600px){
    margin: 0 0 0 0;
    & .ico {
        margin: 0 2vw 0 2vw;
    }
}
@media screen and (min-width: 600px) and (max-width: 812px){
    & .ico {
        margin: 0 1.5vw 0 1.5vw;
    }
}
`;