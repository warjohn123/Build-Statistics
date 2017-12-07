(function () {
    'use strict';

    angular.module('app.knv')
        .controller('ArchiveDialogController', ArchiveDialogController);

    /** @ngInject */
    function ArchiveDialogController($mdDialog) {
        var vm = this;
        vm.closeDialog = closeDialog;

        vm.dialogTitle = "Archive";
        vm.message = 'Are you sure you want to archive this item?';

        function closeDialog() {
            $mdDialog.hide();
        }

    }
})();
