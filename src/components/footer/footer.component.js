export default class FooterComponent {
  constructor() {
    this.template = require('./footer.component.html');
    this.restrict = 'E';
    this.controller = FooterComponentController;
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {};
  }
}

class FooterComponentController {
  constructor () {
    this.year = new Date().getFullYear();
  }
}