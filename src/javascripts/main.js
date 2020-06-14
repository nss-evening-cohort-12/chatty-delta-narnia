import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navbar';
import chats from './components/buildChats';
import clear from './components/clearMsgs';

const init = () => {
  navbar.buildNavbar();
  chats.buildChats();
  chats.deleteEvent();
  clear.wipeOut();
};

init();
