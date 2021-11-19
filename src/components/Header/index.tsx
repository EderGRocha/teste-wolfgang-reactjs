import bannerImg from '../../assets/awards_banner.jpg'
import logoImg from '../../assets/logo.svg';
import { Container, Content, LineVertical, Lista, TextCentral } from './styles';

export function Header() {
    return (
        <Container>
                
            <Content>
                <img src={logoImg} alt="wolfgang digital" />
            </Content>
                <img src={bannerImg} alt="banner wolfgang" />
            <Lista>
                <ul>
                    <li>OUR WORK</li>
                    <li>ABOUT US</li>
                    <li>CAREERS</li>
                    <li>BLOG</li>
                    <li>AWARDS</li>
                    <li>CONTACT</li>
                </ul>
            </Lista>
            <>
                <TextCentral><p>The Awards Wall</p></TextCentral>
            </>
            <>
                <LineVertical></LineVertical>
            </>
            
        </Container>        
    )
}