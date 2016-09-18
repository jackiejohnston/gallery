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


  // Build slideshow and open with image is clicked:
  var openPhotoSwipe = function(imageIndex, images) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = images;
    
    var options = {       
        index: imageIndex,
        galleryPIDs: true
    };
    
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  $(".gallery img").click(function() {
    var imageIndex = $(".gallery img").index(this);
    var images = [];
    $(".gallery img").each(function(i,ele) {
      var image = {
        src: $(this).attr("src"),
        title: $(this).attr("alt"),
        w: $(this).data("width"),
        h: $(this).data("height"),
        pid: $(this).attr("src").replace("/images/", "").replace(/\.[^.]*$/, "")
      };
      images.push(image);
    });
    openPhotoSwipe(imageIndex, images);
  });
  
});