       
       
       //----------------------------------------------------------------------------
       // Function to copy text to clipboard
        function copyTextToClipboard(text) {
          navigator.clipboard.writeText(text).then(function() {
              showCustomAlert("Text copied to clipboard: " + text);
          }).catch(function(err) {
              console.error("Error copying text: ", err);
          });
      }

      // Function to show the custom alert and auto-hide after 1 second
      function showCustomAlert(message) {
          var alertBox = document.getElementById("customAlert");
          alertBox.innerText = message; // Set the message text
          alertBox.style.display = "block"; // Show the alert

          // Hide the alert after 1 second (1000 milliseconds)
          setTimeout(function() {
              alertBox.style.display = "none"; // Hide the alert
          }, 2000);
      }

      // Get all elements with the class 'copyable'
      const copyableElements = document.querySelectorAll('.copyable');

      // Loop through all copyable elements and add a click event listener
      copyableElements.forEach(function(element) {
          element.addEventListener('click', function() {
              var text = this.innerText; // Get the text from the element
              copyTextToClipboard(text);
          });
      });
      //-------------------------------------------------------------------------

      

//Functions to change a texts
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