export class Store {
  constructor(key) {
    this.key = key;
  }

  setItem(value) {
    window.localStorage.setItem(this.key, JSON.stringify(value));
  }

  getItem() {
    const valueString = window.localStorage.getItem(this.key);
    return JSON.parse(valueString);
  }
}
