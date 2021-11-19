import styled from "styled-components";

export const Container = styled.header` 
    display: flex;
    justify-content: center;
    min-height: 50px !important;
    max-height: 25rem;
    position: relative;
`;

export const Content = styled.div`
    position: absolute;
    left: 8%;
    top: 10%;
`;

export const Lista = styled.div`
    top: 10%;
    margin-left: 30%;
    font-size: 18px;
    color: var(--background);
    li {
        display: inline;
        margin-left: 3rem ;
    }
    position: absolute;
    
`;

export const TextCentral = styled.div`
    position: absolute;
    text-align: center;
    color: var(--background);
    margin-top: 15%;
    font-size: 4em;
    font-weight: bolder;    
`
export const LineVertical = styled.div`
    height: 60px;
    border-right: 2px solid white;
    position: absolute;
    margin-top: 25%;
`

