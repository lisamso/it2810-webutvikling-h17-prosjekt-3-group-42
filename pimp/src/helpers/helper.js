import React from 'react';
import Timestamp from 'react-timestamp';

export function removeId(array, id) {
  return array.filter(e => e.id !== id);
}

export function timestampAt(time) {
  return <Timestamp time={ time } format='ago' />;
}
