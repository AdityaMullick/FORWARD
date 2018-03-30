$(document).ready(function() {
  $("#simple").click(function() {
    $("#tutorialPane").attr('src',"https://forward.ucsd.edu/tutorial/01-simple-html.html");
  });
  $("#visual").click(function() {
    $("#tutorialPane").attr('src',"https://forward.ucsd.edu/tutorial/02-visual-unit.html");
  });
  $("#dynamic").click(function() {
    $("#tutorialPane").attr('src',"https://forward.ucsd.edu/tutorial/03-dynamic-data.html");
  });
  $("#input").click(function() {
    $("#tutorialPane").attr('src',"https://forward.ucsd.edu/tutorial/04-user-input.html");
  });
  $("#parameters").click(function() {
    $("#tutorialPane").attr('src',"https://forward.uscd.edu/tutorial/05-url-parameters.html");
  });
  $("#singleBrowse").click(function() {
    $("#tutorialPane").attr('src',"https://forward.uscd.edu/tutorial/06-faceted-browsing-single-input.html");
  });
  $("#multipleBrowse").click(function() {
    $("#tutorialPane").attr('src',"https://forward.ucsd.edu/tutorial/07-faceted-browsing-multiple-inputs.html");
  });
});
