import styled from 'styled-components'

export const Container  = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    background: white;
    width: 70%;
    padding: 59px;
    margin-bottom: 20px;

    .details{
        display: flex;
        width: 100%;
        #image{
            max-width: 30vw;
            min-width: 30vw;
            margin-right: 30px;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    #temp{
        display: flex;
    }

    #horas{
        margin-right: 50px;
    }
    .steps{
        width: 100%;
         margin-top: 53px;
    }

    #button{
        margin-top: 50px;
    }
   
`

export const Flex = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

`