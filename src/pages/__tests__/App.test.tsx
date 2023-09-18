import { render, screen } from '@testing-library/react';
import App from '../../App';
import HomePage from '../HomePage';
import React from "react"
import "../../../mocks/matchMedia.mock" 
import "@testing-library/jest-dom"

test('renders the home page', () => {
  render(<HomePage />);
  const headings = screen.getAllByRole("heading");
  headings.forEach((heading)=>{
    const textContent = heading.textContent;
    console.log(textContent);
  if (textContent.includes("Meet")) {
    expect(textContent).toMatch(/Meet/);
  } else if (textContent.includes("Your favorite Starwars characters")) {
    expect(textContent).toMatch(/Your favorite Starwars characters/);
  }
  })
  
  const images = screen.getAllByRole("img");
  images.forEach((image)=>{
    expect(image).toBeInTheDocument();
  });
});
