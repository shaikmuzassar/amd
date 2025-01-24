<template>
  <v-dialog v-model="dialogModel" fullscreen persistent>
    <v-card>
  
        <v-card-title class="black white--text d-flex align-center" style="background-color: black;">
  <!-- Close Button -->
  <v-btn icon @click="closeModal" class="mr-2" style="background-color: black;">
    <v-icon color="white">mdi-close</v-icon>
  </v-btn>

  <!-- Title -->
  <span class="title flex-grow-1 text-truncate" style="color: white;">Complete Test Result</span>

  <!-- Action Buttons -->
  <div class="d-flex align-center">
    <v-btn icon @click="downloadResult" class="mr-2" style="background-color: black; margin-right: 100px !important;">
      <span style="color: white; white-space: nowrap;">COPY RESULT LINK</span>
    </v-btn>
    <v-btn icon @click="closeModal" style="background-color: black;">
      <span style="color: white; white-space: nowrap;">CLOSE</span>
    </v-btn>
  </div>
</v-card-title>
<div class="d-flex justify-end pa-4">
        <v-btn 
          @click="validateResult" 
          color="black"
        >
          <span class="white--text">MARK RESULT AS VALID</span>
        </v-btn>
      </div>
    
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <v-form id="frm" ref="updateForm">
            <v-row style="border: 1px solid #cccccc; margin: 1px">
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Name: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <div style="word-break: break-all">
                  {{ this.editedItem.name }}
                </div>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Group Name: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <div style="word-break: break-all">
                  {{ this.editedItem.groupName }}
                </div>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Test Type: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <label> {{ this.editedItem.benchmarkType }} </label>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Execution Id: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <label> {{ this.editedItem.benchmarkExecutionID }} </label>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Created Date: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <label> {{ this.editedItem.createdOn }} || "" </label>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Test Date: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <label> {{ this.editedItem.testDate }} || "" </label>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Owner: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <label> {{ this.editedItem.createdBy }} </label>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>CPU Model: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <label> {{ this.editedItem.modelCPUModel }} </label>
              </v-col>
              <v-col col="12" md="2" sm="12" class="cls infoStyle">
                <b>Custom Tag: </b>
              </v-col>
              <v-col col="12" md="4" sm="12" class="cls infoStyle">
                <label> {{ this.editedItem.customTag }} </label>
              </v-col>
              <v-col
                style="padding-left: 0px"
                col="12"
                md="12"
                sm="12"
                class="cls infoStyle"
              >
                <v-row style="margin: 0px">
                  <v-col col="12" md="2" sm="12" class="cls infoStyle">
                    <b>Published to EPYC Dashboard: </b>
                  </v-col>
                  <v-col
                    col="12"
                    md="4"
                    sm="12"
                    class="cls infoStyle"
                    style="margin-right: 7px"
                  >
                    <label> {{ this.editedItem.publishStatus }} </label>
                  </v-col>
                  <v-col
                    col="12"
                    md="2"
                    sm="12"
                    class="cls infoStyle"
                    style="margin-right: -10px"
                  >
                    <b>Logs: </b>
                  </v-col>
                  <v-col
                    col="12"
                    md="3"
                    sm="12"
                    class="cls infoStyle"
                    style="margin-left: 10px"
                  >
                    <v-icon class="mr-2" title="Download Logs">
                      mdi-download
                    </v-icon>
                    <v-icon class="mr-2" title="View Artifacts">
                      mdi-eye
                    </v-icon>
                    <v-icon title="Jenkins Execution Logs">
                      mdi-history
                    </v-icon>
                  </v-col>
                </v-row>
              </v-col>
              <!-- <v-col 

                            style="padding-left: 0px" col="12" md="12" sm="12" class="cls infoStyle">
                            <v-row style="margin: 0px">
                                <v-col col="12" md="2" sm="12" class="cls infoStyle">
                                    <b>Multiple SUT Used: </b>
                                </v-col>
                                <v-col col="12" md="4" sm="12" class="cls infoStyle">
                                    <label> {{ this.editedItem.isMultiSUTResult}}  </label>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <b>No. Of SUT(s):</b>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <label> {{ this.editedItem.multiSUTNodes}} </label>
                                </v-col>
                            </v-row>
                        </v-col> -->
              <!-- <v-col

                            style="padding-left: 0px" col="12" md="12" sm="12" class="cls infoStyle">
                            <v-row style="margin: 0px">
                                <v-col col="12" md="2" sm="12" class="cls infoStyle">
                                    <b>Multi Instance Used: </b>
                                </v-col>
                                <v-col col="12" md="4" sm="12" class="cls infoStyle">
                                    <label> {{ this.editedItem.isMultiInstanceResult }} </label>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <b>No. of Instance(s):</b>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <label> {{ this.editedItem.multiSUTNodes }}</label>
                                </v-col>
                            </v-row>
                        </v-col> -->
              <v-col
                col="12"
                md="12"
                sm="12"
                class="cls infoStyle"
                style="height: auto"
              >
                <v-row>
                  <v-col col="12" md="2" sm="12" class="cls infoStyle">
                    <b>Data Entitlement: </b>
                  </v-col>
                  <!-- <v-col col="12" :md="isEditData ? '3' : '10'" sm="12" class="cls infoStyle"> -->

                  <v-col col="12" md="4" sm="12" class="cls infoStyle">
                    <div>
                      <label>
                        {{ this.editedItem.dataEntitlementTagValue }}
                      </label>
                    </div>
                  </v-col>
                  <!-- <v-col v-if="showPTS" col="12" md="2" sm="12" class="cls infoStyle">
                                    <strong>PTS Report :</strong>
                                </v-col> -->
                  <!-- <v-col v-if="showPTS" col="12" md="1" sm="12" class="cls infoStyle">
                                    <v-icon  style="margin-left: 0px;">mdi-open-in-new</v-icon>
                                </v-col> -->
                </v-row>
                <!-- <v-row style="margin-top: -45px;">
                                <v-col col="12" md="11" sm="12" class="cls infoStyle"
                                    style="text-align: right;width: 100%;">
                                    <div>
                                        <span ><v-icon
                                                >mdi-pencil</v-icon></span>
                                        <span >
                                            <v-icon 
                                                style="margin-right: 10px;">mdi-cancel</v-icon>
                                            <v-icon>mdi-content-save</v-icon>
                                        </span>
                                    </div>
                                </v-col>
                            </v-row> -->
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>

      <v-row style="padding: 10px">
        <v-col md="12" style="background-color: #cccccc; margin-top: 15px">
          <h3>Platform Profile</h3>
        </v-col>
        <PlatformProfile :systemInfo="systemInfoData" />
      </v-row>
      <v-row>
        <v-row style="padding: 10px">
          <v-col md="12" style="background-color: #cccccc; margin-top: 15px">
            <h3>Run Configuration</h3>
          </v-col>
          <RunConfiguration :systemInfo="systemInfoData" />
        </v-row>
      </v-row>

      <v-row style="max-width: 100% !important;">
        <!-- <bar-chart-component :chartData="barChartData" /> -->
        <BarChartComponent />
        <CurrentTestTable :currentTestTableData="currentTestTableData" />
    </v-row>
        <v-row style="padding: 0px 15px">
          <v-col
            cols="12"
            md="12"
            sm="12"
            style="background-color: #cccccc; margin-top: 15px"
          >
            <h3>Average and Median Analysis</h3>
          </v-col>
          <AverageMeanMediantable
            :averageMEanMEdianTableData="averageMEanMEdianTableData"
          />
        </v-row>
  
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="closeModal">Cancel</v-btn>
        <v-btn color="primary" @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
 
  <script>
import PlatformProfile from './PlatformProfile.vue'
import RunConfiguration from './RunConfiguration.vue'
import BarChartComponent from './BarChartComponent.vue'
import CurrentTestTable from './CurrentTestTable.vue'
import AverageMeanMediantable from './AverageMeanMediantable.vue'
export default {
  name: 'EditModal',
  components: {
    PlatformProfile,
    RunConfiguration,
    BarChartComponent,
    CurrentTestTable,
    AverageMeanMediantable
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    editedItem: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      headers: [
        { title: 'Ittiration', key: 'itiration' },
        { title: 'Base', key: 'base' },
        { title: 'Peak', key: 'peak' },

        { title: 'Actions', key: 'actions', sortable: false }
      ],
      desserts: [{ itiration: '1', base: 250, peak: 150 }],
      search: '',
      barChartData: [64, 2, 2, 32, 8192], // Replace with dynamic data
      localEditedItem: {},
      systemInfoData: {
        CPU: {
          Architecture: 'x86_64',
          'Socket(s)': '2',
          'CPU(s)': 128,
          'Thread(s)PerCore': '2',
          'Core(s)PerSocket': '32',
          CPUMaxMHz: null,
          L3Cache: '8192K',
          Microcode: null
        },
        OS: {
          SystemType: 'server',
          HypervisorVendor: null,
          OperatingSystem: 'Ubuntu 18.04.2 LTS',
          Kernel: null,
          'NUMAnode(s)': '8'
        }
      },
      currentTestTableData: {
        ittiration: '1',
        base: '250',
        peak: '150'
      },
      averageMEanMEdianTableData: [
        {
          measures: 'Average',
          base: '250',
          peak: '150'
        },
        {
          measures: 'Median',
          base: '250',
          peak: '150'
        }
      ]
    }
  },

  computed: {
    dialogModel: {
      get() {
        return this.isOpen
      },
      set(value) {
        this.$emit('update:is-open', value)
      }
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        console.log('Modal Opened - All Props Data:', {
          editedItem: this.editedItem,
          isOpen: this.isOpen,
          editedItemName: this.editedItem.name
        })
        // For better formatted output in console
        console.log(
          'Edited Item Details:',
          JSON.stringify(this.editedItem, null, 2)
        )
      }
    },
    editedItem: {
      immediate: true,
      handler(newVal) {
        this.localEditedItem = { ...newVal }
      }
    }
  },

  methods: {
    save() {
      this.$emit('save', this.localEditedItem)
      this.dialogModel = false // Close modal after save
    },
    closeModal() {
      this.dialogModel = false
      this.$emit('update:is-open', false)
      this.$emit('cancel') // Emit cancel event
    },
    downloadResult() {
    
      this.$emit('download-result', this.editedItem)
    }
  }
}
</script>