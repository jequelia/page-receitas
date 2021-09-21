import React, { useState, useEffect } from "react";
import { Container, Description, Flex } from "./style";
import {getAll} from '../../services/videoService'
import Header from "../../components/header"

function Videos() {

    const [videos, setVideo] = useState([]);

    useEffect( () => {
        getAll().then((response) => {setVideo(response.data)});
    }, []);

    return (
        <>
        <Header/>
        <Flex>
        {videos.map((video) =>(
            <Container >
                <Description>
                    <video  width="200" height="200" controls>
                         <source src="https://youtu.be/dtnVE1YTLMo" type="video/mp4"/>
                    </video>
                    <h3>{video.name}</h3>
                    <h3>{video.description}</h3>
                    
                </Description>
            </Container>
        ))}
        </Flex>

        </>
    );
}
export default Videos;
  