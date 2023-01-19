import styled from 'styled-components';
import { SubTitle } from '../../globalComponents';

export const Wrapper = styled.section`
    padding: var(--container);
    text-align: center;
`
export const BenefitsList = styled.div`
    margin: 0 auto 32px;

    @media (min-width: 768px) {
        display: flex;
        max-width: 832px;
    }
`

export const Description = styled.p`
    color: ${props => props.theme.warmGray};
    text-align: justify;
`

export const Item = styled.div`
    text-align: center;
    max-width: 260px;
    margin: 32px auto 0;

    &:first-of-type {
        margin-top: 0;
    }

    @media (min-width: 768px) {
        margin-left: 24px;
        margin-top : 0;
        &:first-of-type {
            margin-left: 0;
        }
    }
`

export const Icon = styled.img`
    width: 150px;
    height: 150px;

    @media (min-width: 768px) {
        width: 180px;
        height: 180px;
    }
`

export const SubtitleBenefit = styled(SubTitle)`
    text-align: center;
`