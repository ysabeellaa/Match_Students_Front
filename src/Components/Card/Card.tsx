import styles from './Card.module.scss';

interface ICardInfo {
  img?: string;
  name: string;
  course: string;
  period: string;
  age: string;
  skills: string;
  mentor: string;
}

export const cardInfo: ICardInfo[] = [
  {
    img: '../../../public/imgs/joffre_img.png',
    name: 'Joffre Quintas',
    course: 'Engenharia de Software',
    period: '5º Período',
    age: '21 anos',
    skills: 'Redes, React, Node',
    mentor: 'Disponível para Mentorar',
  },
  {
    img: '../../../public/imgs/joffre_img.png',
    name: 'Joffre Quintas',
    course: 'Engenharia de Software',
    period: '5º Período',
    age: '21 anos',
    skills: 'Redes, React, Node',
    mentor: 'Disponível para Mentorar',
  },
  {
    img: '../../../public/imgs/joffre_img.png',
    name: 'Joffre Quintas',
    course: 'Engenharia de Software',
    period: '5º Período',
    age: '21 anos',
    skills: 'Redes, React, Node',
    mentor: 'Disponível para Mentorar',
  },
  {
    img: '../../../public/imgs/joffre_img.png',
    name: 'Joffre Quintas',
    course: 'Engenharia de Software',
    period: '5º Período',
    age: '21 anos',
    skills: 'Redes, React, Node',
    mentor: 'Disponível para Mentorar',
  },
];

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      {cardInfo.map((info) => (
        <div className={styles.card} key={info.name}>
          <div className={styles.imageContainer}>
            {info.img && <img src={info.img} alt="" />}
            <h1>{info.name}</h1>
          </div>
          <h2>{info.course}</h2>
          <h2>{info.period}</h2>
          <h2>{info.age}</h2>
          <h2>{info.skills}</h2>
          <h1>{info.mentor}</h1>
        </div>
      ))}
    </div>
  );
}
