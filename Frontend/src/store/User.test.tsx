import React from 'react';
import { createStore } from 'easy-peasy';
import User from './User';

test('add User action', async () => {
  // arrange
  const user = { id: 1, name: 'Max Mustermann' };
  const store = createStore(User);

  // act
  store.getActions().addUser(user);

  // assert
  expect(store.getState().users[0].id).toEqual(user.id);
  expect(store.getState().users[0].name).toEqual(user.name);
});
