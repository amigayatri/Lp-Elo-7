import { Wrapper, Title, Description, Image, ImageContainer } from "./style";
import { Button } from "../../globalComponents";
import background from "../../Assets/foto-header.png"


export default function Hero() {
    return (
        <Wrapper className="hero">
            <ImageContainer>
                <Image alt="Grupo de trabalhadores com a camisa da Elo7 comemorando" src={background}/>
                <Title>Trabalhe na Elo7</Title>
            </ImageContainer>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales 
                hendrerit lorem, sit amet tincidunt elit aliquet ut. Praesent sit amet
                laoreet ex. Sed pharetra ex elit, vel dictum est mollis a. 
            </Description>
            <Button href="#jobs">Vagas em aberto</Button>
        </Wrapper>
    );
}