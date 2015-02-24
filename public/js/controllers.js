'use strict';
angular.module('controllers', []).controller('OverviewCtrl', ['$scope', function ($scope) {
    $scope.items = [{ 
        author_enc: 'alias1', 
        date: '2015-02-26', 
        notes:[
            {time:'18:00:00', text_enc:'adadad'},
            {time:'', text_enc:'asdasdasd'}
        ]
    }, { 
        author_enc: 'alias1', 
        date: '2015-02-27', 
        notes:[
            {time:'18:00:00', text_enc:'hello'}
        ]
    }];

    $scope.add = function(item, note) {
        item.notes.push({time:note.time, text_enc:note.text_enc});
        $scope.newNote = {};
    }
    $scope.addItem = function(item) {
        $scope.items.push({author_enc:item.author_enc, date: item.date, notes:[]});
        $scope.newItem = {};
    }
}]);