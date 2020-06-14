import utils from '../utils';

const theWardrobe = [
  {
    userId: 'user1',
    messageId: 'msg01',
    messageContent: 'Nothing much',
    timeStamp: 'June 13th 2020, 2:44:03 pm',
  },
  {
    userId: 'user2',
    messageId: 'msg02',
    messageContent: 'What up my peeps?',
    timeStamp: 'June 13th 2020, 1:50:46 pm',
  },
  {
    userId: 'user3',
    messageId: 'msg03',
    messageContent: 'Turkish Delight is tasty',
    timeStamp: 'June 12th 2020, 6:09:35 pm',
  },
  {
    userId: 'user4',
    messageId: 'msg04',
    messageContent: 'Mr Tumnus is the best',
    timeStamp: 'June 12th 2020, 10:05:15 am',
  },
  {
    userId: 'user5',
    messageId: 'msg05',
    messageContent: 'Gonna be late Dont wait up',
    timeStamp: 'June 11th 2020, 9:50:10 pm',
  },
];

let messageId = 6;

const addMessageToArray = () => {
  const newMessage = {};
  newMessage.userId = document.querySelector('.active').id;
  newMessage.messageId = `msg${messageId}`;
  newMessage.messageContent = document.getElementById('messageBox').value;
  newMessage.timeStamp = utils.getDate();

  messageId++;
  theWardrobe.unshift(newMessage);
};

const getWardrobe = () => theWardrobe;

const clearMessages = () => {
  theWardrobe.splice(0, theWardrobe.length);
};

export default { getWardrobe, clearMessages, addMessageToArray };
