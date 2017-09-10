import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('can save state', () => {
    const app = shallow(<App />);
    expect(app.find('.container').length).toBe(1);
    expect(app.find('.alert').length).toBe(0);
    expect(app.find('.btn-danger').length).toBe(0);
    app.setState({errorMessage: 'Something went wrong'});
    expect(app.find('.alert').length).toBe(1);
    app.setState({repo: 'react-fetch', username: 'zackify'});
    expect(app.find('.btn-danger').length).toBe(1);
})
