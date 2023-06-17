
import styles from './BkgImage.module.scss'

interface IBkgSection {
    img: string;
    text: string;
}


export default function BkgImage({img, text}: IBkgSection) {
    return (
        <section className={styles.sectionBanner} style={{ backgroundImage: `url(${img})` }}>
            <h1>{text}</h1>
        </section>
    )
}
