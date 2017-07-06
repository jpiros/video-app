function SearchCtrl() {
  var vm = this;

  vm.$onInit = function() {
    vm.message = 'This is search';
  }
}

angular
  .module('searchModule')
  .controller('SearchCtrl', SearchCtrl);