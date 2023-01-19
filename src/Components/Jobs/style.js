import styled from 'styled-components';

export const Wrapper = styled.section`
    text-align: center;
    padding: 0 var(--container);
    width: 100%;
    box-sizing: border-box;
`

export const JobList = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
`

export const JobItem = styled.li`
    display: flex;
    justify-content: space-between;
`

export const JobLink = styled.a`
    text-align: start;
    text-decoration: none;
    color: ${props => props.theme.green};
    font-weight: 500;
`
export const JobLocal = styled.span`
    text-align: end;
    color: ${props => props.theme.warmGray};
    font-weight: 500;
`

export const SubTitle = styled.h3`
    text-transform: uppercase;
    color: ${props => props.theme.warmGray};
    text-align: left;
    font-size: 1.125rem;
`