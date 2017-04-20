import template from './footer.component.html';

export default class FooterComponent {
  constructor() {
    this.template = template;
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