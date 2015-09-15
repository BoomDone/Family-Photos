(function() {
  'use strict';

  angular
      .module('photoTestApp')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
     {
      'location': 'MN',
      'people': [
        'Kristen',
        'Eevee'
      ],
      'eventItem':"ISU-Game",
      'date': 'September-2013',
      'imgSrc': 'kristenEeveeISu.jpg',
      'width':'683',
      'height':'1024'
    },
    {
      'location': 'MN',
      'people': [
        'Kristen',
        'Smokey'
      ],
      'eventItem':"New-Kitty",
      'date':"June-2012",
      'imgSrc': 'kristenSmokey.jpg',
      'width':'1024',
      'height':'683'
    },
    {
      'location': 'MN',
      'people': [
        'Bandit'
      ],
      'eventItem':"",
      'date':"November-2012",
      'imgSrc': 'bandit.jpg',
      'width':'1024',
      'height':'683'
    },
    {
      'location': 'Iowa',
      'people': [
        'Kristen',
        'Smokey',
        'Eevee',
        'Bandit',
        'Nick'
      ],
      'eventItem':"Christmas",
      'date':"December-2014",
      'imgSrc': 'christmas.jpg',
      'width':'683',
      'height':'1024'
    },
    {
      'location': 'Iowa',
      'people': [
        'Kyle',
        'Bandit',
        'Smokey'
      ],
      'eventItem':"",
      'date':"July-2012",
      'imgSrc': 'kylekitties.jpg',
      'width':'1024',
      'height':'683'
    }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
