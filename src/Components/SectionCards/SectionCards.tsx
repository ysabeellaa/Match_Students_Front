import Card from '../Card/Card'
import styles from './SectionCards.module.scss'


export default function SectionCards() {
    return (
        <section>
            <h1 className={styles.h1Card}>Entre em contato com seus colegas de faculdade para começar o processo de capacitação</h1>
            <div className={styles.generalDivCards}>
                <Card />
                <h1 className={styles.h1CardEnd}>Não perca tempo, aprenda o que não sabe e ensine o que já aprendeu!</h1>
            </div>

        </section>
    )
}
