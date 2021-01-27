$(document).ready(function() {
    
    $('.game-icon').each(function(icon){
        var iconName = icon.data("icon-name");
        console.log("Icon Name: " + iconName);
    });
  });