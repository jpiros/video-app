function SearchBarCtrl() {
  var vm = this;

  vm.$onInit = function() {
    vm.message = "This is the search bar";
  }
}

angular
  .module('searchModule')
  .controller('SearchBarCtrl', SearchBarCtrl);