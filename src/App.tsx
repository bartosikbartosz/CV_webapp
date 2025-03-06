import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import GlobalStyles from './styles/GlobalStyles';
import Home from './sections/Home';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding-top: 80px; // Space for fixed navigation
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navigation />
      <MainContent>
        <Home />
      </MainContent>
    </AppContainer>
  );
};

export default App;
