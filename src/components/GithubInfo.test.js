import React from 'react';
import ReactDOM from 'react-dom';
import GithubInfo from './GithubInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GithubInfo />, div);
});

it('renders 3 form fields', () => {
    const app = shallow(<GithubInfo />);
    expect(app.find('input').length).toBe(2);
    expect(app.find('select').length).toBe(1);
})
