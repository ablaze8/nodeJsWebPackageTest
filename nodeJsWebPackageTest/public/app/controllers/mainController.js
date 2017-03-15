app.controller('mainController', function ($scope) {

    $scope.newFruit = '';

    function myFruit() {
        this.id = -1;
        this.name = '';
    }

    var apple = new myFruit();
    apple.id = 1;
    apple.name = 'apple';

    var orange = new myFruit();
    orange.id = 2;
    orange.name = 'orange';

    var mango = new myFruit();
    mango.id = 3;
    mango.name = 'mango';

    $scope.fruits = [apple, orange, mango];

    $scope.addFruit = function () {
        console.log('Add Fruit clicked for: ', $scope.newFruit);
        var newFruit = new myFruit();
        newFruit.id = ($scope.fruits[$scope.fruits.length - 1].id) + 1;
        newFruit.name = $scope.newFruit;
        $scope.fruits.push(newFruit);
    };

    $scope.deleteFruit = function (id) {
        var deleteIndex = undefined;
        angular.forEach($scope.fruits, function (value, key) {
            if (value.id == id) {
                deleteIndex = key;
            }
        });
        $scope.fruits.splice(deleteIndex, 1);
    }
});