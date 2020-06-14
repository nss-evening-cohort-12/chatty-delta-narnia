import utils from '../../helpers/utils';
import addMessages from '../../components/addMessages/addMessages'; //eslint-disable-line
import styleChanges from '../../styleChanges';
import 'bootstrap';
import './navBar.scss';

const buildNavbar = () => {
  const domString = `
      <div class="d-flex navbar">
        <img style="width: 200px;" src="../../../src/assets/narnia-logo.png">
        <div class="d-flex topnav" id="navbar">
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button" id="user1">Peter</button>
              <button class="dropdown-item" type="button" id="user2">Susan</button>
              <button class="dropdown-item" type="button" id="user3">Edmund</button>
              <button class="dropdown-item" type="button" id="user4">Lucy</button>
              <button class="dropdown-item" type="button" id="user5">Aslan</button>
            </div>
          </div>
        <div class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Message goes here</label>
            <input type="text" class="form-control" id="messageBox" placeholder="Hello">
            <button type="submit" class="btn btn-secondary" id="submit">Submit!</button>
            <button type="button" class="btn btn-danger" id="clear">Clear Messages!</button>
            <a id="dark-mode" class="toggle moon"><i class="fas fa-moon"></i></a>
            <a id="largeText"><i type=button class="large fas fa-search-plus"></i></a>
        </div>
      </div>
    `;
  utils.printToDom('#theWitch', domString);
  document.querySelector('#user1').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user2').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user3').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user4').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user5').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#submit').addEventListener('click', addMessages.clickSubmitEvent);
  document.querySelector('#largeText').addEventListener('click', addMessages.largeTextEvent); //eslint-disable-line
};

const getUserIdEvent = (e) => {
  const activeButtons = document.querySelectorAll('#user1, #user2, #user3, #user4, #user5');

  for (let i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove('active');
  }
  e.target.classList.add('active');
};

$('body').on('click', '#dark-mode', styleChanges.darkMode);
$('body').on('click', '#light-mode', styleChanges.lightMode);

export default { buildNavbar, getUserIdEvent };
