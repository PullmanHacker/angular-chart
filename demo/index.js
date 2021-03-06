'use strict';

angular.module('angular-chart-demo', ['angularChart'])

.controller('IndexController', function($scope, $filter, $timeout) {

  $scope.types = [
    'line',
    'spline',
    'area',
    'area-spline',
    'step',
    'bar',
    'scatter'
  ];

  $scope.optionsShowcase = {
    rows: [{
      key: 'temp',
      color: '#F37934'
    }, {
      key: 'rain',
      type: 'bar',
      axis: 'y2',
      color: '#2C82C9'
    }, {
      key: 'raindays',
      show: false,
      color: '#553982'
    }],
    xAxis: {
      key: 'month'
    },
    legend: {
      selector: true
    },
    typeSelector: true
  };

  $scope.optionsStateful = {
    rows: [{
      key: 'temp',
      color: '#F37934'
    }, {
      key: 'rain',
      type: 'bar',
      axis: 'y2',
      color: '#2C82C9'
    }],
    xAxis: {
      key: 'month'
    },
    zoom: {
      range: [1, 3]
    },
    subchart: {
      show: true
    }
  };

  $scope.optionsInplace = {
    size: {
      height: 200
    },
    rows: [{
      key: 'temp',
      color: '#F37934'
    }, {
      key: 'rain',
      type: 'bar',
      axis: 'y2',
      color: '#2C82C9'
    }],
    xAxis: {
      key: 'month'
    },
    legend: {
      selector: true
    }
  };

  $scope.optionsSchema = {
    size: {
      height: 200
    },
    rows: [{
      key: 'temp',
      color: '#F37934'
    }, {
      key: 'rain',
      type: 'bar',
      axis: 'y2',
      color: '#2C82C9'
    }],
    xAxis: {
      key: 'month'
    },
    legend: {
      selector: true
    }
  };

  $scope.schemaSchema = window.dataArray[1].schema;
  delete $scope.schemaSchema.raindays;

  $scope.optionsCustomizable = {
    size: {
      height: 150
    },
    rows: [{
      key: 'temp',
      color: '#96281B'
    }, {
      key: 'rain',
      type: 'area',
      axis: 'y2',
      color: '#913D88'
    }],
    xAxis: {
      key: 'month'
    },
    legend: {
      show: false
    }
  };

  $scope.optionsRealtime = {
    size: {
      height: 200
    },
    rows: [{
      key: 'temp',
      color: '#F37934'
    }, {
      key: 'rain',
      type: 'bar',
      axis: 'y2',
      color: '#2C82C9'
    }],
    xAxis: {
      key: 'month'
    },
    legend: {
      selector: true
    },
    selection: {
      enabled: true
    }
  };

  $scope.optionsArray = window.optionsArray;
  $scope.exampleCategories = window.exampleCategories;

  $scope.schemaObject = window.dataArray[1].schema;
  $scope.dataObject = window.dataArray[1].data;
});
