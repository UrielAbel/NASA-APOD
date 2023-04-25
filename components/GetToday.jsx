import styles from '../styles/Pickers.module.css'

const GetToday = ( { setDate } ) => {

    const handleButtonClick = () => {
      setDate(new Date(new Date() - (Math.pow(60, 3) * 100)));
    };
  
    return (
        <button className={styles.buttonToday} onClick={handleButtonClick}>Obtener</button>
    )
}
export default GetToday;