const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission behavior

    // validate username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'adam' && password === '1012') {
      window.location = "home.html";
      alert('Welcome Back, Adam')

    } else if (username === 'keith' && password === '2474') {
      window.location = "home.html";
      alert('Welcome Back, Keith')
    
    } else if (username === 'faye' && password === '1886') {
      window.location = "home.html";
      alert('Welcome Back, Faye')

    } else if (username === 'guest' && password === 'guest') {
      alert('Welcome Back, Guest')
      window.location = "home.html";

    } else if (username === 'sysadmin' && password === '1886wysiwyG') {
      window.location = "home.html";
      alert('Welcome Back, sysadmin')

    } else if (username === 'technician' && password === '1886wysiwyG') {
      window.location = "home.html";
      alert('Welcome Back, technician')

    } else {
        alert('Username or password incorrect. Please try again.');
    }
});
