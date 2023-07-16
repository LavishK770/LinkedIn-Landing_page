import React from 'react'
import "./css/sidebar.css"
import { Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
    const user=useSelector(selectUser);

  return (
    <div className='sidebar'>
        <div className='sidebar_profile'>
            <img src='https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1348&q=80.jpg'/>

            <div className='profile_detail'>
                <Avatar/>
                <h4>{user.displayName}</h4>
                <p>Web Developer</p>
            </div>
            <div className='profile_stats'>
                <span>Who viewed your profile</span>
                <span className='stat_number'> 20</span>
            </div>
            <div className='profile_stats'>
            <span>Connection<br/><b>Grow Your Network</b></span>
                <span className='stat_number'> 150</span>
            </div>
        </div>

        <div className='sidebar_recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>branding</p>
            <p className='hash'><span>#</span>marketing</p>
            <p className='hash'><span>#</span>webDevelopment</p>
            <p className='hash'><span>#</span>programming</p>
            <p className='hash'><span>#</span>reactJs</p>
            <p className='hash'><span>#</span>javascript</p>
            {/* <p className='hash'><span>#</span>branding</p> */}
        </div>
    </div>
  )
}

export default Sidebar