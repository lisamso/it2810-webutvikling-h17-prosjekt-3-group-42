import Note from '../components/Note/Note';
import React from 'react';
import renderer from 'react-test-renderer';

test('Note component renders the note correctly', () => {
    const note = {title: 'Alpacas', text: 'are beautiful', lastChanged: '12.10.2017'}
    const rendered = renderer.create(
        <Note note={note} />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
});