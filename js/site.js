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

  // Add active class to menu links when you are on the page:
  function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }
  var locationPage = stripTrailingSlash(window.location.pathname);
  $.each($('header .nav').find('li'), function() {
    if ($(this).find('a')) {   
      var parser = document.createElement('a');
      parser.href = $(this).find('a').attr('href');
      if (stripTrailingSlash(parser.pathname) === locationPage) {
        $(this).addClass('active');
      }
    }
  });
  
});