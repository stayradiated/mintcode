'use strict';

(function () {

  var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=stayradiated&api_key=64a766550a2c89e633fe7e919c2c7fbe&limit=2&format=json";

  $.get(url).then(function(response) {
    var track = response.recenttracks.track[0];
    var el = $('.lastfm-recent');
    el.find('.track').html(track.name);
    el.find('.artist').html(track.artist['#text']);
    el.show();
  });


}());
