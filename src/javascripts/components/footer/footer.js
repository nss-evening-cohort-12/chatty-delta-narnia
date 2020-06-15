import utils from '../../helpers/utils';
import './footer.scss';

const buildFooter = () => {
  const domString = `
    <footer>
      <form class="p-5">
        <div class="row">
          <div class="form-group col">
            <label for="backgroundColor">Background Color</label>
            <input type="text" class="form-control" id="backgroundColor" placeholder="Color or Hex">
          </div>
          <div class="form-group col">
            <label for="textColor">Text Color</label>
            <input type="text" class="form-control" id="textColor" placeholder="Color or Hex">
          </div>
          <div class="form-group col">
            <label for="accentColor">Accent Color</label>
            <input type="text" class="form-control" id="accentColor" placeholder="Color or Hex">
          </div>
        </div>
        <div style="text-align: center;">
          <button style="margin: 20px 0px 0px 0px; border: none" id="submit" type="submit" class="btn btn-secondary">Change Theme</button>
        </div>
      </form>
    <footer>
  `;
  utils.printToDom('#footer', domString);
};

const getColors = () => {
  const background = $('#backgroundColor').val();
  const text = $('#textColor').val();
  const accent = $('#accentColor').val();
  $('body').css({ backgroundColor: `${background}`, color: `${text}` });
  $('h1').css({ color: `${accent}` });
  buildFooter();
};

$('body').on('click', '#submit', getColors);

export default { buildFooter };
