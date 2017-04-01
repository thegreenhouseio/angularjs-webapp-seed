// import './header.component.scss';

export default class HomeComponent {
  constructor() {
    this.template = require('./home.component.html');
    this.restrict = 'E';
    this.controller = HomeComponentController;
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {};
  }
}

class HomeComponentController {
  constructor () {
    this.name = 'Owen';
  }
}