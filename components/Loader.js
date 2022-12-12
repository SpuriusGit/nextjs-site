import Image from 'next/image';
import styles from '../styles/loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loaderWrapper}>
            <Image
                src="/images/oars_vs_jedi_scimus.webp"
                alt="loader image"
                width={500}
                height={500}
            />
        </div>
    )
}