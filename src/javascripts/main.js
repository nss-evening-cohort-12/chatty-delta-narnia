import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navbar';
import chats from './components/buildChats';

const init = () => {
  navbar.buildNavbar();
  chats.buildChats();
};

init();
