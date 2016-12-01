var Client = require('node-rest-client').Client;
var API_KEY = require('../config').API_KEY;

var client = new Client();

module.exports = {

    getTrending: function(req, res, next) {
        client.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=US&maxResults=25&key=${API_KEY}`, function(data, response) {
            res.status(200).json(data);
        });
    },

  // retrieve info for single video
  getVideoInfo: function(req,res,next) {
    var videoId = req.query.id;
    client.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`, function(data, response) {
      res.status(200).json(data);
    });
  },

  // retrieves comment thread for selected video
  getVideoComments: function(req,res,next) {
    var videoId = req.query.id;
    client.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=replies,snippet&order=relevance&key=${API_KEY}&videoId=${videoId}`, function(data, response) {
      res.status(200).json(data);
    });
  },

  // retrieves videos in a playList based on playList id
  getPlaylistVideos: function(req,res,next) {
    var playListId = req.query.id;
    client.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playListId}&key=${API_KEY}`, function(data, response) {
      res.status(200).json(data);
    });
  }

}
