function autoPlayYouTube() {
  $('.modal--youtube').on('shown.bs.modal', function() {
    var iframe = $('iframe', this);

    iframe[0].contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'playVideo',
      args: ''
    }), '*');
  }).on('hidden.bs.modal', function() {
    var iframe = $('iframe', this);

    iframe[0].contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'pauseVideo',
      args: ''
    }), '*');
  });
}

autoPlayYouTube();
