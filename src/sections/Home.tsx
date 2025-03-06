import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Greeting = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 2px var(--accent);
  margin-bottom: 1rem;
  letter-spacing: 0.5px;

  span {
    display: inline-block;
    animation: wave 2.5s infinite;
    transform-origin: 70% 70%;
    color: var(--accent);
    -webkit-text-stroke: none;
  }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
`;

const GradientText = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(45deg, var(--accent), #4ecdc4, var(--accent));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s linear infinite;
  margin-bottom: 2rem;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
`;

const Name = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundBlob = styled(motion.div)`
  position: absolute;
  width: 650px;
  height: 700px;
  background: linear-gradient(45deg, var(--accent), #4ecdc4);
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.15;
  z-index: -1;
  top: 15%;
  left: 32%;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border: 2px solid var(--accent);
  border-radius: 5px;
  color: var(--accent);
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent);
    color: var(--background);
  }
`;

const ContactButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background: transparent;
  border: 2px solid var(--accent);
  border-radius: 25px;
  color: var(--accent);
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: inline-block;
    transform-origin: 50% 50%;
    transition: transform 0.3s ease;
  }

  &:hover span {
    animation: ring 1s infinite;
  }

  @keyframes ring {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(15deg); }
    20% { transform: rotate(-15deg); }
    30% { transform: rotate(15deg); }
    40% { transform: rotate(-15deg); }
    50% { transform: rotate(15deg); }
    60% { transform: rotate(-15deg); }
    70% { transform: rotate(15deg); }
    80% { transform: rotate(-15deg); }
    90% { transform: rotate(15deg); }
    100% { transform: rotate(0deg); }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--accent), #4ecdc4);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    color: var(--background);
    border-color: transparent;

    &::before {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::after {
    left: 100%;
  }
`;

const Home: React.FC = () => {
  return (
    <Section id="home">
      <BackgroundBlob
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <Greeting
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello <span>👋</span>
      </Greeting>
      <GradientText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My name is Bartosz Bartosik,
        <br />
        I'm a Junior Data Analyst
      </GradientText>
      <ContactButton
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>📞</span> CONTACT ME
      </ContactButton>
    </Section>
  );
};

export default Home;