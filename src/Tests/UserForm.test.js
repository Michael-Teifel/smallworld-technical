import { fireEvent, render, screen } from '@testing-library/react';
import UserForm from '../Components/UserForm';


it('renders the UserForm', () => {
  const {asFragment} = render(<UserForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('submits the form if fields are complete', () => {
  const {asFragment} = render(<UserForm />);

  const firstName = screen.getByLabelText('First Name:');
  fireEvent.change(firstName, {target: {value: 'Alex'}});

  const lastName = screen.getByLabelText('Last Name:');
  fireEvent.change(lastName, {target: {value: 'Honnold'}});

  const email = screen.getByLabelText('Email Address:');
  fireEvent.change(email, {target: {value: 'Alex@sbc.com'}});

  const password = screen.getByLabelText('Password:');
  fireEvent.change(password, {target: {value: 'js3Qr'}});

  const company = screen.getByLabelText('Company:');
  fireEvent.change(company, {target: {value: 'Planet Granite'}});

  const jobTitle = screen.getByLabelText('Job Title:');
  fireEvent.change(jobTitle, {target: {value: 'Climbing Instructor'}});

  const jobFunction = screen.getByLabelText('Job Function:');
  fireEvent.change(jobFunction, {target: {value: 'Sales'}});

  const state = screen.getByLabelText('State:');
  fireEvent.change(state, {target: {value: 'Nevada'}});

  const city = screen.getByLabelText('City:');
  fireEvent.change(city, {target: {value: 'Yosemite'}});

  const submit = screen.getByText('Submit');
  fireEvent.click(submit)


  expect(asFragment()).toMatchSnapshot();
});

it('does not submit the form if jobFunction and State Are left as default', () => {
  const {asFragment} = render(<UserForm />);

  const firstName = screen.getByLabelText('First Name:');
  fireEvent.change(firstName, {target: {value: 'Alex'}});

  const lastName = screen.getByLabelText('Last Name:');
  fireEvent.change(lastName, {target: {value: 'Honnold'}});

  const email = screen.getByLabelText('Email Address:');
  fireEvent.change(email, {target: {value: 'Alex@sbc.com'}});

  const password = screen.getByLabelText('Password:');
  fireEvent.change(password, {target: {value: 'js3Qr'}});

  const company = screen.getByLabelText('Company:');
  fireEvent.change(company, {target: {value: 'Planet Granite'}});

  const jobTitle = screen.getByLabelText('Job Title:');
  fireEvent.change(jobTitle, {target: {value: 'Climbing Instructor'}});

  const city = screen.getByLabelText('City:');
  fireEvent.change(city, {target: {value: 'Yosemite'}});

  const submit = screen.getByText('Submit');
  fireEvent.click(submit)


  expect(asFragment()).toMatchSnapshot();
});

it('does not submit if password is missing', () => {
  const {asFragment} = render(<UserForm />);

  const firstName = screen.getByLabelText('First Name:');
  fireEvent.change(firstName, {target: {value: 'Alex'}});

  const lastName = screen.getByLabelText('Last Name:');
  fireEvent.change(lastName, {target: {value: 'Honnold'}});

  const email = screen.getByLabelText('Email Address:');
  fireEvent.change(email, {target: {value: 'Alex@sbc.com'}});

  const company = screen.getByLabelText('Company:');
  fireEvent.change(company, {target: {value: 'Planet Granite'}});

  const jobTitle = screen.getByLabelText('Job Title:');
  fireEvent.change(jobTitle, {target: {value: 'Climbing Instructor'}});

  const jobFunction = screen.getByLabelText('Job Function:');
  fireEvent.change(jobFunction, {target: {value: 'Sales'}});

  const state = screen.getByLabelText('State:');
  fireEvent.change(state, {target: {value: 'Nevada'}});

  const city = screen.getByLabelText('City:');
  fireEvent.change(city, {target: {value: 'Yosemite'}});

  const submit = screen.getByText('Submit');
  fireEvent.click(submit)


  expect(asFragment()).toMatchSnapshot();
});

it('does not submit if email is invalid', () => {
  const {asFragment} = render(<UserForm />);

  const firstName = screen.getByLabelText('First Name:');
  fireEvent.change(firstName, {target: {value: 'Alex'}});

  const lastName = screen.getByLabelText('Last Name:');
  fireEvent.change(lastName, {target: {value: 'Honnold'}});

  const email = screen.getByLabelText('Email Address:');
  fireEvent.change(email, {target: {value: 'Alex'}});

  const password = screen.getByLabelText('Password:');
  fireEvent.change(password, {target: {value: 'js3Qr'}});

  const company = screen.getByLabelText('Company:');
  fireEvent.change(company, {target: {value: 'Planet Granite'}});

  const jobTitle = screen.getByLabelText('Job Title:');
  fireEvent.change(jobTitle, {target: {value: 'Climbing Instructor'}});

  const jobFunction = screen.getByLabelText('Job Function:');
  fireEvent.change(jobFunction, {target: {value: 'Sales'}});

  const state = screen.getByLabelText('State:');
  fireEvent.change(state, {target: {value: 'Nevada'}});

  const city = screen.getByLabelText('City:');
  fireEvent.change(city, {target: {value: 'Yosemite'}});

  const submit = screen.getByText('Submit');
  fireEvent.click(submit)


  expect(asFragment()).toMatchSnapshot();
});