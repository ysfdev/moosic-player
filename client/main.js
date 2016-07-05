$(document).ready(function() {
    var clientID = '';
    var moodsUrls = {
        "coding" : 'https://soundcloud.com/dearmistermanager/sets/coding',
        "relaxing" : 'https://soundcloud.com/solopianomusic/soft-piano-2008-aug-18?in=solopianomusic/sets/soft-relax-meditation-solo-piano-diary2',
        "sleep" : 'https://soundcloud.com/relaxmeditation/sets/meditation-of-the-heart',
        "meditation" : 'https://soundcloud.com/relaxmeditation/sets/meditation-of-the-heart'
    };
    var mood = "";

    //Initialize soundcloud
    SC.initialize({
      client_id: clientID
    });
    //When "moods selection" clicked
    $('#moods').on('click', 'option', function(){
        mood = $(this).val();
        updatePlayer(mood);
    });

    var updatePlayer = function( userMood ) {
        var trackUrl = moodsUrls[userMood];
        /*
        var playerIframe = document.getElementById("player-iframe");
        var widget = SC.Widget(playerIframe.id)
        SC.Widget.load(trackUrl, { auto_play: true }).then(function(player) {
            console.log("SC widget: ", player)
        });
        */
        SC.oEmbed(trackUrl, { auto_play: true }).then(function(oEmbed) {
          console.log('oEmbed response: ', oEmbed);
          $("#player").html(oEmbed.html);
          $("#player-mood-info").text(": playing " + mood + " music");
        });

    }

});
