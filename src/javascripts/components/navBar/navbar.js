import utils from '../../helpers/utils';
import messageData from '../../helpers/data/messageData'; //eslint-disable-line
import 'bootstrap';
import './navBar.scss';

const buildNavbar = () => {
  const domString = `
        <div class="topnav" id="navbar">
            <h5>Narnia Chat</h5>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Users
            </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" id="user1">Peter</a>
              <a class="dropdown-item" href="#" id="user2">Susan</a>
              <a class="dropdown-item" href="#" id="user3">Edmund</a>
              <a class="dropdown-item" href="#" id="user4">Lucy</a>
              <a class="dropdown-item" href="#" id="user5">Aslan</a>
            </div>
            </div>
        <div class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Message goes here</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="messageBox" placeholder="Hello">
            <button type="submit" class="btn btn-primary mb-2" id="submit">Submit!</button>
        </div>
    `;
  utils.printToDom('#theWitch', domString);
  document.querySelector('#user1').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user2').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user3').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user4').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#user5').addEventListener('click', getUserIdEvent); //eslint-disable-line
  document.querySelector('#submit').addEventListener('click', messageData.clickSubmitEvent);
};

const getUserIdEvent = (e) => e.target.id;

export default { buildNavbar, getUserIdEvent };
