import clearMessages from '../../helpers/data/messageData';

const theLion = clearMessages.getWardrobe();
let newWardrobe = theLion;

const clearWardrobe = () => {
  document.querySelector('#theWardrobe').innerHTML = '';
  newWardrobe = [];
  clearMessages.getWardrobe();
  if ($('#theWardrobe').text().length <= 0) {
    document.getElementById('clear').disabled = true;
  }
};

const wipeOut = () => {
  $('body').on('click', '#clear', clearWardrobe);
};

const getNewWardrobe = () => newWardrobe;

export default { wipeOut, getNewWardrobe };
