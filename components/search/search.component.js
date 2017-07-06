var search = {
  templateUrl: './components/search/search.html',
  controller: 'SearchCtrl',
  bindings: {}
}

angular
  .module('searchModule')
  .component('search', search);