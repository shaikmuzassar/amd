import { ref } from 'vue'

export const useDialogStore = {
  state: ref({
    dialogContent: '',
    systemInfo: {},
    benchmarkParams: {}
  }),

  updateDialogContent(content) {
    this.state.value.dialogContent = content
  },

  updateSystemInfo(info) {
    this.state.value.systemInfo = info
  },

  updateBenchmarkParams(params) {
    this.state.value.benchmarkParams = params
  }
}