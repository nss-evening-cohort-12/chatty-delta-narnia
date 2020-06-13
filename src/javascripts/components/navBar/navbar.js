import utils from '../../helpers/utils';
import 'bootstrap';
import './navBar.scss';

const buildNavbar = () => {
  const domString = `
        <div class="topnav" id="navbar">
            <h5>Narnia Chat</h5>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button" id="Peter">Peter</button>
              <button class="dropdown-item" type="button" id="Susan">Susan</button>
              <button class="dropdown-item" type="button" id="Edmund">Edmund</button>
              <button class="dropdown-item" type="button" id="Lucy">Lucy</button>
              <button class="dropdown-item" type="button" id="Aslan">Aslan</button>
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
};

export default { buildNavbar };
