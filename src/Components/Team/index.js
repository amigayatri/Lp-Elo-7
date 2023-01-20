import { Wrapper, CeoWrapper,  TeamWrapper, TeamMember, VideoPlaceholder, TextWrapper, Subtitle, Description, TeamMembers } from "./style";
import { SectionTitle } from "../../globalComponents";
import placeholder from "../../Assets/placeholder-video.jpeg"
import beatriz from "../../Assets/beatriz.jpeg"
import camila from "../../Assets/camila.jpeg"
import david from "../../Assets/david.jpeg"
import guto from "../../Assets/guto.jpeg"


export default function Team() {
    const teamMembers = [{name: "Camila", src: camila}, {name: "Guto", src: guto}, {name: "David", src: david}, {name: "Beatriz", src: beatriz}]

    return (
        <Wrapper>
            <CeoWrapper>
                <VideoPlaceholder alt="Imagem do vídeo do CEO" src={placeholder} />
                <TextWrapper>
                    <SectionTitle>Palavras do CEO</SectionTitle>
                    <Subtitle>Carlos Curioni</Subtitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin magna lectus, semper vel dolor eu, tincidunt venenatis
                        velit. Aenean sit amet tempus nunc. Fusce volutpat sem quis
                        nunc laoreet tempor.
                    </Description>
                </TextWrapper>
            </CeoWrapper>
            <TeamWrapper>
                <SectionTitle>Conheça nosso time fora de série</SectionTitle>
                <TeamMembers>
                    {teamMembers.map((teamMember, index) => {
                        return (
                            <TeamMember key={"team member "+index} src={teamMember.src} alt={teamMember.name} />
                        )
                    })}
                </TeamMembers>
            </TeamWrapper>
        </Wrapper>
    );
}