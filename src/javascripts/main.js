import '../styles/main.scss';
import utils from './helpers/utils';
import messageData from './helpers/data/messageData';

const wardrobes = messageData.getWardrobe();

const printMessages = () => {
  let domString = '';
  wardrobes.forEach((wardrobe) => {
    domString += `
      <div class="container">
        <hr>
        <h2 style="font-size: 1.5em;">${wardrobe.userId}<h2>
        <p style="font-size: .5em;">${wardrobe.messageContent}</p>
        <a id="${wardrobe.messageId}"><i class="far fa-times-circle"></i></a>
      </div>
    `;
    utils.printToDom('#delete', domString);
  });
};

const deleteMessage = (e) => {
  e.preventDefault();
  wardrobes.forEach((wardrobe) => {
    if (wardrobe.messageId === e.target.id) {
      console.error(`${wardrobe.messageId}`);
      wardrobes.splice(wardrobe);
    }
  });
  printMessages();
};

wardrobes.forEach((wardrobe) => {
  $('body').on('click', `#${wardrobe.messageId}`, deleteMessage);
});

printMessages();
