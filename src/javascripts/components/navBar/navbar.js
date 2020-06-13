import utils from '../../helpers/utils';
import addMessages from '../../components/addMessages/addMessages'; //eslint-disable-line
import 'bootstrap';
import './navBar.scss';

const buildNavbar = () => {
  const domString = `
        <div class="topnav" id="navbar">
            <h5>Narnia Chat</h5>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Users
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
            <input type="text" class="form-control mb-2 mr-sm-2" id="messageBox" placeholder="Hello">
            <button type="submit" class="btn btn-primary mb-2" id="submit">Submit!</button>
            <button type="button" class="btn btn-danger" id="clear">Clear Messages!</button>
        </div>
    `;
  utils.printToDom('#theWitch', domString);
  // document.querySelector('#dropdownMenu2').addEventListener('click', removeClasses); //eslint-disable-line
  document.querySelector('#user1').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user2').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user3').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user4').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user5').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#submit').addEventListener('click', addMessages.clickSubmitEvent);
};

const getUserIdEvent = (e) => {
  const activeButtons = document.querySelectorAll('#user1, #user2, #user3, #user4, #user5');

  for (let i = 0; i < activeButtons.length; i++) {
    activeButtons[i].classList.remove('active');
  }
  e.target.classList.add('active');
};

export default { buildNavbar, getUserIdEvent };
