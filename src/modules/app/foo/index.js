'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('barController', require('./controllers/bar.controller'))
        .controller('photoViewerContrloller', require('./controllers/photoViewer.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('pictureController', require('./controllers/picture.controller'))
        .directive('myDirective', require('./directives/myDirective.directive'))
        .directive('albumDirective', require('./directives/albumDirective.directive'))
        ;
