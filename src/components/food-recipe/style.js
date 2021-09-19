import styled from 'styled-components'

export const Container  = styled.article`

    display: flex;
    justify-content: start;
    align-items: center;
    background: white;
    color: #ff6a28;
    width: 50vw;
    height: 15vh;
    transition: 0.5s;
    margin-bottom: 15px;
    &:hover{
            transform: translateX(10px);
        }
`

export const Description = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    p{
        color: #ff6a28;
        margin-left: 30px;
        font-size: 1.5vw;
        text-align: center;
        margin:0;
        padding: 0;
        margin-right: 10px;
    }

    img{
        width: auto;
        height: 100%;
        margin-right: 15px;
    }

    svg{
        width: 6vw;
        height: 6vh;
        color: #ff6a28;
    }

`
