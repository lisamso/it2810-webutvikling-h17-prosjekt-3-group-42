import React from 'react';
import Timestamp from 'react-timestamp';

export function removeId(array, id) {
  return array.filter(e => e.id !== id);
}

export function timestampAt(time) {
  return <Timestamp time={ time } format='ago' />;
}

export function initLocalStorageCounter() {
  if(!localStorage.count) {
    localStorage.count = 0
  }
}
export function getLocalStorageCounter() {
  let id
  if (typeof(Storage) !== 'undefined') {
    id = Number(localStorage.count)
    localStorage.count = Number(localStorage.count) + 1
  } else {
    id = window.id++
  }
  return id
}
