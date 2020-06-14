import chats from '../buildChats';
import messages from '../../helpers/data/messageData';

const clickSubmitEvent = () => {
  messages.addMessageToArray();
  document.getElementById('messageBox').value = null;
  chats.buildChats();
};

const largeTextEvent = () => {
  document.getElementById('theWardrobe').style.fontSize = 'xx-large';
};

export default { clickSubmitEvent, largeTextEvent };
