import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: var(--container);
    background-color: ${props => props.theme.backgroundGray};
`

export const CeoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
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
    
`

export const TeamMembers = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    width: 100%;
`

export const TeamMember = styled.img`
    width: 100%;
`