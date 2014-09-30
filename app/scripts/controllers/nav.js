
angular.module('frontendApp').controller('NavCtrl', function($scope, $location, $rootScope, SITE) {

    $scope.SITE = SITE;

    $scope.site = {
        area: SITE.BALLOT
    }
    $scope.atHome = function() {
        return ($location.path() === '/');
    }
    $scope.checkFor = function(loc) {
        return {
            selected: (loc === $scope.site.area)
        }
    }
    $rootScope.$on('$locationChangeStart', function(ev, next, current) {

        if (next.search( /\/browse/ ) != -1 || next.search( /\/myballot/ ) != -1) {
            $scope.site.area = SITE.BALLOT;
        }
        else if(next.search( /\/view_all/ ) != -1) {
            $scope.site.area = SITE.OREGON;
        }
        else {
            $scope.site.area = SITE.SEARCH;
        }
    })

}).constant('SITE', {
    'BALLOT': 1,
    'SEARCH': 2,
    'OREGON': 3
});
