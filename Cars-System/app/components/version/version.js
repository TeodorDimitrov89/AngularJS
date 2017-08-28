'use strict'

angular.module('carsSystem.version', [
  'carsSystem.version.interpolate-filter',
  'carsSystem.version.version-directive'
])

  .value('version', '0.1')
