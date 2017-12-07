(function ()
{
    'use strict';

    angular
        .module('app.knv')
        .controller('KNVController', KNVController);

    /** @ngInject */
    function KNVController($mdDialog, $document)
    {
        var vm = this;

        // Data
        // vm.helloText = SampleData.data.helloText;

        // Methods
        vm.archive = archive;

        function archive() {
            $mdDialog.show({
                    controller: 'ArchiveDialogController',
                    controllerAs: 'vm',
                    templateUrl: 'app/main/knv/dialogs/archive-dialog.html',
                    parent: angular.element($document.body),
                    clickOutsideToClose: true
                });

        }

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
