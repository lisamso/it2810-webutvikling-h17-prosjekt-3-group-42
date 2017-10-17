import NoteContainer from '../components/Note/NoteContainer';
import React from 'react';
import renderer from 'react-test-renderer';

test('NoteContainer component renders the note correctly', () => {
    //const note = {title: 'Alpacas', text: 'are beautiful', lastChanged: '12.10.2017'}
    const rendered = renderer.create(
        <NoteContainer/>
    );
    let tree = rendered.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger btnClick
    rendered.getInstance().btnClick();
    tree = rendered.toJSON();
    expect(tree).toMatchSnapshot();
});