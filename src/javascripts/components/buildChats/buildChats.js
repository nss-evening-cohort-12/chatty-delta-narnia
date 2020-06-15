import utils from '../../helpers/utils';
import userData from '../../helpers/data/userData';
import theWardrobe from '../../helpers/data/messageData';
import './buildChats.scss';

const getName = (id) => userData.getUsers().find((user) => user.id === id).name;
const chats = theWardrobe.getWardrobe();

const buildChats = () => {
  let domString = '';

  for (let i = 0; i < chats.length; i++) {
    domString += `<div class="chats-body container" id="${chats[i].messageId}">`;
    domString += `<h2 class="name">${getName(chats[i].userId)}:</h2>`;
    domString += `<p class="message">"${chats[i].messageContent}"</p>`;
    domString += `<p class="timestamp">${chats[i].timeStamp}</p>`;
    domString += `<a class="delete-icon" id="${chats[i].messageId}">x</a>`;
    domString += '</div>';
  }

  utils.printToDom('#theWardrobe', domString);
};

const deleteMessage = (e) => {
  e.preventDefault();
  for (let i = 0; i < chats.length; i++) {
    if (chats[i].messageId === e.target.id) {
      chats.splice([i], 1);
    }
  }
  buildChats();
};

const deleteEvent = () => {
  for (let i = 0; i < chats.length; i++) {
    $('body').on('click', `#${chats[i].messageId}`, deleteMessage);
  }
};

export default { buildChats, deleteEvent };
