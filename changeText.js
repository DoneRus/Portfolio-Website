function switchLanguage(lang) {
    document.querySelectorAll('.lang').forEach(element => {
        element.classList.remove('active');
    });
    document.querySelectorAll('.' + lang).forEach(element => {
        element.classList.add('active');
    });
}
document.getElementById('switch').addEventListener('change', function () {
    if (this.checked) {
        switchLanguage('nl')
      // Call a function or execute code when the switch is turned on
      console.log('Switch is ON');
    } else {
        switchLanguage('en')
      // Call a function or execute code when the switch is turned off
      console.log('Switch is OFF');
    }
  });