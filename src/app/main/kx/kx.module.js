(function ()
{
    'use strict';

    angular
        .module('app.kx', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.kx', {
                url    : '/kx',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/kx/kx.html',
                        controller : 'KXController as vm'
                    }
                }
            });

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'KX',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.kx', {
            title    : 'KX',
            icon     : 'icon-tile-four',
            state    : 'app.kx',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();