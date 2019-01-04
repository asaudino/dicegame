$(document).ready(function(){

  $('#mainpage').click(function(){
    w3_close();
  });

  $('#introimage').click(function(){
    // Crazy dice roll code by stackexchange user mellamokb
    // https://codegolf.stackexchange.com/questions/2602/draw-dice-results-in-ascii
    var r = Math.random()*6|0;s='-----\n|'+(r>0?'o ':'  ')+(r>2?'o':' ')+'|\n|'+(r-5?' ':'o');
    $('#introimage').html(s+(r%2?' ':'o')+s.split('').reverse().join(''));
  });

  $('#newgame').click(function(){
    $('#gamecontainer').html('\
        <div class="w3-light-grey w3-border-black" style="text-align:center">\
          <div class="w3-black">How many dice?</div>\
          <div class="w3-container">\
            <p>\
              <button id="1dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">1</button>\
              <button id="2dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">2</button>\
              <button id="3dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">3</button>\
              <button id="4dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">4</button>\
              <button id="5dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">5</button>\
              <button id="6dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">6</button>\
              <button id="7dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">7</button>\
              <button id="8dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">8</button>\
              <button id="9dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">9</button>\
              <button id="10dice" class="rollbutton w3-button w3-black w3-hover-dark-gray" style="margin-bottom: 5px;">10</button>\
            </p>\
            <p class="resulttext"></p>\
          </div>\
        </div>\
      </div>\
    ');
  }); //end newgame
}); //end document load

// Open and close sidebar
function w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
}

function w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
}
