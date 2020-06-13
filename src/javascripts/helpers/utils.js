const printToDom = (selector, text) => {
  $(selector).html(text);
};

const getDate = () => moment().format('MMMM Do YYYY, h:mm:ss a'); //eslint-disable-line

export default { printToDom, getDate };
