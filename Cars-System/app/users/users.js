angular.module('carsSystem.users', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/users', {
      templateUrl: 'users/users.html',
      controller: 'UsersController'
    })
  }])
  .controller('UsersController', [
    '$scope',
    function UsersController ($scope) {
      $scope.cars = [
        {
          id: 1,
          date: Date.now() + 1,
          make: 'Maserati',
          model: 'Maserati NZ',
          image: 'http://images.dealer.com/ddc/resize/550x/quality/95/sharpen/1/ddc/ddc/vehicles/2017/Maserati/GranTurismo/Coupe/perspective/front-right/2015_64.png',
          owner: 'Bruce-Lee',
          description: 'Maserati (Italian pronunciation: [mazeˈraːti]) is an Italian luxury vehicle manufacturer established on 1 December 1914, in Bologna.[3] The Maserati tagline is "Luxury, sports and style cast in exclusive cars",[4] and the brand"s mission statement is to "Build ultra-luxury performance automobiles with timeless Italian style, accommodating bespoke interiors, and effortless, signature sounding power"',
          engine: '2.8 hp',
          price: '52000',
          comments: []
        },
        {
          id: 2,
          date: Date.now() + 2,
          make: 'Citroen',
          model: 'Citroen Aircross',
          owner: 'Bruce Wayne',
          image: 'http://www.telegraph.co.uk/cars/images/2015/12/22/citroen-aircross-front-xlarge_trans_NvBQzQNjv4BqQjz4tv7vNoeIix3_VaMcPAtoo0PEcXxdISGzgGOs6J4.jpg',
          description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW"s electric fleet "Project i" being marketed as a new sub-brand, BMW i. The 2015 model year BMW i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the United States Environmental Protection Agency cycle, the range in EV mode is 24 km (15 mi) with a small amount of gasoline consumption. Its design is heavily influenced by the M1 Hommage Concept car, which in turn pays homage to BMW"s last production sports car prior to the i8: the BMW M1.',
          engine: '2.8 hp',
          price: '125000',
          comments: []
        },
        {
          id: 3,
          date: Date.now() + 3,
          make: 'BMW',
          model: 'BMW 118i "Fashionista"',
          owner: 'Maria',
          image: 'http://4.bp.blogspot.com/-3p7nZ5LNTHc/Vd8YrxNq3gI/AAAAAAAAIAc/saP4UEtmfSU/s1600/BMW-118i-Fashionista.jpg',
          engine: '2.8 hp',
          description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW"s electric fleet "Project i" being marketed as a new sub-brand, BMW i. The 2015 model year BMW i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the United States Environmental Protection Agency cycle, the range in EV mode is 24 km (15 mi) with a small amount of gasoline consumption. Its design is heavily influenced by the M1 Hommage Concept car, which in turn pays homage to BMW"s last production sports car prior to the i8: the BMW M1.',
          price: '38000',
          comments: []
        },
        {
          id: 4,
          date: Date.now() + 4,
          make: 'Mercedes-Benz',
          model: 'Mercedes-Benz Passenger Cars',
          owner: 'Bruce Wayne',
          image: 'http://www.mercedes-benz.ie/content/media_library/hq/hq_mpc_reference_site/passenger_cars_ng/new_cars/models/c-class/c205/modelnavigation/core_navigation_flyout_mercedes-benz-c-class_c205_960x298_07-2015_jpg.object-Single-MEDIA.tmp/core_navigation_flyout_mercedes-benz-c-class-c205_960x298_07-2015.jpg',
          engine: '2.8 hp',
          description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW"s electric fleet "Project i" being marketed as a new sub-brand, BMW i. The 2015 model year BMW i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the United States Environmental Protection Agency cycle, the range in EV mode is 24 km (15 mi) with a small amount of gasoline consumption. Its design is heavily influenced by the M1 Hommage Concept car, which in turn pays homage to BMW"s last production sports car prior to the i8: the BMW M1.',
          price: '78000',
          comments: []
        },
        {
          id: 5,
          date: Date.now() + 5,
          make: 'Peugeot',
          model: 'Peugeot 3008 SUV',
          owner: 'Maria',
          image: 'http://media.peugeot.co.uk/image/96/8/3008-comparator.100968.100968.1.jpg?autocrop=1',
          engine: '2.8 hp',
          description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW"s electric fleet "Project i" being marketed as a new sub-brand, BMW i. The 2015 model year BMW i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the United States Environmental Protection Agency cycle, the range in EV mode is 24 km (15 mi) with a small amount of gasoline consumption. Its design is heavily influenced by the M1 Hommage Concept car, which in turn pays homage to BMW"s last production sports car prior to the i8: the BMW M1.',
          price: '26000',
          comments: []
        },
        {
          id: 6,
          date: Date.now() + 6,
          make: 'Mercedes',
          model: 'Mercedes-Benz CLA-class',
          owner: 'Al Bundy',
          image: 'http://buyersguide.caranddriver.com/media/assets/submodel/7605.jpg',
          engine: '2.8 hp',
          description: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW"s electric fleet "Project i" being marketed as a new sub-brand, BMW i. The 2015 model year BMW i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the United States Environmental Protection Agency cycle, the range in EV mode is 24 km (15 mi) with a small amount of gasoline consumption. Its design is heavily influenced by the M1 Hommage Concept car, which in turn pays homage to BMW"s last production sports car prior to the i8: the BMW M1.',
          price: '47000',
          comments: []
        },
        {
          id: 7,
          date: Date.now() + 7,
          make: 'Ferrari',
          model: 'Gallardo',
          owner: 'Robert de niro',
          image: 'http://static.corporate.ferrari.com/sites/ferrari15ipo/files/gallery-images/130011car-960x540_gxuqi9_0.jpg',
          engine: '2.8 hp',
          description: 'The Lamborghini Gallardo is a sports car built by Lamborghini from 2003 to 2013. It is Lamborghini"s best-selling model with 14,022 being built throughout its lifetime. Named after a famous breed of fighting bull, the V-10 Gallardo has been Lamborghini"s sales leader and stable-mate to a succession of V-12 flagship models—first to the Lamborghini Murciélago, then to the current flagship Lamborghini Aventador. On November 25, 2013, the last Gallardo was ..',
          price: '250000',
          comments: []
        }
      ]
    }])
