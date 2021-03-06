
var formApp = angular.module('formApp', []);

formApp.controller("monControleur", function($scope) {
    $scope.signup = function() {
    if($scope.signupForm.lastname.$valid) {
        //Envoyer le formulaire au serveur.
    } else 
    if($scope.signupForm.lastname.$error.required) {
        alert("Le nom est obligatoire");
    } else if($scope.signupForm.lastname.$error.minlength ||
        $scope.signupForm.lastname.$error.maxlength) {
        alert("La taille du nom est invalide");
    }
    };
});
//
formApp.directive('equalsTo', [function () {
       /*
       * <input type="password" ng-model="Password" />
       * <input type="password" ng-model="ConfirmPassword" equals-to="Password" />
       */
       return {
           restrict: 'A', // S'utilise uniquement en tant qu'attribut
           scope: true,
           require: 'ngModel',
           link: function (scope, elem, attrs, control) {
               var check = function () {
               //Valeur du champs courant 
               var v1 = scope.$eval(attrs.ngModel); // attrs.ngModel = "ConfirmPassword"
               //valeur du champ à comparer
               var v2 = scope.$eval(attrs.equalsTo).$viewValue; // attrs.equalsTo = "Password"
               return v1 == v2;
           };

           scope.$watch(check, function (isValid) {
               // Défini si le champ est valide
               control.$setValidity("equalsTo", isValid);
           });
       }
   };
}]);
//
formApp.controller("MainController", function($scope) {
    $scope.employees = [];
    $scope.addEmployee = function() {
        $scope.employees.push({});
    }
    $scope.removeEmployee = function(employee) {
        var index = $scope.employees.indexOf(employee);
        $scope.employees.splice(index, 1);
    }
    $scope.submitEmployees = function() {
        if($scope.employeesForm.$valid) {
            // Envoi du formulaire au serveur
        }
    };
});