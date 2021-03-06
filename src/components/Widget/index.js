import styled from 'styled-components'


const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => {
  console.log(theme);
   return theme.colors.mainBg
  }
};
border-radius: 4px;
overflow: hidden;
h1, h2, h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}
p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
`;

Widget.Content = styled.div`
padding: 24px 32px 32px 32px;
& > *:first-child {
  margin-top: 0;
}
& > *:last-child {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
p{
  line-height: 20px;
}
input {
  margin: auto;
  width: 100%;
  padding: 10px;
  color: #DDD;
  border: 1px solid #DDD;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
}
button{
  margin-top:20px;
  width: 100%;
  height: 30px;
  color: #FFF;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
}
`;

Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.primary};
* {
  margin: 0;
}
`;

export default Widget;