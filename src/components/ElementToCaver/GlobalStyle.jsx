import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({theme}) => theme.colors.pageBackground};
    color: ${({theme}) => theme.colors.secondaryTextColor};
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,h2,h3,h4,h5,h6,p {
    margin: 0;
}
ul{
    list-style-type: none;
    margin: 0;
}

img {
    display: block;
    max-width: 100%;
    }

/* section {
    max-width: 1280px;
}     */
`;