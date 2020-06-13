import '../styles/main.scss';
import 'bootstrap';
import navbar from './components/navBar/navbar';
import deleteMessage from './deleteMessage';

const init = () => {
  navbar.buildNavbar();
  deleteMessage.printMessages();
};

init();
