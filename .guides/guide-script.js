
window.addEventListener('codio-button-custom', function (ev) {
  
  if (codio) {
    codio.setButtonValue(ev.id, codio.BUTTON_STATE.PROGRESS, 'Checking');
    
    $.post(window.location.origin + ':9500/tests/testme', { name: "John", time: "2pm" }, function(data) {
      console.log(data);
      codio.setButtonValue(ev.id, codio.BUTTON_STATE.SUCCESS, 'Extremely well done!');
    });
    
  }
});

console.log('test.js script loaded');
