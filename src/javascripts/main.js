import '../styles/main.scss';
import navbar from './components/navBar/navbar';
import 'bootstrap';
import chats from './components/buildChats';

const init = () => {
  navbar.buildNavbar();
  chats.buildChats();
};

init();
