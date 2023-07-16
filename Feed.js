import React,{useEffect, useState} from 'react'
import {Avatar} from "@material-ui/core"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TodayIcon from '@mui/icons-material/Today';
import "./css/feed.css"
import Post from './Post';
import firebase from "firebase"
import {db} from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {

   const user= useSelector(selectUser);
   const [posts,setPost]=useState([])   
   const [input,setInput]=useState();

      const submitPost=(e)=>{
            e.preventDefault();
            db.collection("posts").add({
               name:user.displayName,
               description:"This is description",
               message:input,
               timestamp:firebase.firestore.FieldValue.serverTimestamp(),
         });
            setInput("");
}
      useEffect(()=>{
            db.collection("posts").orderBy("timestamp","desc").onSnapshot(
               snapshot=>{
                  setPost(snapshot.docs.map(docs=>({
                     id:docs.id,
                     data:docs.data()
                  })))
               }
            )
},[])
      console.log(posts);

  return (
    <div className='feed'>
        <div className='feed_input'>
        <div className='feed_form'>
                <Avatar/>
                <form onSubmit={submitPost}>
                    <input type="text" placeholder="Start a post" 
                     value={input} onChange={e=>setInput(e.target.value)}/>
                    <input type ="submit"/>
                </form>
            </div>    
        
        <div className='feed_options'>
             <div className='options'>
                <InsertPhotoIcon style={{color:'#70b5f9'}}/>
                <span>Photo</span>
             </div>
             <div className='options'>
                <YouTubeIcon style={{color:"#7fc15e"}}/>
                <span>Video</span>
             </div>
             <div className='options'>
                <TodayIcon style={{color:"#e7a33e"}}/>
                <span>Event</span>
             </div>
             <div className='options'>
                <AssignmentIcon style={{color:"#fc9295"}}/>
                <span>Write Article</span>
             </div>
        </div>
        </div>
<FlipMove>
{
      posts.map(({id,data:{name,description,message}})=>{
         return  <Post key={id} name={name} description={description} message={message}/>
      })
}
</FlipMove>

       


    </div>
  )
}

export default Feed