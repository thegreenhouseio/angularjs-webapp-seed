import './header.component.scss';
import template from './header.component.html';

export default class HeaderComponent {
  constructor() {
    this.template = template;
    this.restrict = 'E';
  }
}