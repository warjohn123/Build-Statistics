(function ()
{
    'use strict';

    angular
        .module('app.kx')
        .controller('KXController', KXController);

    /** @ngInject */
    function KXController()
    {
        var vm = this;

        // Data
        // vm.helloText = SampleData.data.helloText;

        // Methods

        vm.builds = [
            {
                date: 'test',
                version: 'test',
                model: 'test',
                changelist: 'test',
                requestemail: 'test',
                startemail: 'test',
                requestloc: 'test',
                finishedloc: 'test',
                completed: 'test',
                totalbuildtime: 'test'
            },
            {
                date: 'test',
                version: 'test',
                model: 'test',
                changelist: 'test',
                requestemail: 'test',
                startemail: 'test',
                requestloc: 'test',
                finishedloc: 'test',
                completed: 'test',
                totalbuildtime: 'test'
            },
            {
                date: 'test',
                version: 'test',
                model: 'test',
                changelist: 'test',
                requestemail: 'test',
                startemail: 'test',
                requestloc: 'test',
                finishedloc: 'test',
                completed: 'test',
                totalbuildtime: 'test'
            }
        ]

        //////////
    }
})();
