function useScenes(domoticzApi) {
  return {
    /**
     * Get all the Domoticz"s scenes
     */
    items() {
      return domoticzApi.scenes();
    },

    /**
     * Switch a state into a specific state
     *
     * @param {int} idx : Domoticz index of the device
     * @param {string} command : string of the state, ex: 'Off'
     */
    switch(idx, command) {
      return domoticzApi.command({
        param: "switch",
        idx,
        switchcmd: command,
      });
    },

    /**
     * Toggle a device (ex: On/Off
     *
     * @param {int} idx : Domoticz index of the device
     */
    toggle(idx) {
      return this.switch(idx, "Toggle");
    },
  };
}
export { useScenes };
