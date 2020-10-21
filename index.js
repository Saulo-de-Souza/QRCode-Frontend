var content;
var text;
var valor = '';

window.onload = function (e) {
  content = document.getElementById('content');
  text = document.getElementById('text');

  new QRCode(content, {
    text: `09A-Beira linha x Várzea<br>
            09:00<br>
            10:00<br>
            11:00<br>
            12:00<br>`,

    width: 300,
    height: 300,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
};

function digit() {
  var key = window.event.keyCode;
  if (key === 13) {
   
  } else {
   
  }

  content.innerText = '';
  content.innerHtml = '';

  new QRCode(content, {
    text: text.value,
    width: 300,
    height: 300,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });


  console.log(valor);
}
