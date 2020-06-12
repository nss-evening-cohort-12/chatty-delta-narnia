import utils from './helpers/utils';
import styleChanges from './styleChanges';
import '../styles/main.scss';

const nav = () => {
  const domString = '<a id="dark-mode" class="toggle moon"><i class="fas fa-moon"></i></a>';
  utils.printToDom('#test', domString);
};

$('body').on('click', '#dark-mode', styleChanges.darkMode);
$('body').on('click', '#light-mode', styleChanges.lightMode);

nav();
