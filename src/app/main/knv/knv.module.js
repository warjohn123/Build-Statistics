(function ()
{
    'use strict';

    angular
        .module('app.knv', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.knv', {
                url    : '/knv',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/knv/knv.html',
                        controller : 'KNVController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'KNV',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.knv', {
            title    : 'KNV',
            icon     : 'icon-tile-four',
            state    : 'app.knv',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();