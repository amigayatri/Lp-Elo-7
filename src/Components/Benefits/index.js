import { Wrapper, BenefitsList, Item, Icon, Description, SubtitleBenefit } from "./style";
import { Button } from "../../globalComponents";
import qualidade from "../../Assets/qualidade.png"
import atividades from "../../Assets/atividades.png"
import descontracao from "../../Assets/descontracao.png"


export default function Benefits() {
    const benefitsList = [
        {
            title: "Qualidade de vida", 
            img: {
                src: qualidade,
                alt: "Imagem simples de um sorriso"
            }, 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit molestie ligula, quis ultricies diam ornare nec. Proin non sagittis risus."
        }, 
        {
            title: "Ambiente Descontraído", 
            img: {
                src: descontracao,
                alt: "Imagem simples de mão fazendo chifre"
            } , 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut orci in neque ullamcorper cursus eget ut felis. Vestibulum nec finibus lectus."
        },{
            title: "Atividades Extras", 
            img: {
                src: atividades,
                alt: "Imagem simples de paleta de pintura"
            } , 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec finibus nisl. Cras magna risus, tristique quis est ut, semper tempus ex. "
        }
    ]

    return (
        <Wrapper>
            <BenefitsList>
                {benefitsList.map((benefit, index) => {
                    return (
                        <Item key={"benefit "+index}>
                            <Icon src={benefit.img.src} alt={benefit.img.alt} />
                            <SubtitleBenefit>{benefit.title}</SubtitleBenefit>
                            <Description>{benefit.desc}</Description>
                        </Item>
                    )
                })}
            </BenefitsList>
            <Button>Saiba mais</Button>
        </Wrapper>
    );
}