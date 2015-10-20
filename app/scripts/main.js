WebFontConfig = {

  google: { families: [ 'Open+Sans:300|Noto+Serif:300&subset=vietnamese,latin-ext' ] },
  custom: { families: [ 'FontAwesome'],
  urls: [ 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css' ] }

};

(function() {

  var wf = document.createElement('script');

  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +

    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';

  wf.type = 'text/javascript';

  wf.async = 'true';

  var s = document.getElementsByTagName('script')[0];

  s.parentNode.insertBefore(wf, s);

})(); 