'use strict';
angular.module('controllers', []).controller('OverviewCtrl', ['$scope', 'Notes', function ($scope, Notes) {
    Notes.get(function(data) {
        $scope.items=data.response;
    },        function(error) {
        $scope.errorMsg=error.data.error;
    });
    $scope.add = function(item) {
        //item.notes.push({time:note.time, text_enc:note.text_enc});
        //$scope.newNote = {};
        //{author_enc:, date: item.date, notes:[]};
        var dateTime = new Date();
        var time = 
            ("0" + dateTime.getHours()).slice(-2) + ":" + 
            ("0" + dateTime.getMinutes()).slice(-2) + ":" + 
            ("0" + dateTime.getSeconds()).slice(-2);
        Notes.save({ 
            author_enc: item.author, 
            date: ''+ dateTime.toJSON().slice(0,10), 
            notes:[
                {time:time, text_enc:item.text}
            ]
        });
        Notes.get(function(data) {
            $scope.items=data.response;    
        });
        $scope.newItem={author:'', text:''};
    }

    $scope.addItem = function(item) {
        $scope.items.push({author_enc:item.author_enc, date: item.date, notes:[]});
        $scope.newItem = {};
    }
}]);