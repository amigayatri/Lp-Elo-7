import styled from 'styled-components';

export const Wrapper = styled.section`
    text-align: center;
    padding: 32px calc(var(--container) - 16px);
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
    margin: 8px 0;
    padding: 8px 8px;
    transition: box-shadow .3s;

    &:hover   {
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }

`

export const JobLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.green};
    font-weight: 500;
`
export const JobLocal = styled.span`
    color: ${props => props.theme.warmGray};
    font-weight: 500;
`