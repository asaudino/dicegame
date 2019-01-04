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
      <div class="w3-col w3-margin-bottom">\
        <div class="w3-light-grey w3-border-black" style="text-align:center">\
          <div class="w3-black">What type of dice?</div>\
          <div class="w3-container">\
            <p>\
              <button id="id6dice" class="rollbutton w3-button w3-black w3-hover-dark-gray">d6</button>\
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
