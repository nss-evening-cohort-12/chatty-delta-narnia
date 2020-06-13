const darkMode = () => {
  $('body').toggleClass('dark-mode', true);
  $('.toggle').replaceWith('<a id="light-mode" class="toggle sun"><i class="fas fa-sun"></i></a>');
};

const lightMode = () => {
  $('body').toggleClass('dark-mode', false);
  $('.toggle').replaceWith('<a id="dark-mode" class="toggle moon"><i class="fas fa-moon"></i></a>');
};

export default { lightMode, darkMode };

// // Custom Theme

// const theme = () => {
//   const domString = `
//     <form class="p-5">
//       <div class="form-group">
//         <label for="backgroundColor">Background Color</label>
//         <input type="text" class="form-control" id="backgroundColor" placeholder="Color or Hex">
//         <small id="emailHelp" class="form-text text-muted">Hex codes require the "#" symbol</small>
//       </div>
//       <div class="form-group">
//         <label for="textColor">Text Color</label>
//         <input type="text" class="form-control" id="textColor" placeholder="Color or Hex">
//         <small id="emailHelp" class="form-text text-muted">Hex codes require the "#" symbol</small>
//       </div>
//       <div class="form-group">
//         <label for="accentColor">Accent Color</label>
//         <input type="text" class="form-control" id="accentColor" placeholder="Color or Hex">
//         <small id="emailHelp" class="form-text text-muted">Hex codes require the "#" symbol</small>
//       </div>
//       <button id="submit" type="submit" class="btn btn-primary">Submit</button>
//       <button id="submit" type="submit" class="btn btn-danger">Reset</button>
//     </form>
//   `;
//   utils.printToDom('#theme', domString);
// };

// const getColors = () => {
//   const background = $('#backgroundColor').val();
//   const text = $('#textColor').val();
//   const accent = $('#accentColor').val();
//   $('body').css({ backgroundColor: `${background}`, color: `${text}` });
//   $('h1').css({ color: `${accent}` });
//   theme();
// };

// $('body').on('click', '#submit', getColors);
// theme();
