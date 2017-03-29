export default class BootstrapComponent {
  constructor() {
    this.template = '<div>{{vm.name}}</div>';
    this.restrict = 'E';
    this.controller = BoostrapComponentController;
    this.controllerAs = 'vm';
    this.bindToController = true;
  }
}


class BoostrapComponentController {
  constructor () {
    this.name = 'Owen';
  }
}