import React, { forwardRef } from 'react'
import {Avatar} from "@material-ui/core"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post= forwardRef(({name,description,message}, ref)=> {
  return (
    <div className='post' ref={ref}>
        <div className='post_header'>
            <div className='post_headerleft'>
                <Avatar/>
                <div className='post_profile_details'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <MoreVertIcon/>
        </div>  

        <div className='post_body'>
            <p>{message}</p>
        </div>

        <div className='post_footer'>
            <div className='post_footer_options'>
                    <ThumbUpIcon> </ThumbUpIcon>
                    <span>Like</span>
            </div>

            <div className='post_footer_options'>
                    <ThumbDownAltIcon/>
                    <span>Dislike</span>
            </div>

            <div className='post_footer_options'>
                    <CommentIcon/>
                    <span>Comment</span>
            </div>

            <div className='post_footer_options'>
                    <ShareIcon/>
                    <span>Share</span>
            </div>

            <div className='post_footer_options'>
                    <SendIcon/>
                    <span>Send</span>
            </div>
        </div>

    </div>
  )
}  
  )


export default Post