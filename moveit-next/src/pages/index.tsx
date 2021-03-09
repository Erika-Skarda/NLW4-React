//npm i typescript @types/react @types/react-dom @types/node -D
//Head é como o head do html
import Head from 'next/head';
import React from 'react';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Início | move.it</title>
      </Head>
     <ExperienceBar />
     <CountdownProvider>
      <section>
        <div >
          <Profile />
          <CompletedChallenges/>
          <Countdown />
        </div>
          <ChallengeBox />
      </section>
     </CountdownProvider>
    </div>
  )
}
