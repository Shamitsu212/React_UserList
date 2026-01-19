import styles from './SwitchButton.module.css'

interface ButtonProps {
    text1: string;
    text2: string;
    Active: boolean;
    setActive: (value: boolean) => void;
}

function SwitchButton({text1, text2, Active, setActive}:ButtonProps) {
  
  return (
    <div className={styles.ButtonContainer}>
      
      <button
        disabled={Active == false}
        onClick={() => setActive(false)}
        className={styles.ButtonContainer__Button}
        style={{
            backgroundColor: Active == false ? "blue" : "gray",
            cursor: Active == false ? "not-allowed" : "pointer",
        }}
      >
        {text1}
      </button>

      <button
        disabled={Active == true}
        onClick={() => setActive(true)}
        className={styles.ButtonContainer__Button}
        style={{
            backgroundColor: Active == true ? "blue" : "gray",
            cursor: Active == true ? "not-allowed" : "pointer",
        }}
      >
        {text2}
      </button>

    </div>
  )
}

export default SwitchButton