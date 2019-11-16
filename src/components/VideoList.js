import React from 'react';
import { Grid } from '@material-ui/core'

import VideoItem from './videoItem'

const VideoList = ({videos, onVideoSelect}) => {

const listOfVideo = videos.map((video, id) => 
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
) 
        return (
            <Grid container spacing={10}>
            {listOfVideo}
            </Grid>
        ) 
    
}

export default VideoList;