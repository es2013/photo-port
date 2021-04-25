import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

//function component that returns an element using jsx
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;