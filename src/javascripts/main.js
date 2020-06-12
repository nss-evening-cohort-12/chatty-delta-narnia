import '../styles/main.scss';
import styleChanges from './styleChanges';

const printToDom = (selector, text) => {
  $(selector).html(text);
};

const nav = () => {
  const domString = '<a id="dark-mode" class="toggle moon"><i class="fas fa-moon"></i></a>';
  printToDom('#test', domString);
};

$('body').on('click', '#dark-mode', styleChanges.darkMode);
$('body').on('click', '#light-mode', styleChanges.lightMode);

nav();
