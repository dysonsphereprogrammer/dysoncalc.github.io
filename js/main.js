var iconPositionArray = {
  "dyson-sphere-component":"0px 0px",
  "smelter":"-64px 0px",
  "iron-ore":"-128px 0px",
  "copper-ore":"-192px 0px",
  "stone-ore":"-256px 0px",
  "coal-ore":"-320px 0px",
  "silicon-ore":"-384px 0px",
  "titanium-ore":"-448px 0px",
  "water":"-512px 0px",
  "crude-oil":"-576px 0px",
  "hydrogen":"-640px 0px",
  "deuterium":"-704px 0px",
  "antimatter":"-768px 0px",
  "kimberlite-ore":"-832px 0px",
  "iron-ingot":"-896px 0px",
  "copper-ingot":"-960px 0px"
};

$(document).ready(function() {
    
    $('.game-icon').each(function(){
        var iconName = $(this).data("icon-name");
        $(this).css('background-position', iconPositionArray[iconName]);
    });
  });