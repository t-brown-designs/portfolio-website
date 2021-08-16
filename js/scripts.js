console.log("Hello! Welcome to My World of Design")
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  x.className += ' responsive';
}
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
