import styles from './App.module.css'
import UserMenu from './components/features/UserList/UserMenu'

function App() {
  
  return (
    <main className={styles.Page}>
      <UserMenu />
    </main>
  )
}

export default App