import Button from '@mui/material/Button'
import styles from './SectionImgText.module.scss';

interface ISectionImg {
  rightImg: string;
}

export default function SectionImgText(props: ISectionImg) {
  return (
    <div className={styles.divContainerImgRight}>
      <section>
        <p>Aqui, você encontrará uma comunidade diversificada de alunos engajados, dispostos a se tornarem mentores e mentorados.</p>
        <p>Seja qual for o seu objetivo - aprimorar habilidades específicas, ou explorar novas áreas de conhecimento - estamos aqui para ajudar você a encontrar o mentor ideal, ou até mesmo ser um mentor!</p>
      </section>
      <img src={props.rightImg} alt={props.rightImg} />
    </div>
  );
}

export function SectionImgTextButton(props: ISectionImg) {
  return (
    <div className={styles.divContainerImgButton}>
      <img src={props.rightImg} alt={props.rightImg} />
      <section>
        <p>Acesse agora para começar a aprender e/ou ensinar!</p>
        <Button variant="contained" className={styles.button}>Fazer Cadastro</Button>
      </section>
    </div>
  );
}
