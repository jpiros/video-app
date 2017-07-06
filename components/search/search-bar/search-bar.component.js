var searchBar = {
  templateUrl: './components/search/search-bar/search-bar.html',
  controller: 'SearchBarCtrl',
  bindings: {}
}

angular
  .module('searchModule')
  .component('searchBar', searchBar);