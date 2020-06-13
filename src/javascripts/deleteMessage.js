import utils from './helpers/utils';
import messageData from './helpers/data/messageData';

const wardrobes = messageData.getWardrobe();

const printMessages = () => {
  let domString = '';
  for (let i = 0; i < wardrobes.length; i++) {
    domString += `
      <div class="container">
        <hr>
        <h2 style="font-size: 1.5em;">${wardrobes[i].userId}<h2>
        <p style="font-size: .5em;">${wardrobes[i].messageContent}</p>
        <a id="${wardrobes[i].messageId}" class="delete-icon">X</a>
      </div>
    `;
    utils.printToDom('#delete', domString);
  }
};

const deleteMessage = (e) => {
  e.preventDefault();
  for (let i = 0; i < wardrobes.length; i++) {
    if (wardrobes[i].messageId === e.target.id) {
      wardrobes.splice([i], 1);
      console.error(wardrobes);
    }
  }
  printMessages();
};

const clickEvents = () => {
  for (let i = 0; i < wardrobes.length; i++) {
    $('body').on('click', `#${wardrobes[i].messageId}`, deleteMessage);
  }
};

clickEvents();

export default { printMessages };
