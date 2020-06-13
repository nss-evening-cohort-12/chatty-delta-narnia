import '../styles/main.scss';
import utils from './helpers/utils';

const deleteMessage = () => {
  const domString = `
    <div class="container">
      <h2 style="font-size: 1.5em;">Ryan Beiden<h2>
      <p style="font-size: .5em;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
  `;
  utils.printToDom('#delete', domString);
};

deleteMessage();
