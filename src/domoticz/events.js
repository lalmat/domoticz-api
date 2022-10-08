function useEvents(domoticzApi) {
  return {
    /**
     * Retrieve all Domoticz Events
     */
    items() {
      return domoticzApi.events({
        param: "list",
      });
    },
  };
}

export { useEvents };
