import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
margin-top: 48px;

display: flex;
justify-content: space-between;
align-items: center;
`

export const Title = styled.h1`
font-size: 48px;
color: #3a3a3a;
line-height: 56px;
margin-left: 500px;
justify-content: space-between;

`;

export const Anchor = styled.a`
text-decoration: none;
color: #04d361;
display: flex;
margin-left: 100px;
font-size: 25px; 
&:hover {
    color: ${shade(0.2, '#04d361')};
  }
`

export const Form = styled.form`
margin-top: 80px;
max-width: 700px;
margin-left: 300px;
justify-content: space-between;
display: flex;

input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
}
button {
    width:210px;
    height:70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
}
`