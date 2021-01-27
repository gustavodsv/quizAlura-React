import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router'

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  //console.log('retorno do useSate', name, setName)

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>A viagem de Chihiro</title>
      </Head>
      <QuizContainer>
      <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>A viagem de Chihiro</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre o filme: <br/> A viagem de Chihiro</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              //console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input 
                onChange={function (infosDoEvento){
                  //console.log(infosDoEvento.target.value);
                  // State
                  //name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome..."
              />
              <button type="submit" disabled={name.length === 0}>
                Olá {name}. Clique para jogar!
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GithubCorner  projectUrl="https://github.com/gustavodsv/quizAlura-React"/>
    </QuizBackground>
  )
}