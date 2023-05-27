import * as Dialog from '@radix-ui/react-dialog';
import styled from '@emotion/styled';

export const Overlay = styled(Dialog.Overlay)`
position: fixed;
width: 100vw;
height: 100vh;
inset:0;
background: rgba(0,0,0,0.75);
`;

export const Content = styled(Dialog.Content)`
/* min-width: 32rem; */
border-radius:12px;
padding: 2.5rem;
background: linear-gradient(144deg, rgba(255,240,0,1) 27%, rgba(230,37,143,1) 78%);
height:400px;
width: 400px;
color:black;
position: fixed;
top: 50%;
left: 40%;
transform: translate(-50%, -50%);
`;

export const Title = styled(Dialog.Title)`
font-size: 3rem;
font-family: 'Futura Std';
background: rgb(255,240,0);
background: transparent;
font-weight: 500
`;

export const Description = styled(Dialog.Description)`
padding-top:2rem;
font-size: 2rem;
background: transparent;
font-family: 'Futura Std';
`;

export const CustomForm = styled.form`
margin-top:2rem;
background:transparent;
display: flex;
flex-direction: column;
gap: 1.5rem;
font-family: 'Futura Std';
`;

export const CustomFormInput= styled.input`
background:white;
border-radius:12px;
padding: 0.5rem 1rem;
width:300px;
`;

export const FormContainer= styled.div`
background:transparent;
display: flex;
flex-direction: row;
position: absolute;
`;

export const ImageModal= styled.img`
height:400px;
position:relative;
top:-240px;
right:-20px;
border-top-right-radius:12px;
border-bottom-right-radius:12px;
`;


