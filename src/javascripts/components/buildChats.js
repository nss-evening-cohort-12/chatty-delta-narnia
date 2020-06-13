import utils from '../helpers/utils';
import userData from '../helpers/data/userData';
import theWardrobe from '../helpers/data/messageData';

const getName = (id) => userData.getUsers().find((user) => user.id === id).name;
const chats = theWardrobe.getWardrobe();

const buildChats = () => {
  let domString = '';

  for (let i = 0; i < chats.length; i++) {
    domString += '<div class="chats">';
    domString += `<div class="chats-body" id="${chats[i].messageId}">`;
    domString += `<h2 class="name">${getName(chats[i].userId)}</h2>`;
    domString += `<p class="message">${chats[i].messageContent}</p>`;
    domString += `<p class="message">${chats[i].timeStamp}</p>`;
    domString += '</div>';
    domString += '</div>';
  }

  utils.printToDom('#theWardrobe', domString);
};

export default { buildChats, getName };
