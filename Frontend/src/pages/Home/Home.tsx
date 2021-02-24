import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from '../../hooks/easy-peasy-hooks';
import UserEntry from '../../interfaces/UserEntry';
import Headline1 from '../../components/Headline1/Headline1';

const Home: React.FC = () => {
  const getUsers = useStoreState((state) => state.users.users);
  const createEntry = useStoreActions((actions) => actions.users.addUser);

  useEffect(() => {
    const user: UserEntry = {
      id: 1,
      name: 'Max Mustermann',
    };
    createEntry(user);
  }, []);

  return (
    <div>
      {getUsers.map((user) => (
        <Headline1 key={user.id}>{user.name}</Headline1>
      ))}
    </div>
  );
};

export default Home;
