﻿(function () {

    angular
        .module("TripHorsePower", ["ngRoute"])
        .module("TripHorsePower", ["ng-Animate"])
        
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'images/img00.jpg', description: 'Image 00'},
            {image: 'images/img01.jpg', description: 'Image 01'},
            {image: 'images/img02.jpg', description: 'Image 02'},
            {image: 'images/img03.jpg', description: 'Image 03'},
            {image: 'images/img04.jpg', description: 'Image 04'}
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    });

})();