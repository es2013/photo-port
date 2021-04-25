import React from 'react';
import { render, cleanup } from '@testing-library/react'; //cleanup is used to remove components from DOM
import '@testing-library/jest-dom/extend-expect'; //jest-dom offers access to custom matchers that are used to test DOM elements

import About from '..';

//configure test environment
afterEach(cleanup);

//create a baseline test
describe('About component', () => {
    //renders About test
    // First Test
    it('renders', () => {
        render(<About />);
      });
  // Second Test
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
  })

