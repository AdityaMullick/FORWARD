$(document).ready(function() {
  $("#simple").click(function() {
    $("#tutorialPane").attr('src',"https://forward.ucsd.edu/tutorial/01-simple-html.html");
  });
  $("#visual").click(function() {
    $("#tutorialPane").attr('src',"visual.html");
  });
  $("#dynamic").click(function() {
    $("#tutorialPane").attr('src',"dynamic.html");
  });
  $("#input").click(function() {
    $("#tutorialPane").attr('src',"user-input.html");
  });
  $("#parameters").click(function() {
    $("#tutorialPane").attr('src',"");
  });
  $("#singleBrowse").click(function() {
    $("#tutorialPane").attr('src',"");
  });
  $("#multipleBrowse").click(function() {
    $("#tutorialPane").attr('src',"");
  });
});
