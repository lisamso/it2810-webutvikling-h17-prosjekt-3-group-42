import React from 'react';
import Timestamp from 'react-timestamp';

export function removeNote(array, id) {
  return array.filter(e => e.id !== id);
}

export function timestampAt(time) {
  return <Timestamp time={ time } format='ago' />;
}
