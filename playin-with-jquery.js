$(document).ready(function () {

    $('.box').click(function () {           //If you click on anywthing with a class of box
        var color = getRandomColor();       //Invokes the get random color function and stores the return value to the color variable
        $(this).css('background', color);   //changes the color of 'this'

    });

    
    //This function below is a random color generator I found on Stack Overflow
    function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//// Added jQuery UI ////
   $('.box').click(function() {    // click an element with 'box' class
       $(this).effect('bounce', {times:3}, 300);   // will bounce the box as it changes color
   });
   
////
  
  
  
  
  
});