<template>
    <div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :sort-by="[{ key: 'calories', order: 'asc' }]"
        :search="search"
        class="custom-table"
      >
        <template v-slot:item.index="{ index }">
          {{ index + 1 }}
        </template>
        <template v-slot:item.createdOn="{ item }">
          {{ formatDate(item.createdOn) }}
        </template>
        
        <template v-slot:item.actions="{ item }">
          <v-icon
            class="me-2"
            size="small"
            @click="editItem(item)"
          >
            mdi-book-cog-outline
          </v-icon>
          <v-icon
            size="small"
            @click="navigateToStart(item)"
          >
            mdi-play
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
  
      <EditModal
    :is-open.sync="dialog"
    :edited-item="editedItem"
    @save="saveItem"
    @cancel="handleCancel"
  />
    </div>
  </template>
  
  <script>
  import { data } from '../utils/data.js'
  import EditModal from './EditModal.vue'
  
  export default {
    name: 'BenchMark',
    components: {
      EditModal,
    },
    data: () => ({
      dialog: false,
      headers: [
        { title: '#', key: 'index', align: 'start', sortable: false },
        { title: 'Benchmark Category', key: 'benchmarkCategory' },
        { title: 'Benchmark', key: 'benchmarkType', width: '200px' },
        { title: 'CPU Model', key: 'cpuModel', width: '200px' },
        { title: 'No Of Sockets', key: 'platformProfile.Summary.CPU.Socket(s)', width: '200px' },
        { title: '# Of CPU Cores', key: 'platformProfile.Summary.CPU.Core(s)PerSocket', width: '200px' },
        { title: 'Run Name', key: 'name' },
        { title: 'OS', key: 'platformProfile.Summary.OS.OperatingSystem', width: '200px' },
        { title: 'Owner', key: 'tester' },
        { title: 'Date', key: 'createdOn', width: '150px' },
        { title: 'Result Type', key: 'resultType' },
        { title: 'Actions', key: 'actions', sortable: false }
      ],
      desserts: data,
      search: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        benchmarkType: '',
        benchmarkCategory: '',
        cpuModel: '',
        tester: ''
      }
    }),
  
    created() {
      this.initialize()
    },
  
    methods: {
      editItem(item) {
        console.log(item ,"item")
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = { ...item }
        this.dialog = true
      },
  
      saveItem(updatedItem) {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], updatedItem)
        }
        this.dialog = false
        this.editedItem = {
          name: '',
          benchmarkType: '',
          benchmarkCategory: '',
          cpuModel: '',
          tester: ''
        }
      },
      handleCancel() {
      this.dialog = false;
      this.editedItem = {
        name: '',
        benchmarkType: '',
        benchmarkCategory: '',
        cpuModel: '',
        tester: ''
      };
    },
      formatDate(date) {
        if (!date) return ''
        return date.split('T')[0]
      },
  
      navigateToStart() {
        this.$router.push('/start')
      },
  
      initialize() {
        this.desserts = data
      }
    }
  }
  </script>
  
  <style>
  .custom-table {
    width: 100%;
  }
  .v-data-table th:nth-child(3),
  .v-data-table th:nth-child(4),
  .v-data-table th:nth-child(5),
  .v-data-table th:nth-child(8),
  .v-data-table th:nth-child(6) {
    min-width: 200px;
  }
  .v-data-table th:nth-child(10) {
    min-width: 150px;
  }
  </style>