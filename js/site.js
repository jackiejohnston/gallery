$(window).load(function() {
  // Initialize copy buttons:
  new Clipboard('.copy-this-label');
  // Initialize pop-overs & tooltips
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();

  anchors.options = {
    placement: 'left',
    visible: 'hover'
  }
  anchors.add("h2, h3");
  anchors.remove('.no-anchor');

  // Add active class to menu links when you are on the page:
  function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }
  var locationPage = stripTrailingSlash(window.location.pathname);
  $.each($('header nav').find('a'), function() {
    if ($(this).find('a')) {   
      var parser = document.createElement('a');
      parser.href = $(this).attr('href');
      if (stripTrailingSlash(parser.pathname) === locationPage) {
        $(this).addClass('active');
      }
    }
  });
  var dateNow = new Date();
  var yearNow = dateNow.getFullYear();
  $(".current-year").text(yearNow);

  // blur, darken and zoom hero image on scroll
  if ($(".hero").length) {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var imgFilter = "blur(" + (scroll/200) + "px) brightness(" + (100 - scroll/4) + "%)";
      $(".hero").css({
        "background-size": (100 + scroll/20)  + "%",
        "-webkit-filter": imgFilter,
        "filter": imgFilter
      });
    });
  }
  
});