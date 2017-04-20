import uirouter from 'angular-ui-router';
import './components/bootstrap/bootstrap.module';

angular
  .module('tgh', [
    uirouter,
    'tgh.component.bootstrap'
  ]);