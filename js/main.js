$(document).ready(function() {
    
    $('.game-icon').each(function(){
        var iconName = $(this).data("icon-name");
        console.log("Icon Name: " + iconName);
    });
  });