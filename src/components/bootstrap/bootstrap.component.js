export default class BootstrapComponent {
  constructor() {
    this.template = require('./bootstrap.component.html');
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