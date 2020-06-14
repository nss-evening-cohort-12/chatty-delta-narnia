// import utils from '../../helpers/utils';
// import wardrobe from '../../helpers/data/messageData'
import chats from '../buildChats';
import messages from '../../helpers/data/messageData';

const clickSubmitEvent = () => {
  messages.addMessageToArray();
  document.getElementById('messageBox').value = null;
  chats.buildChats();
};

export default { clickSubmitEvent };
