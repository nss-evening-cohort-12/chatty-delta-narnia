const printToDom = (selector, text) => {
  $(selector).html(text);
};

// eslint-disable-next-line no-undef
const getDate = () => moment().format('MMMM Do YYYY, h:mm:ss a');

export default { printToDom, getDate };
