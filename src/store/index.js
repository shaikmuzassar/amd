// store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    benchmarkName: 'Nginx',
    secondBenchmarkName: 'FFMPEG' // Add a new state for the second object
  },
  mutations: {
    updateBenchmarkName(state, newName) {
      state.benchmarkName = newName
    },
    updateSecondBenchmarkName(state, newName) {
      state.secondBenchmarkName = newName
    }
  }
})