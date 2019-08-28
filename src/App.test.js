import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from "react-test-renderer"


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render('<App />', div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
    it('renders without crashing', () => {
        // Render the component, as JSON
        const tree = renderer.create('<App />').toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot();
    });
});
