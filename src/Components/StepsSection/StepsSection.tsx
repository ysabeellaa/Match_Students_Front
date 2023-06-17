import img1 from '../../../public/imgs/man-chatting.png';
import img2 from '../../../public/imgs/3d-megaphone.png';
import img3 from '../../../public/imgs/email.png';
import img4 from '../../../public/imgs/idea.png';
import styles from './StepsSection.module.scss';

interface IList {
    img: string;
    text: string;
}

export const list: IList[] = [
    {
        img: img1,
        text: 'Cadastro'
    },
    {
        img: img2,
        text: 'Pesquisa'
    },
    {
        img: img3,
        text: 'Contato'
    },
    {
        img: img4,
        text: 'Capacitação'
    }
];

export default function StepsSection() {
    return (
        <div className={styles.generalDiv}>
            <h1>Descubra, aprenda, conecte-se. Seja um mentorado, seja um mentor!</h1>
            <div>
                <ul>
                    {list.map((itemList, index) => (
                        <li key={index}>
                            <img src={itemList.img} alt="" />
                            <p>{itemList.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <h1 className={styles.fakeButton}>Junte-se a nós e embarque nesta jornada emocionante de aprendizado colaborativo.</h1>
        </div>
    );
}