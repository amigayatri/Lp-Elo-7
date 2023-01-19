import { Wrapper, BannerImage } from "./style";
import banner from "../../Assets/foto-bottom.png"

export default function Banner() {

    return (
        <Wrapper>
            <BannerImage src={banner} alt="Evento da Elo7" />
        </Wrapper>
    );
}