import utils from '../../helpers/utils';
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
              <a class="dropdown-item" href="#">Peter</a>
              <a class="dropdown-item" href="#">Susan</a>
              <a class="dropdown-item" href="#">Edmund</a>
              <a class="dropdown-item" href="#">Lucy</a>
              <a class="dropdown-item" href="#">Aslan</a>
            </div>
            </div>
        <div class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Message goes here</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="messageBox" placeholder="Hello">
            <button type="submit" class="btn btn-primary mb-2" id="sort">Submit!</button>
        </div>
    `;
  utils.printToDom('#theWitch', domString);
};

export default { buildNavbar };
