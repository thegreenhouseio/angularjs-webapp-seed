export default function BootstrapRun($location, $log, $rootScope) {
  'ngInject';

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
    const page = $location.url();

    $log.debug(`navigation start from page => ${page}`, fromState);
  });

  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    const page = $location.url();

    $log.debug(`navigation success to page => ${page}`, toState);
  });

}