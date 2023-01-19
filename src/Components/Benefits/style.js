import styled from 'styled-components';
import { SubTitle } from '../../globalComponents';

export const Wrapper = styled.section`
    padding: var(--container);
    text-align: center;
`
export const BenefitsList = styled.div`
    display: flex;
    margin: 0 auto 24px;
    max-width: 832px;
`

export const Description = styled.p`
    color: ${props => props.theme.warmGray};
    text-align: justify;
`

export const Item = styled.div`
    text-align: center;
    margin-left: 24px;

    &:first-of-type {
        margin-left: 0;
    }
`

export const Icon = styled.img`
    width: 180px;
    height: 180px;
`

export const SubtitleBenefit = styled(SubTitle)`
    text-align: center;
`