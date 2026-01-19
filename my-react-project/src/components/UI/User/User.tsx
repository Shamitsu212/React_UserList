import styles from './User.module.css'

import { useSelector} from 'react-redux';
import { type RootState } from '../../../store';

import type {user} from '../../../data/users'

interface UserProps {
    user: user;
    onClick: (user: user) => void;
}

function User({user, onClick}:UserProps) {
  
    const usersInStore = useSelector((state: RootState) => state.users.users);

    const isUserAdded = usersInStore.some(u => u.id === user.id);

  return (
    <article className={styles.User}>

        <div className={styles.User__wrapper}>
            <img src={user.src} className={styles.wrapper__img}/>
        </div>

        <div className={styles.User__Info}>
            <p className={styles.Info__name}>
                {user.name}
            </p>
            <p className={styles.Info__username}>
                {user.username}
            </p>
        </div>

        {isUserAdded == false && (
            <button 
                className={styles.User__Button} 
                onClick={() => onClick(user)}
                style={{backgroundColor: 'green'}}
            >
                +
            </button>
        )}

        {isUserAdded == true && (
            <button 
                className={styles.User__Button} 
                onClick={() => onClick(user)}
                style={{backgroundColor: 'red'}}
            >
                X
            </button>
        )}
        


    </article>
  )
}

export default User