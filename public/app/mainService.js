angular.module('you-tube-clone')
.service('mainService', function($http) {

this.broken = 'working'

  this.getTrending = () => {
    $http({
      method: 'GET',
      url:'/trending'
    }).then((response) => {
      return response;
    })
  }
})
