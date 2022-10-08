export default class {
  constructor(ApiBridge) {
    this.api = ApiBridge;
  }

  /**
   * Get all cameras informations
   */
  all() {
    return this.api.cameras();
  }

  get() {
    return this.all();
  }
}
