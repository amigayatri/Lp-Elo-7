import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
`

export const Title = styled.h1`
    margin: 0 auto;
    color: ${props => props.theme.white};
    font-size: 2.75rem;
    text-shadow: 2px 2px 2px ${props => props.theme.warmGray};
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
`

export const ImageContainer = styled.div`
    position: relative;
`

export const Description = styled.p`
    padding: 24px var(--container);
    color: ${props => props.theme.warmGray};
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`