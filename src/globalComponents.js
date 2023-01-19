import styled from 'styled-components';

export const Button = styled.a`
    color: ${props => props.theme.green};
    text-decoration: none;
    border-top: 2px solid ${props => props.theme.warmGray};
    font-size: 1.125rem;
    text-transform: uppercase;
    padding: 16px 4px;
    font-weight: 500;

    &::after {
        content: "»";
        margin-left: 6px;

    }
`

export const SectionTitle = styled.h2`
    text-transform: uppercase;
    color: ${props => props.theme.warmGray};
    font-size: 1.25rem;
`