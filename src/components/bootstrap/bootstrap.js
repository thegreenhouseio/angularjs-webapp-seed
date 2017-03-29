export default class Bootstrap {
  //command = '';

  constructor(command){
    this.command = command || 'Worlddddd';
  }

  sayHello() {
    console.log(`hello ${this.command}!`);
  }

}