import chats from '../buildChats/buildChats';
import messages from '../../helpers/data/messageData';
import './largeFont.scss';

const clickSubmitEvent = () => {
  messages.addMessageToArray();
  document.getElementById('messageBox').value = null;
  chats.buildChats();
  chats.deleteEvent();
};

const largeTextEvent = () => {
  // document.getElementById('theWardrobe').style.fontSize = 'xx-large';
  $('#theWardrobe').toggleClass('large-text', true);
  $('.text-toggle').replaceWith('<a id="smallText" class="text-toggle"><i type="button" class="large fas fa-search-minus"></i></a>');
};

const smallTextEvent = () => {
  // document.getElementById('theWardrobe').style.fontSize = 'medium';
  $('#theWardrobe').toggleClass('large-text', false);
  $('.text-toggle').replaceWith('<a id="largeText" class="text-toggle"><i type="button" class="large fas fa-search-plus"></i></a>');
};

export default { clickSubmitEvent, largeTextEvent, smallTextEvent };
