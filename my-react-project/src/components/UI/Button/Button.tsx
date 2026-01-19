import styles from './Button.module.css'

interface ButtonProps{
    text: string;
    Onclick: () => void
}


function Button({text, Onclick,}:ButtonProps) {
  
  return (
    <button className={styles.Button} onClick={Onclick}>
      {text}
    </button>
  )
}

export default Button