import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Header() {
const user=useSelector(selectUser);


  return (
    <div className="header">
        <div className="header_left">
            <div className="header_logo">
            <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png"/>

            </div>
        
            <div className="header_search">
              <SearchIcon/>
             <input type="text" placeholder='Search'/> 
            </div>
        </div>

        <div className="header_right">
            <Headeroptions Icon={HomeIcon} title="Home"/>
            <Headeroptions Icon={PeopleIcon} title="My Network"/>
            <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
            <Headeroptions Icon={MessageIcon} title="Messaging"/>
            <Headeroptions Icon={NotificationsActiveIcon} title="Notifications"/>
            <Headeroptions avatar={Avatar} title={user.displayName}/>
        </div>
    </div>
  )
}

export default Header       