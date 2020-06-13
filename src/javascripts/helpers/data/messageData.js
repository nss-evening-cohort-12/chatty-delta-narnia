import utils from '../utils';
import userId from '../../components/navBar/navbar'; //eslint-disable-line

const theWardrobe = [
  {
    userId: 'user1',
    messageId: 'msg01',
    messageContent: 'What up my peeps?',
    timeStamp: '',
  },
  {
    userId: 'user2',
    messageId: 'msg02',
    messageContent: 'Nothing much',
    timeStamp: '',
  },
  {
    userId: 'user3',
    messageId: 'msg03',
    messageContent: 'Turkish Delight is tasty',
    timeStamp: '',
  },
  {
    userId: 'user4',
    messageId: 'msg04',
    messageContent: 'Mr Tumnus is the best',
    timeStamp: '',
  },
  {
    userId: 'user5',
    messageId: 'msg05',
    messageContent: 'Gonna be late Dont wait up',
    timeStamp: '',
  },
];

const getWardrobe = () => theWardrobe;

let messageId = 6;

const addMessageToArray = () => {
  const newMessage = {};
  newMessage.userId = userId.getUserIdEvent.value;
  newMessage.messageId = `msg${messageId}`;
  newMessage.messageContent = document.getElementById('messageBox').value;
  newMessage.timeStamp = utils.getDate();

  messageId++;
  console.error(newMessage);
  theWardrobe.unshift(newMessage);
};

const clickSubmitEvent = () => {
  addMessageToArray();
  document.getElementById('messageBox').value = null;
  console.error('working');
  console.error(theWardrobe);
};

export default { getWardrobe, clickSubmitEvent };
