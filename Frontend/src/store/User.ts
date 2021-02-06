import { action } from 'easy-peasy';
import UsersModel from '../interfaces/UsersModel';

const User: UsersModel = {
  users: [],
  addUser: action((state, payload) => {
    state.users.push(payload);
  }),
};

export default User;
