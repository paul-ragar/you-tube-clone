angular.module('you-tube-clone')
.service('mainService', function($http) {

this.broken = 'working'

<<<<<<< HEAD
  this.getTrending = () => {
    return $http({
      method:'GET',
      url: '/trending'
    }).then((response) => {
      console.log(response);
      return response.data;
    })
  }

  this.newVideo = '';
=======
this.getTrending = () => {
  return $http({
    method:'GET',
    url: '/trending'
  }).then((response) => {
    console.log(response);
    return response.data;
  })
}
// this.getTrending();
>>>>>>> master
})
