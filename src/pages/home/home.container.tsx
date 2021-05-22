import React from 'react';
import { HomeView } from './home.view';

// REVIEW:
interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  return <HomeView />;
};

export const Home = HomeContainer;
