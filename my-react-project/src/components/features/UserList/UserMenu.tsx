import SwitchButton from '../../UI/SwitchButton/SwitchButton'
import User from '../../UI/User/User';

import styles from './UserMenu.module.css'

import { users, type user } from '../../../data/users'

import { useState } from 'react';

import { type RootState } from '../../../store';
import { type AppDispatch } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../../store/slice/usersSlice';




function UserMenu({}) {

  const [Switch, setSwitch] = useState<boolean>(false)

  const usersInStore = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleUser = (user: user) => {
    const exists = usersInStore.some(u => u.id === user.id);

    if (exists) {
      dispatch(removeUser(user.id));
    } else {
      dispatch(addUser(user));
    }
  };

  const availableUsers = users.filter(u => !usersInStore.some(f => f.id === u.id));

  return (
    <section className={styles.UserMenu}>

      <SwitchButton text1='Пользователи' text2='Друзья' Active={Switch} setActive={setSwitch}/>

      <div className={styles.UserMenu__Map}>
      {Switch == false &&
        availableUsers.map((e, id) =>(
          <User key={id} user={e} onClick={handleToggleUser}/>
        ))
      }

      {Switch == true &&
        usersInStore.map((e) =>(
          <User key={e.id} user={e} onClick={handleToggleUser}/>
        ))
      }
      </div>
      

    </section>
  )
}

export default UserMenu