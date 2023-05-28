import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import {cleanup ,render, screen } from '@testing-library/react';
import App from '../App'
import { BrowserRouter } from "react-router-dom";
import Navbar from '../components/Navbar';

// jest.mock('rn-pdf-reader-js', () => 'rn-pdf-reader-js');

beforeEach(cleanup);

beforeAll(() => {
  global.score = 0;
  console.log("Starting score:", global.score);
});
jest.mock('rn-pdf-reader-js', () => 'rn-pdf-reader-js');

describe("navbar tests",()=>{
  it("onclicking home link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const home = screen.getByText(/Home/i);
    userEvent.click(home);
    expect(window.location.pathname).toBe("/");
    global.score += 1;
  });

  it("onclicking about link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const Form = screen.getByText(/Form/i);
    userEvent.click(Form);
    expect(window.location.pathname).toBe("/form");
    global.score += 1;
  });
  
  it("onclicking contact link the url should be changed", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const Dashboard = screen.getByText(/Dashboard/i);
    userEvent.click(Dashboard);
    expect(window.location.pathname).toBe("/dashboard");
    global.score += 1;
  });

})


afterAll(() => {
  console.log("Final Score is", global.score);
});