import { createStore } from 'easy-peasy';

import Store from '../interfaces/Store';
import User from './User';

const store: Store = {
  users: User,
};

export default createStore<Store>(store);
