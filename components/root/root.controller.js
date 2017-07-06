function RootCtrl() {
  var vm = this;

  vm.$onInit = function() {
    vm.message = "This is the root";
  }
}

angular
  .module('youtubeApp')
  .controller('RootCtrl', RootCtrl);

