import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

it('renders the UI as expected', () => {
    const tree = renderer
        .create( < Card name = "Card" / > )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < Card / > , div);
    ReactDOM.unmountComponentAtNode(div);
});