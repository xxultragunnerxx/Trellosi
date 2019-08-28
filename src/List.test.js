import React from 'react';
import ReactDOM from 'react-dom';
import renderer from "react-test-renderer"

import List from './List';

describe('<List />', () => {
   it('renders without crashing', () => {

       // Create a DOM element to render the component into
       const section = document.createElement('section');

       // Render the component
       // If something is wrong it will fail here
       ReactDOM.render('<List />', section);

       // Clean up
       ReactDOM.unmountComponentAtNode(section);
   });
});

describe('<List />', () => {
    it('renders without crashing', () => {
        // Render the component, as JSON
        const tree = renderer.create('<List />').toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot();
    });
});
