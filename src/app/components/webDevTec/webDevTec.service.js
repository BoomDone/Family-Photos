(function() {
  'use strict';

  angular
      .module('photoTestApp')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
     {
      'location': 'MN Home',
      'people': [
        'Kristen',
        'Eevee'
      ],
      'eventItem':"ISU Game",
      'date': 'September 2013',
      'imgSrc': 'kristenEeveeISu.jpg'
    },
    {
      'location': 'MN Home',
      'people': [
        'Kristen',
        'Smokey'
      ],
      'eventItem':"",
      'date':"June 2012",
      'imgSrc': 'kristenSmokey.jpg'
    },
    {
      'location': 'MN Home',
      'people': [
        'Bandit'
      ],
      'eventItem':"",
      'date':"November 2012",
      'imgSrc': 'bandit.jpg'
    },
    {
      'location': 'Iowa Home',
      'people': [
        'Kristen',
        'Smokey',
        'Eevee',
        'Bandit',
        'Nick'
      ],
      'eventItem':"Christmas",
      'date':"December 2014",
      'imgSrc': 'christmas.jpg'
    },
    {
      'location': 'Iowa Home',
      'people': [
        'Kyle',
        'Bandit',
        'Smokey'
      ],
      'eventItem':"",
      'date':"July 2012",
      'imgSrc': 'kylekitties.jpg'
    }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
