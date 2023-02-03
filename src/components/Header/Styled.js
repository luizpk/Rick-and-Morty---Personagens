import styled from "styled-components"


export const HeaderStayled = styled.header`
   width: 100vw; 
   height: 25vh;
   margin: 0 auto;
   display: flex;
   flex-direction: row;
   align-items: flex-end;
   justify-content: space-between;
   position: relative;
   //border: solid 1px red;
   padding-top: 5vh;
     
 `
 export const TitleAlign = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   
 `

export const Logo = styled.image`
    width: 300px;
    height: 100%;
    margin: 0;
       
img{
        width: 100%;
        height: 100%;
        
}
`

export const Titles = styled.title`
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
`

export const Title = styled.h1`
    font-size: 25px;
    font-family: fantasy;
    margin: 0;  
    color: aquamarine;  
`

export const Subtitle = styled.h2`
    font-size: 20px;
    font-family: "Comic Sans MS",fantasy;
    margin-top: 0;
    color: greenyellow;
`
export const Finder = styled.section`
width: 25vw;
margin-right: 10%;
margin-bottom: 2%;
display: flex;
justify-content: space-evenly;
input{
    font-size: 20px;
}
button{
    font-size: 20px;
}
`

export const SocialIcons = styled.a`
height: 50px;
width: 150px;
margin-bottom: 5%;
margin-right: 50px;
display: flex;
align-items: center;
justify-content: space-evenly;
font-size: 35px;
`
