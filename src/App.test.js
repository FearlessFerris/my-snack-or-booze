import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Drinks from './Drinks';
import Snacks from './Snacks';
import AddItemForm from './AddItemForm';
import DrinksRecipes from './DrinksRecipes';
import SnacksRecipes from './SnacksRecipes';

test('renders home page with title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Ferris's Cafe/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders drinks page with drinks list', () => {
  render(
    <BrowserRouter>
      <Drinks />
    </BrowserRouter>
  );
  const drinksHeader = screen.getByText(/Drinks Menu/i);
  expect(drinksHeader).toBeInTheDocument();

});

test('renders snacks page with snacks list', () => {
  render(
    <BrowserRouter>
      <Snacks />
    </BrowserRouter>
  );
  const snacksHeader = screen.getByText(/Snacks Menu/i);
  expect(snacksHeader).toBeInTheDocument();
});

test('renders add item form with form elements', () => {
  render(
    <BrowserRouter>
      <AddItemForm />
    </BrowserRouter>
  );
  const formHeader = screen.getByText(/Add New Item/i);
  expect(formHeader).toBeInTheDocument();
});

test('renders not found message for invalid drink ID', () => {
  render(
    <BrowserRouter>
      <Route path="/drinks/:id">
        <DrinksRecipes />
      </Route>
    </BrowserRouter>
  );
  const notFoundMessage = screen.getByText(/404 - Not Found/i);
  expect(notFoundMessage).toBeInTheDocument();
});
