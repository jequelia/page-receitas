import styled from 'styled-components'

export const Container  = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;

    h1{
        color: #ff6a28;
    }

    .cel{
        display: flex;
        margin: 45px;

        button{
            margin-left: 15px;
            color: white;
            background:#ff6a28;
        }
    }

    .add{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 18vw;

         svg{
            width: 4vw;
            height: 4vh;
            color: #ff6a28;
            cursor: pointer;
        }
        svg:hover{
            color: #ffa37a;
        }

        h1{
            margin:0;
        }
    }
`
