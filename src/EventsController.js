export default class {
  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Retrieve all Domoticz Events
   */
  all() {
    return this.api.events({
      param: "list",
    });
  }

  /**
   * Only to not introduce breaking changes
   * @deprecated
   */
  get() {
    return this.all();
  }
}
