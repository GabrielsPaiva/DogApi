import styled from "styled-components"
import media from "styled-media-query"

export const Div = styled.div`
`
export const LogoBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 10em; 
`
export const Logo = styled.img`
margin-top: 3em;
height: 100%;
`
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3em;
width: 100%;
`
export const Button = styled.button`
margin-bottom: 1.5em;
border-radius: 5px;
width: 10em;
height: 2em;
`
export const DogImage = styled.img`
width: 35%;
height: 35vw;

${media.lessThan("medium")`
width: 60%;
height: 60vw;
`}
${media.lessThan("small")`
margin-top: 3em;
width: 80%;
height: 80vw;
`}
`