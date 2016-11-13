'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('barController', require('./controllers/bar.controller'))
        .controller('photoViewerContrloller', require('./controllers/photoViewer.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('pictureController', require('./controllers/picture.controller'))
        .directive('viewPictures', require('./directives/viewPictures.directive'))
        ;
