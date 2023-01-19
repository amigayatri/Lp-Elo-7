import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 32px var(--container);
    background-color: ${props => props.theme.backgroundGray};
`

export const CeoWrapper = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }
`

export const Subtitle = styled.span`
    color: ${props => props.theme.orange};
    font-style: italic;
    font-weight: 500;
    font-size: 1.125rem;

`

export const Description = styled.p`
    color: ${props => props.theme.warmGray};

`

export const TextWrapper = styled.div`
    text-align: left;
`

export const TeamWrapper = styled.div`
    margin-top: 32px;
    text-align: center;

    h2 {
        max-width: 260px;
        margin: 32px auto;
    }
`

export const VideoPlaceholder = styled.img`
    max-width: 100%;
    width: 100%;
`

export const TeamMembers = styled.div`
    width: 100%;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const TeamMember = styled.img`
    width: 100%;
    max-width: 300px;
`