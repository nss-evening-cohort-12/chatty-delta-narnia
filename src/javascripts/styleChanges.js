const darkMode = () => {
  $('body').toggleClass('dark-mode', true);
  $('.toggle').replaceWith('<a id="light-mode" class="toggle sun"><i class="fas fa-sun"></i></a>');
};

const lightMode = () => {
  $('body').toggleClass('dark-mode', false);
  $('.toggle').replaceWith('<a id="dark-mode" class="toggle moon"><i class="fas fa-moon"></i></a>');
};

export default { lightMode, darkMode };
