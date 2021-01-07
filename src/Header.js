import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector} from 'react-redux';

function Header() {
  const userProfilePic = useSelector((state) => state.user.user.photoUrl);

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Pesquise aqui..." />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Início" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Minha rede" />
        <HeaderOption Icon={BusinessCenterIcon} title="Vagas" />
        <HeaderOption Icon={ChatIcon} title="Mensagens" />
        <HeaderOption Icon={NotificationsIcon} title="Notificações" />
        <HeaderOption avatar={userProfilePic} title="Eu" />
      </div>
    </div>
  )
}

export default Header
