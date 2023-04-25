import Image from 'next/image';
import styles from '../styles/PhotoRenderer.module.css'

const PhotoRenderer = ({ imageUrl, title, explanation, date }) => {
    return (
        <>
            <div className={styles.contImg}>
                <Image 
                src={imageUrl} 
                alt={title}
                className={styles.image}
                fill
                />
            </div>
            <p className={styles.text}>{date}</p>
            <h2 className={styles.text}>{title}</h2>
            <p className={styles.text}>{explanation}</p>
        </>
    );
};
export default PhotoRenderer;