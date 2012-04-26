
window.onload = function() {

  var WIDTH = 1280, 
      HEIGHT = 800;

  // Initialize Crafty
  Crafty.init(WIDTH, HEIGHT);

  // Load first scene
  Crafty.scene("Loading");
  
  $(window).on('resize orientationchange', function(event) {

          var widthToHeight = WIDTH / HEIGHT;
          var newWidth = window.innerWidth;
          var newHeight = window.innerHeight - 54; // -54 header
          var newWidthToHeight = newWidth / newHeight;

          if (newWidthToHeight > widthToHeight) {
              newWidth = newHeight * widthToHeight;
          } else {
              newHeight = newWidth / widthToHeight;
          }

          var marginLeft = (window.innerWidth - newWidth) / 2;
          var fontSize = (newWidth / 1000) + "em";

          var $cr = $('#cr-stage');
          var $canvas = $cr.find('canvas');

          $canvas.css({ 'width': newWidth, 'height': newHeight, 'margin-left': marginLeft });
          $cr.css({ 'width': '100%', 'height': newHeight });
          $('body').css({ 'font-size': fontSize });

  });
  
  $(window).trigger('resize');

};