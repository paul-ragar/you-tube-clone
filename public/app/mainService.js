angular.module('you-tube-clone')
.service('mainService', function($http, $state) {

this.broken = 'working'

  this.getTrending = () => {
    return $http({
      method:'GET',
      url: '/api/trending'
    }).then((response) => {
      // console.log(response);
      return response.data;
    })
  }
  this.singleVid = [];
  this.passVideo = (video) => {
    this.singleVid[0] = video;
  }

  this.getVideoInfo = (id) => {
    console.log('Id from the service' + id);
    return $http({
      method: 'GET',
      url: `/api/watch/?id=${id}`
    }).then((response) => {
      return response.data;
    })
  }

  this.getComments = (id) => {

    return $http({
      method: 'GET',
      url: `/api/comments/?id=${id}`
    }).then((response) => {

      return response.data;
    })
  }

  this.getSearchResults = (searched) => {
    searched = searched.replace(/ /g,"%20");
    return $http({
      method: 'GET',
      url: '/api/search?searched=' + searched
    }).then((response) => {
      console.log("From the mainService: ",response.data);
      return response.data;
    })
  }

})
