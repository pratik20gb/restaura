import React from 'react';
import HeroSection from "./components/HeroSection";
import Dishes from './components/Dishes';
import About from './components/About';
import Mission from './components/Mission';
import Expertise from './components/Expertise';
import Review from './components/Review';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';
import NaBar from './components/NaBar';

function App() {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection />
      <NaBar></NaBar>
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <ContactsSection />
      <Footer />
    </main>
  );
}

export default App;
