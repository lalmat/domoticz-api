function useCameras(domoticzApi) {
  return {
    /**
     * Get all cameras informations
     */
    items() {
      return domoticzApi.cameras();
    },
  };
}

export { useCameras };
