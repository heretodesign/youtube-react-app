import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const videoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper 
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
                onClick={() => onVideoSelect(video)}
            >
                <img 
                style={{ marginRight: '20px' }} alt="thumbnail" 
                src={video.snippet.thumbnails.medium.url}
                 />
                <Typography variant="subtitle1">{video.snippet.title} <br /></Typography>
            </Paper>
        </Grid>
    )
}

export default videoItem;