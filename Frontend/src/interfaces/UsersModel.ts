import { Action } from 'easy-peasy';
import UserEntry from './UserEntry';

export default interface UsersModel {
  users: UserEntry[];
  addUser: Action<UsersModel, UserEntry>;
}
