import utils from '../../helpers/utils';
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
              <button class="dropdown-item" type="button" id="Peter">Peter</button>
              <button class="dropdown-item" type="button" id="Susan">Susan</button>
              <button class="dropdown-item" type="button" id="Edmund">Edmund</button>
              <button class="dropdown-item" type="button" id="Lucy">Lucy</button>
              <button class="dropdown-item" type="button" id="Aslan">Aslan</button>
            </div>
          </div>
        <div class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Message goes here</label>
            <input type="text" class="form-control" id="messageBox" placeholder="Hello">
            <button type="submit" class="btn btn-secondary" id="submit">Submit!</button>
            <button type="button" class="btn btn-danger" id="clear">Clear Messages!</button>
            <a id="dark-mode" class="toggle moon"><i class="fas fa-moon"></i></a>
        </div>
      </div>
    `;
  utils.printToDom('#theWitch', domString);
};

$('body').on('click', '#dark-mode', styleChanges.darkMode);
$('body').on('click', '#light-mode', styleChanges.lightMode);

export default { buildNavbar };
