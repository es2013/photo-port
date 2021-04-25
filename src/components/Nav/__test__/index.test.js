// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

//configure test environment
afterEach(cleanup);

//create a baseline test
describe('Nav component', () => {
  //baseline test
  it('renders', () => {
    render(<Nav />);
  });
  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
})

//create a test for emoji visibility
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    // Assert  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
  })  

// create a test for link visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
    const { getByTestId } = render(<Nav />);
      // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })