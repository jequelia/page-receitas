import styled from 'styled-components'

export const Container  = styled.article`

    display: flex;
    justify-content: start;
    align-items: center;
    background: white;
    color: #ff6a28;
    width: 40vw;
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
        max-width: 10vw;
        min-width: 10vw;
        max-height: 15vh;
        min-height: 15vh;
        margin-right: 15px;

    }

    svg{
        width: 4vw;
        height: 4vh;
        color: #ff6a28;
    }
    svg:hover{
        color: #ffa37a;
    }

    .flex{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    .icons{
        display: flex;
        flex-direction: column;
        height: 100%
        justify-content: space-between;
        align-items: center;

        #delete{
            margin-top: 15px;
            cursor: pointer;
        }
    }

`
