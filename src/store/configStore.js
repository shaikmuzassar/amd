import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    ffmpegConfigurations: []
  }),
  actions: {
    addFFMPEGConfiguration(config) {
      this.ffmpegConfigurations.push(config)
    }
  }
})