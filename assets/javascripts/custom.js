$(".thumbnail-image").click(function() {
  var image = "#" + $(this).attr("id") + "-main";
  $(".gallery-image").addClass("d-none");
  $(image).removeClass("d-none");
});

smartquotes();