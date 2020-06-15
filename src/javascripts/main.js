import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navbar';
import chats from './components/buildChats/buildChats';
import clear from './components/clearMessages/clearMsgs';
import footer from './components/footer/footer';

const init = () => {
  navbar.buildNavbar();
  chats.buildChats();
  chats.deleteEvent();
  clear.wipeOut();
  footer.buildFooter();
};

init();
