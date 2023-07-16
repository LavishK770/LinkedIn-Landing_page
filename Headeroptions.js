import React from 'react'
import {Avatar} from "@material-ui/core"
import "./css/header.css"
import firebase from 'firebase'

function Headeroptions({Icon,title,avatar}) {
  return (
    <div className='header_options'>
          {             
          Icon && <Icon/>
          }
          {
            avatar && <Avatar name={avatar} onClick={e=>firebase.auth().signOut()}/>
          }
            <span>{title}</span>
    </div>
  )
}

export default Headeroptions