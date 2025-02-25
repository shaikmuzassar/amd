<template>
  <div class="container-1">
    <v-select
      v-model="itemsPerPage"
      class="items-per-page"
      density="compact"
      :items="[5, 10, 15, 20]"
      label="Records per page"
      variant="outlined"
    ></v-select>
    <v-text-field
      v-model="search"
      class="search-bar"
      density="compact"
      label="Search key words"
      variant="outlined"
      clearable
    ></v-text-field>
    <v-btn width="110" color="black" class="Search-btn" @click="performSearch">
      <v-icon left>mdi-magnify</v-icon>
      Search
    </v-btn>
    <v-select
      v-model="value"
      :items="items"
      density="compact"
      label="Custom Headers"
      variant="outlined"
      multiple
      style="
        padding-left: 1rem;
        padding-right: 1rem;
        max-width: 300px !important;
        min-width: 100px !important;
      "
    >
      <template v-slot:selection="{ item, index }">
        <div v-if="index === 0" class="selected-chip">
          <v-chip color="primary" size="small">{{ item.title }}</v-chip>
          <span v-if="value.length > 1" class="others">
            (+{{ value.length - 1 }} others)</span
          >
        </div>
      </template></v-select
    >
    <v-btn width="130" color="black" class="btn"> COMPARE 0/4 </v-btn>
    <v-btn width="90" color="black" class="btn"> RESET </v-btn>
    <v-btn width="30" color="black" class="btn">
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
  </div>

  <!--Expansion Panel-->
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span class="custom-title">FILTERS</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="filters">
            <div class="row-1">
              <v-select
                density="compact"
                label="Benchmarks Category"
                variant="outlined"
                v-model="filterState.benchmarkCategory"
                :items="benchmarkCategories"
              ></v-select>
              <v-select
                density="compact"
                label="Manufacturer"
                variant="outlined"
              ></v-select>
              <div class="date">
                <v-text-field
                  density="compact"
                  class="textarea-width date-input"
                  type="date"
                  v-model="filterState.startDate"
                  label="Select Start Date"
                  variant="outlined"
                  :error-messages="dateErrors.startDate"
                ></v-text-field>
                <v-text-field
                  density="compact"
                  class="textarea-width date-input"
                  type="date"
                  v-model="filterState.endDate"
                  label="Select End Date"
                  variant="outlined"
                  :error-messages="dateErrors.endDate"
                ></v-text-field>
              </div>
              <v-select
                density="compact"
                label="Sort Field"
                variant="outlined"
                v-model="filterState.sortField"
                :items="sortFields"
              ></v-select>
            </div>
            <div class="row-2">
              <v-select
                density="compact"
                label="Select Benchmark"
                variant="outlined"
              ></v-select>
              <v-select
                density="compact"
                label="Run Category"
                variant="outlined"
              ></v-select>
              <v-select
                density="compact"
                label="Cores"
                variant="outlined"
              ></v-select>
              <v-select
                density="compact"
                label="Sort Direction"
                variant="outlined"
                v-model="filterState.sortDirection"
                :items="sortDirections"
              ></v-select>
            </div>
            <div class="row-3">
              <v-select
                density="compact"
                label="Select OS"
                variant="outlined"
                v-model="filterState.os"
                :items="availableOSOptions"
              ></v-select>
              <v-select
                density="compact"
                label="Custom Tag"
                variant="outlined"
              ></v-select>
              <v-text-field
                density="compact"
                label="No of Sockets"
                variant="outlined"
              ></v-text-field>
              <v-select
                density="compact"
                label="Data Entitlement"
                variant="outlined"
              ></v-select>
            </div>
            <div class="row-4">
              <v-select
                density="compact"
                label="Select CPU"
                variant="outlined"
              ></v-select>
              <v-text-field
                density="compact"
                label="Owner"
                variant="outlined"
              ></v-text-field>
              <v-text-field
                density="compact"
                label="Numa Nodes"
                variant="outlined"
              ></v-text-field>
              <div class="sut-numa">
                <v-select
                  density="compact"
                  label="SUT Type"
                  variant="outlined"
                ></v-select>
                <v-select
                  density="compact"
                  label="Nodes"
                  variant="outlined"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="row-5">
            <v-select
              density="compact"
              label="Data Source"
              variant="outlined"
            ></v-select>
          </div>
          <div class="row-6">
            <v-btn
              width="130"
              color="black"
              class="apply-btn"
              @click="applyFilters"
            >
              APPLY
            </v-btn>
            <v-btn
              width="150"
              color="black"
              class="rst-filtr-btn"
              @click="resetFilters"
            >
              RESET FILTERS
            </v-btn>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!--Data Table-->
    <div>
      <v-data-table
        :items="filteredConsoles"
        :headers="visibleHeaders"
        :items-per-page="itemsPerPage"
        class="custom-table"
        hide-default-footer
      >
        <template v-slot:item.exclusive="{ item }">
          <v-checkbox-btn
            :model-value="item.exclusive"
            @click="toggleExclusive(item)"
          ></v-checkbox-btn>
        </template>
        <!-- Action Column with Icon -->
        <template v-slot:item.action="{ item }">
          <v-icon class="action-icon" @click="performAction(item)">
            mdi-book-cog-outline
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      itemsPerPage: 10,
      filteredConsoles: [], // New property to store filtered results
      value: [], // Selected headers
      defaultColumns: [
        "Benchmark_Category",
        "Benchmark",
        "CPU_Model",
        "action",
      ],
      items: [
        // Available headers to select from
        {
          title: "Benchmark Category",
          value: "Benchmark_Category",
          disabled: true,
        },
        { title: "Benchmark", value: "Benchmark", disabled: true },
        { title: "CPU Model", value: "CPU_Model", disabled: true },
        { value: "action", title: "Action", disabled: true },
        { title: "No of Sockets", value: "no_of_sockets" },
        { title: "# of CPU Cores", value: "of_CPU_Cores" },
        { title: "Run Name", value: "Run_Name" },
        { title: "OS", value: "OS" },
        { title: "Date", value: "date" },
        { title: "Result Type", value: "result" },
      ],
      allHeaders: [
        { key: "exclusive", title: " " }, // Checkbox column always visible
        { key: "Benchmark_Category", title: "Benchmark Category" },
        { key: "Benchmark", title: "Benchmark" },
        { key: "CPU_Model", title: "CPU Model" },
        { key: "no_of_sockets", title: "No of Sockets" },
        { key: "of_CPU_Cores", title: "# of CPU Cores" },
        { key: "Run_Name", title: "Run Name" },
        { key: "OS", title: "OS" },
        { key: "date", title: "Date" },
        { key: "result", title: "Result Type" },
        { key: "action", title: "Action" }, // Action column always visible
      ],
      consoles: [
        {
          exclusive: false,
          Benchmark_Category: "SPEC",
          Benchmark: "SPEC-CPU-2017",
          CPU_Model: 7501,
          no_of_sockets: 2,
          of_CPU_Cores: 64,
          Run_Name:
            "Benchmark_Test_SPEC-CPU-2017_externalsource@spec.com_01-01-2098_45595719",
          OS: "Ubuntu 18.04.2 LTS",
          owner: "externalsource@spec.com",
          date: "1/1/2098",
          result: "MANUAL",
        },
        {
          exclusive: false,
          Benchmark_Category: "Web",
          Benchmark: "Nginx",
          CPU_Model: 9655,
          no_of_sockets: 2,
          of_CPU_Cores: 192,
          Run_Name: "Benchmark_Test_Nginx_127910_run_1_Ubuntu 22.04.2 LTS",
          OS: "Ubuntu 18.04.2 LTS",
          owner: "keerthana.sanala@amd.com",
          date: "2/18/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 256,
          Run_Name: "zentorch_multimodel_test_thudm-chatglm3-6b_7",
          OS: "Ubuntu 24.04 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/18/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 256,
          Run_Name: "zentorch_multimodel_test_Meta-Llama-3-8B_6",
          OS: "Ubuntu 24.04 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/17/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 256,
          Run_Name: "zentorch_multimodel_test_Llama-3.2-3B_4",
          OS: "Ubuntu 18.04.2 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/17/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 256,
          Run_Name: "zentorch_multimodel_test_Llama-3.2-1B_3",
          OS: "Ubuntu 24.04 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/17/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 256,
          Run_Name: "zentorch_multimodel_test_Llama-2-13b-hf_2",
          OS: "Ubuntu 24.04 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/17/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 1,
          Run_Name: "Benchmark_Test_SPEC-CPU- 2017_130210_1_run_1",
          OS: "Ubuntu 24.04 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/17/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 256,
          Run_Name: "zentorch_multimodel_test_Llama-3.2-1B_3",
          OS: "Ubuntu 24.04 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/17/2025",
          result: "AUTOMATED",
        },
        {
          exclusive: false,
          Benchmark_Category: "AI-ML",
          Benchmark: "ZenTorch",
          CPU_Model: 9755,
          no_of_sockets: 2,
          of_CPU_Cores: 256,
          Run_Name: "zentorch_multimodel_test_Llama-3.2-1B_8",
          OS: "Ubuntu 24.04 LTS",
          owner: "joyel.dsilva@amd.com",
          date: "2/17/2025",
          result: "AUTOMATED",
        },
      ],
      filterState: {
        benchmarkCategory: null,
        manufacturer: null,
        startDate: null,
        endDate: null,
        sortField: null,
        benchmark: null,
        runCategory: null,
        cores: null,
        sortDirection: null,
        os: null,
        customTag: null,
        noOfSockets: null,
        dataEntitlement: null,
        cpu: null,
        owner: null,
        numaNodes: null,
        sutType: null,
        nodes: null,
        dataSource: null,
      },
      // Date validation
      dateErrors: {
        startDate: '',
        endDate: ''
      },

      // OS options - can be expanded based on your needs
      osOptions: [
        'Ubuntu 18.04.2 LTS',
        'Ubuntu 22.04.2 LTS',
        'Ubuntu 24.04 LTS',
        'All'
      ],
    };
  },
  computed: {
    allColumnKeys() {
      return this.allHeaders
        .filter(
          (header) => header.key !== "exclusive" && header.key !== "action"
        )
        .map((header) => header.key);
    },
    visibleHeaders() {
      // Get checkbox column
      const checkboxColumn = this.allHeaders.filter(
        (header) => header.key === "exclusive"
      );

      // Get action column
      const actionColumn = this.allHeaders.filter(
        (header) => header.key === "action"
      );

      // Get default columns (excluding action)
      const defaultColumns = this.allHeaders.filter(
        (header) =>
          this.defaultColumns.includes(header.key) && header.key !== "action"
      );

      // Get additional selected columns
      const selectedColumns = this.allHeaders.filter(
        (header) =>
          !this.defaultColumns.includes(header.key) &&
          header.key !== "action" &&
          header.key !== "exclusive" &&
          this.value.includes(header.key)
      );

      // Combine all columns with action at the end
      return [
        ...checkboxColumn,
        ...defaultColumns,
        ...selectedColumns,
        ...actionColumn,
      ];
    },
    // Add computed properties for select options
    benchmarkCategories() {
      return this.getUniqueValues("Benchmark_Category");
    },
    benchmarks() {
      return this.getUniqueValues("Benchmark");
    },
    cpuModels() {
      return this.getUniqueValues("CPU_Model");
    },
    osList() {
      return this.getUniqueValues("OS");
    },
    sortFields() {
      return [
        { text: "Benchmark Category", value: "Benchmark_Category" },
        { text: "Benchmark", value: "Benchmark" },
        { text: "CPU Model", value: "CPU_Model" },
        { text: "Date", value: "date" },
        { text: "Cores", value: "of_CPU_Cores" },
      ];
    },
    sortDirections() {
      return [
        { text: "Ascending", value: "asc" },
        { text: "Descending", value: "desc" },
      ];
    },
    // Enhanced date validation
    isDateRangeValid() {
      if (!this.filterState.startDate || !this.filterState.endDate) return true;
      return new Date(this.filterState.startDate) <= new Date(this.filterState.endDate);
    },

    // Get unique OS values from data
    availableOSOptions() {
      const uniqueOS = [...new Set(this.consoles.map(item => item.OS))];
      return ['All', ...uniqueOS];
    },

    // Format dates for display
    formattedDateRange() {
      if (!this.filterState.startDate || !this.filterState.endDate) return '';
      return `${this.formatDate(this.filterState.startDate)} - ${this.formatDate(this.filterState.endDate)}`;
    },
  },
  watch: {
    // Watch for changes in value and ensure default columns remain selected
    value(newValue) {
      // Ensure all default columns are always included
      const missingDefaults = this.defaultColumns.filter(
        (col) => !newValue.includes(col)
      );
      if (missingDefaults.length > 0) {
        this.value = [...newValue, ...missingDefaults];
      }
    },
    'filterState.startDate'() {
      this.handleDateChange();
    },
    'filterState.endDate'() {
      this.handleDateChange();
    },
    // Watch for OS changes
    'filterState.os'(newValue) {
      this.handleOSChange(newValue);
    }
  },
  created() {
    this.filteredConsoles = [...this.consoles];
    // Initialize with all columns selected
    this.value = [...this.allColumnKeys];
  },
  methods: {
    toggleExclusive(item) {
      item.exclusive = !item.exclusive;
    },
    performAction(item) {
      console.log("Action performed on:", item);
      alert(`Action triggered for ${item.Benchmark}`);
    },
    performSearch() {
      if (!this.search.trim()) {
        // If search is empty, show all results
        this.filteredConsoles = [...this.consoles];
        return;
      }

      // Convert search term to lowercase for case-insensitive search
      const searchTerm = this.search.toLowerCase();

      // Search across multiple fields
      this.filteredConsoles = this.consoles.filter((item) => {
        return (
          item.Benchmark_Category.toLowerCase().includes(searchTerm) ||
          item.Benchmark.toLowerCase().includes(searchTerm) ||
          item.Run_Name.toLowerCase().includes(searchTerm) ||
          item.OS.toLowerCase().includes(searchTerm) ||
          item.result.toLowerCase().includes(searchTerm) ||
          String(item.CPU_Model).toLowerCase().includes(searchTerm) ||
          String(item.of_CPU_Cores).toLowerCase().includes(searchTerm)
        );
      });
    },
    applyFilters() {
      let filtered = [...this.consoles];

      // Filter by benchmark category
      if (this.filterState.benchmarkCategory) {
        filtered = filtered.filter(
          (item) =>
            item.Benchmark_Category === this.filterState.benchmarkCategory
        );
      }

      // Filter by benchmark
      if (this.filterState.benchmark) {
        filtered = filtered.filter(
          (item) => item.Benchmark === this.filterState.benchmark
        );
      }

      // Filter by CPU model
      if (this.filterState.cpu) {
        filtered = filtered.filter(
          (item) => String(item.CPU_Model) === String(this.filterState.cpu)
        );
      }

      // Filter by OS
      if (this.filterState.os) {
        filtered = filtered.filter((item) => item.OS === this.filterState.os);
      }

      // Filter by number of sockets
      if (this.filterState.noOfSockets) {
        filtered = filtered.filter(
          (item) =>
            item.no_of_sockets === parseInt(this.filterState.noOfSockets)
        );
      }

      // Filter by cores
      if (this.filterState.cores) {
        filtered = filtered.filter(
          (item) => item.of_CPU_Cores === parseInt(this.filterState.cores)
        );
      }

      // Filter by owner
      if (this.filterState.owner) {
        filtered = filtered.filter(
          (item) => item.owner === this.filterState.owner
        );
      }

      // Filter by date range
      if (this.filterState.startDate && this.filterState.endDate) {
        const start = new Date(this.filterState.startDate);
        const end = new Date(this.filterState.endDate);
        filtered = filtered.filter((item) => {
          const itemDate = new Date(item.date);
          return itemDate >= start && itemDate <= end;
        });
      }

      // Apply sorting
      if (this.filterState.sortField && this.filterState.sortDirection) {
        filtered.sort((a, b) => {
          const aValue = a[this.filterState.sortField];
          const bValue = b[this.filterState.sortField];

          if (this.filterState.sortDirection === "asc") {
            return aValue > bValue ? 1 : -1;
          } else {
            return aValue < bValue ? 1 : -1;
          }
        });
      }

      this.filteredConsoles = filtered;
    },

    resetFilters() {
      // Reset all filter state properties to null
      Object.keys(this.filterState).forEach((key) => {
        this.filterState[key] = null;
      });

      // Reset the filtered data to show all consoles
      this.filteredConsoles = [...this.consoles];

      // Reset any v-model bindings in the template
      this.startDate = null;
      this.endDate = null;
    },

    // Utility method to get unique values for select options
    getUniqueValues(field) {
      return [...new Set(this.consoles.map((item) => item[field]))];
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },

    validateDateRange() {
      this.dateErrors.startDate = '';
      this.dateErrors.endDate = '';

      if (this.filterState.startDate && this.filterState.endDate) {
        const start = new Date(this.filterState.startDate);
        const end = new Date(this.filterState.endDate);
        
        if (start > end) {
          this.dateErrors.endDate = 'End date must be after start date';
          return false;
        }

        // Validate against future dates
        const today = new Date();
        if (start > today) {
          this.dateErrors.startDate = 'Start date cannot be in the future';
          return false;
        }
        if (end > today) {
          this.dateErrors.endDate = 'End date cannot be in the future';
          return false;
        }
      }
      return true;
    },

    handleDateChange() {
      this.validateDateRange();
    },

    // OS handling methods
    handleOSChange(value) {
      if (value === 'All') {
        this.filterState.os = null;
      }
    },

    // Enhanced filter methods
    applyFilters() {
      if (!this.validateDateRange()) {
        return; // Don't apply filters if date validation fails
      }

      let filtered = [...this.consoles];

      // Date filtering with enhanced error handling
      if (this.filterState.startDate && this.filterState.endDate) {
        const start = new Date(this.filterState.startDate);
        const end = new Date(this.filterState.endDate);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);

        filtered = filtered.filter(item => {
          try {
            const itemDate = new Date(item.date);
            return itemDate >= start && itemDate <= end;
          } catch (e) {
            console.error(`Invalid date format for item: ${item.date}`);
            return false;
          }
        });
      }

      // OS filtering with 'All' option handling
      if (this.filterState.os && this.filterState.os !== 'All') {
        filtered = filtered.filter(item => item.OS === this.filterState.os);
      }

      // Existing filter logic...
      if (this.filterState.benchmarkCategory) {
        filtered = filtered.filter(item => 
          item.Benchmark_Category === this.filterState.benchmarkCategory
        );
      }

      // Apply other existing filters...

      // Apply sorting
      if (this.filterState.sortField && this.filterState.sortDirection) {
        filtered.sort((a, b) => {
          const aValue = a[this.filterState.sortField];
          const bValue = b[this.filterState.sortField];
          
          if (this.filterState.sortDirection === 'asc') {
            return aValue > bValue ? 1 : -1;
          } else {
            return aValue < bValue ? 1 : -1;
          }
        });
      }

      this.filteredConsoles = filtered;
    },

    resetFilters() {
      // Reset all filter state properties
      Object.keys(this.filterState).forEach(key => {
        this.filterState[key] = null;
      });

      // Reset date errors
      this.dateErrors.startDate = '';
      this.dateErrors.endDate = '';

      // Reset the filtered data
      this.filteredConsoles = [...this.consoles];
    },
  },
};
</script>




<style scoped>
.sut-numa {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.others {
  font-size: 12px; /* Make text smaller */
  color: rgb(132, 132, 132);
  white-space: nowrap; /* Prevent wrapping */
}
.selected-chip {
  display: flex;
  align-items: center;
  gap: 6px; /* Space between chip and count */
}
/* Change Header Background Color & Text Color */
.custom-table :deep(.v-data-table__th) {
  background-color: black !important; /* Black background */
  color: white !important; /* White text */
  font-weight: bold; /* Make text bold */
}
.action-icon {
  color: rgb(92, 90, 90);
  cursor: pointer;
}

/* Change color on hover */
.action-icon:hover {
  color: green; /* Change to any color you want */
}
.filters {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.row-1 {
  width: 25%;
}
.row-2 {
  width: 25%;
}
.row-3 {
  width: 25%;
}
.row-4 {
  width: 25%;
}
.row-5 {
  width: 49.5%;
}
.row-6 {
  display: flex;
  justify-content: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */
  gap: 1rem; /* Adds space between buttons */
}

.date {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.textarea-width {
  max-width: 180px !important; /* Adjust width */
  min-width: 100px !important;
}
.date-input :deep(.v-field__input) {
  position: relative;
  font-size: 12px;
}

.date-input :deep(.v-field__input)::-webkit-calendar-picker-indicator {
  position: absolute;
  right: 0;
  margin-right: 8px;
}
.custom-title {
  font-weight: bold;
  text-align: center;
  width: 100%;
  display: block;
}
.container-1 {
  display: flex;
  flex-direction: row;
}
.items-per-page {
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 150px !important; /* Adjust width */
  min-width: 100px !important; /* Ensure it's not too small */
}
.search-bar {
  padding-right: 1rem;
  max-width: 250px !important; /* Adjust width */
  min-width: 100px !important; /* Ensure it's not too small */
}
.btn {
  margin-right: 1rem;
}
</style>