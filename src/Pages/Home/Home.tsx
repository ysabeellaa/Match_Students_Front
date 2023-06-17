
import BkgImage from '../../Components/BackgroundImage/BkgImage'
import Header from '../../Components/Header/Header'
import imgBkg from '../../../public/imgs/banner1.png' 
import SectionImgText, {SectionImgTextButton} from '../../Components/SectionImgText/SectionImgText'
import imgRight from '../../../public/imgs/imgRight.png'
import imgLeft from '../../../public/imgs/imgLeft.png'
import StepsSection from '../../Components/StepsSection/StepsSection'
import SectionCards from '../../Components/SectionCards/SectionCards'


// import styles from './Home.module.scss'


export default function Home() {
    return (
        <div>
            <Header />
            <BkgImage img={imgBkg} text="Bem-vindo(a) à plataforma de mentorias da nossa faculdade!" />
            <StepsSection />
            <SectionImgText rightImg={imgRight} />
            <SectionCards/>
            <SectionImgTextButton rightImg={imgLeft} />
            
        </div>
    )
}
