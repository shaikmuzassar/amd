  <template>
    <v-card elevation="2" class="card">
      <p>Start / Schedule Test</p>
      <v-select
        v-model="runCategory"
        class="alignment"
        density="compact"
        label="Run Category"
        placeholder="Run Category"
        :items="[
          'Benchmark_Test',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        width="577"
        :error="!runCategory && isRunCategoryTouched"
        :error-messages="
          !runCategory && isRunCategoryTouched ? ['Required.'] : []
        "
        @change="handleRunCategoryChange"
        @blur="isRunCategoryTouched = true"
      ></v-select>
      <div class="SecondRow">
        <v-select
          v-model="groupName"
          class="alignment"
          density="compact"
          label="Group Name"
          placeholder="Group Name"
          :items="[
            'Benchmark_Test',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          variant="outlined"
          width="500"
          :error="!groupName && isGroupNameTouched"
          :error-messages="!groupName && isGroupNameTouched ? ['Required.'] : []"
          @change="handleGroupNameChange"
          @blur="isGroupNameTouched = true"
        ></v-select>
        <v-text-field
          class="text-area"
          density="compact"
          label="Name"
          value="Benchmark_Test_Nginx_439210"
          variant="outlined"
          width="500"
          persistent-placeholder
        ></v-text-field>
      </div>
      <div class="SecondRow">
        <v-text-field
          class="text-area"
          density="compact"
          label="Template Name"
          placeholder="Nginx"
          variant="outlined"
          width="500"
          persistent-placeholder
          v-model="benchmarkName"
          @input="updateName"
        ></v-text-field>
        <v-text-field
          class="text-area"
          label="Description"
          density="compact"
          placeholder="Nginx Micro-Benchmark"
          variant="outlined"
          width="500"
          persistent-placeholder
        ></v-text-field>
      </div>
      <p>Platform Details</p>
      <div class="toggle">
        <v-switch color="primary"></v-switch>
        <p>Find VM/Server by Vendors, CPU, Memory, Sockets and Cores</p>
      </div>
        <div class="ThirdRow">
          <div class="sut-row">
            <!--Select SUT Start-->
            <v-select
              class="alignment"
              density="compact"
              label="Select SUT"
              placeholder="Select SUT"
              :items="[
                'California',
                'bv4h2g3-vm-ubuntu2310_test',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              width="300"
              v-model="selectedSUT"
              @change="handleSelection"
              @click="validateForm"
            ></v-select>
            <!--Select SUT ends-->
            <p2 v-if="verificationStatus" :style="verificationStyle">{{
              verificationStatus
            }}</p2>
            <v-checkbox
              color="primary"
              label="Use SUT as LTS"
              class="checkbox"
            ></v-checkbox>
            <v-btn class="verify-btn" @click="verify" :disabled="!selectedSUT"
              >Verify</v-btn
            >
          </div>
          <v-select
            v-if="isVisible"
            class="alignment"
            density="compact"
            label="Run Configuration"
            placeholder="Run Configuration"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            width="300"
          ></v-select>
        </div>
        <div v-if="!isVisible">
          <div class="divider">
            <v-divider></v-divider>
          </div>
          <v-btn class="cancle-btn" @click="navigateToStart"> Cancle </v-btn>
        </div>

      <!-- California Content -->
      <div v-if="showContent && selectedSUT === 'California'" class="content">
        <p>
          AMD EPYC 9755 128-Core Processor<br />
          Total RAM: 1547142 MB<br />
          OS Name: Oracle<br />
          Linux Server OS Version: 8.7<br />
          Socket(s): 2<br />
          NUMA node(s): 8<br />
          NUMA node0<br />
          CPU(s): 0-31<br />
          NUMA node1 CPU(s): 32-63<br />
          NUMA node2 CPU(s): 64-95<br />
          NUMA node3 CPU(s): 96-127<br />
          NUMA node4 CPU(s): 128-159<br />
          NUMA node5 CPU(s): 160-191<br />
          NUMA node6 CPU(s): 192-223<br />
          NUMA node7 CPU(s): 224-255<br />
        </p>
        <h1 class="data">Database Configuration</h1>
        <div class="database">
          <v-select
            class="alignment"
            density="compact"
            label="Select Database"
            placeholder="Select Database"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            width="300"
          ></v-select>
          <v-select
            class="alignment"
            density="compact"
            label="Select Workload"
            placeholder="Select Workload"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            width="300"
          ></v-select>
        </div>
        <h1 class="data">Run Parameter</h1>
        <div class="parameter">
          <v-select
            class="alignment"
            density="compact"
            label="Scale Factor"
            placeholder="Scale Factor"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            width="300"
          ></v-select>
          <v-text-field
            class="text-area"
            label="DOP (Degree of Parallel) Power"
            density="compact"
            placeholder="DOP (Degree of Parallel) Power"
            variant="outlined"
            width="300"
          ></v-text-field>
          <v-text-field
            class="text-area"
            label="DOP (Degree of Parallel) Throughput"
            density="compact"
            placeholder="DOP (Degree of Parallel) Throughput"
            variant="outlined"
            width="300"
          ></v-text-field>
        </div>
        <diV class="toggle-para">
          <diV class="div-width">
            <v-switch
              color="info"
              v-model="model1"
              label="Use Backup ?"
              hide-details
              inset
              append-icon="mdi-information"
              class="custom-append-icon"
            ></v-switch>
          </diV>
          <diV class="div-width">
            <v-switch
              color="info"
              v-model="model2"
              label="With DB Refresh ?"
              hide-details
              inset
              append-icon="mdi-information"
              class="custom-append-icon"
            ></v-switch>
          </diV>
          <diV class="div-width">
            <v-switch
              color="info"
              v-model="model3"
              label="Configure ASM disk ? (For Oracle Only)"
              hide-details
              inset
              append-icon="mdi-information"
              class="custom-append-icon"
            ></v-switch>
          </diV>
        </diV>
        <div class="toggle-para2">
          <diV class="div-width">
            <v-switch
              color="info"
              v-model="model4"
              label="Teardown"
              hide-details
              inset
              append-icon="mdi-information"
              class="custom-append-icon"
            ></v-switch>
          </diV>
          <diV class="div-width">
            <v-switch
              color="info"
              v-model="model5"
              label="Use Exisiting Build"
              hide-details
              inset
              append-icon="mdi-information"
              class="custom-append-icon"
            ></v-switch>
          </diV>
        </div>
        <div class="runs">
          <v-select
            class="alignment"
            density="compact"
            label="No. of Runs"
            placeholder="No. of Runs"
            :items="['1', '2', '3', '4', '5', '6']"
            variant="outlined"
            width="300"
            persistent-placeholder
          ></v-select>
          <v-switch
            color="info"
            v-model="model6"
            label="Run Turbostat"
            hide-details
            inset
          ></v-switch>
        </div>
        <div class="parameter">
          <v-select
            class="alignment"
            density="compact"
            label="Priority (Optional)"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
            width="300"
          ></v-select>
          <v-text-field
            class="text-area"
            label="No. of iterations"
            density="compact"
            placeholder="No. of iterations"
            variant="outlined"
            width="300"
          ></v-text-field>
          <v-text-field
            class="text-area"
            label="DOP (Degree of Parallel) Throughput"
            density="compact"
            placeholder="DOP (Degree of Parallel) Throughput"
            variant="outlined"
            width="300"
          ></v-text-field>
        </div>
        <div class="divider">
          <v-divider></v-divider>
        </div>
        <div class="btn">
          <div class="space">
            <v-btn class="space-btn" @click="submit"> SUBMIT </v-btn>
          </div>
          <div class="space">
            <v-btn class="space-btn" @click="navigateToStart"> CANCEL</v-btn>
          </div>
          <div class="space">
            <v-btn class="space-btn" @click="verify"> SAVE RUN PARAMETERS </v-btn>
          </div>
        </div>
      </div>
      <!-- bv4h2g3-vm-ubuntu2310_test Content -->
      <div v-if="showContent && selectedSUT === 'bv4h2g3-vm-ubuntu2310_test'" class="content">
        <p>
          AMD EPYC 7713 64-Core Processor<br />
          Total RAM: 15983 MB<br />
          OS Name: Ubuntu<br />
          OS Version: 23.10 (Mantic Minotaur)<br />
          Socket(s): 1<br />
          NUMA node(s): 1<br />
          NUMA node0 CPU(s): 0-7<br />
        </p>
        <h1 class="data">Run Parameters</h1>
        <div class="run-para-row1">
          <v-text-field
            class="text-area info-icon"
            density="compact"
            label="KB Size"
            placeholder="KB Size"
            value="1"
            variant="outlined"
            width="300"
            persistent-placeholder
            append-inner-icon="mdi-information"
          ></v-text-field>
          <v-text-field
            class="text-area info-icon"
            density="compact"
            label="Threads"
            placeholder="Threads"
            value="1"
            variant="outlined"
            width="300"
            persistent-placeholder
            append-inner-icon="mdi-information"
          ></v-text-field>
          <v-text-field
            class="text-area info-icon"
            density="compact"
            label="Number of connections"
            placeholder="Number of connections"
            value="1"
            variant="outlined"
            width="300"
            persistent-placeholder
            append-inner-icon="mdi-information"
          ></v-text-field>
        </div>
        <div class="run-para-row2 ">
            <v-text-field
              class="text-area info-icon"
              density="compact"
              label="Duration (in secs)"
              placeholder="Number of connections"
              value="60"
              variant="outlined"
              width="300"
              persistent-placeholder
              append-inner-icon="mdi-information"
            ></v-text-field>
            <div class="switch-div-size">
              <v-switch
              color="info"
              v-model="model7"
              label="Capture latency Statitics"
              hide-details
              inset
              append-icon="mdi-information"
              class="custom-append-icon"
            ></v-switch>
            </div>
            <v-text-field
              class="text-area info-icon"
              density="compact"
              label="Header(Optional)"
              placeholder="Header(Optional)"
              variant="outlined"
              width="300"
              append-inner-icon="mdi-information"
            ></v-text-field>
          </div>
          <!--3rd Row-->
          <div class="run-para-row3">
            <v-text-field
              class="text-area info-icon"
              density="compact"
              label="Timeout (Optional in secs)"
              placeholder="Timeout (Optional in secs)"
              variant="outlined"
              width="300"
              append-inner-icon="mdi-information"
            ></v-text-field>
            <v-text-field
              class="text-area info-icon"
              density="compact"
              label="LuaJIt script (Optional-in secs)"
              placeholder="LuaJIt script (Optional-in secs)"
              variant="outlined"
              width="300"
              append-inner-icon="mdi-information"
            ></v-text-field>
            <div class="switch-div-size">
              <v-switch
              color="info"
              v-model="model8"
              label="Use SUT IP"
              hide-details
              inset
              append-icon="mdi-information"
              class="custom-append-icon"
            ></v-switch>
            </div>
          </div>
          <!--4th Row-->
          <div class="run-para-row4">
            <div class="textfield-width-div">
              <v-select
            class="alignment"
            density="compact"
            label="No. of Runs"
            value="1"
            :items="['1', '2', '3', '4', '5', '6']"
            variant="outlined"
            width="385"
            persistent-placeholder
          ></v-select>
            </div>
            <div class="switch-div-size">
              <v-switch
              color="info"
              v-model="model9"
              label="Run Turbostat"
              hide-details
              inset
            ></v-switch>
            </div>
          </div>
          <!--5th Row starts-->

          <div class="run-para-row5">
            <v-select
            class="alignment"
            density="compact"
            label="Priority (Optional)"
            :items="['1', '2', '3', '4', '5', '6']"
            variant="outlined"
            width="300"
          ></v-select>
          <v-text-field
          class="alignment"
              density="compact"
              label="No. of iterations"
              placeholder="No. of iterations"
              variant="outlined"
              width="300"
              value="1"
              persistent-placeholder
            ></v-text-field>
            <v-select
            class="alignment"
            density="compact"
            label="Priority (Optional)"
            :items="['1', '2', '3', '4', '5', '6']"
            variant="outlined"
            width="300"
          ></v-select>

          </div>

          <!--5th Row ends-->

        <div class="divider">
          <v-divider></v-divider>
        </div>
        <div class="btn">
          <div class="space">
            <v-btn class="space-btn" @click="submit"> SUBMIT </v-btn>
          </div>
          <div class="space">
            <v-btn class="space-btn" @click="navigateToStart"> CANCEL</v-btn>
          </div>
          <div class="space">
            <v-btn class="space-btn" @click="verify"> SAVE RUN PARAMETERS </v-btn>
          </div>
        </div>
      </div>
      <!-- bv4h2g3-vm-ubuntu2310_test Content ends -->
    </v-card>
  </template>

  <script>

  export default {
  
    data() {
      return {
        model1: false,
        model2: false,
        model3: false,
        model4: false,
        model5: false,
        model6: false,
        model7: false,
        model8: false,
        model9: false,

        benchmarkName: '',

        isVisible: false,

        showContent: false,

        runCategory: null, // Selected Run Category
        groupName: null, // Selected Group Name
        isRunCategoryTouched: false, // Tracks if Run Category dropdown was interacted with
        isGroupNameTouched: false, // Tracks if Group Name dropdown was interacted with

        selectedSUT: null, // Track selected SUT
        isVerified: false, // Track verification status
        verificationStatus: "", // Track displayed text ("Not Verified" or "Verified")
        verificationStyle: { color: "red" }, // Default style for "Not Verified"
      };
    },
    watch: {
      // Watch the selectedSUT to reset status when new selection is made
      selectedSUT(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.showContent = false;
          this.isVisible = false;
        }
        if (newVal) {
          if (!this.isVerified) {
            // If selected but not verified, show "Not Verified"
            this.verificationStatus = "Not Verified";
            this.verificationStyle = { color: "red" }; // Red color for "Not Verified"
          } else {
            // If already verified, maintain the "Verified" status
            this.verificationStatus = "Verified";
            this.verificationStyle = { color: "green" }; // Green color for "Verified"
          }
        } else {
          this.verificationStatus = ""; // Clear status if no selection
        }
      },
    },
    methods: {
      navigateToStart() {
        this.$router.push("/benchmark-template");
      },
      submit() {
        this.isVerified = false;
      },
      handleRunCategoryChange() {
        this.isRunCategoryTouched = true; // Mark as touched when user interacts
        if (this.groupName) {
          this.isGroupNameTouched = false; // Reset validation for Group Name
        }
      },
      handleGroupNameChange() {
        this.isGroupNameTouched = true; // Mark as touched when user interacts
        if (this.runCategory) {
          this.isRunCategoryTouched = false; // Reset validation for Run Category
        }
      },
      validateForm() {
        // Manually trigger validation for both fields
        if (!this.runCategory) {
          this.isRunCategoryTouched = true; // Mark as touched if not selected
        }
        if (!this.groupName) {
          this.isGroupNameTouched = true; // Mark as touched if not selected
        }
      },
      handleSelection(newValue) {
        // Only reset if the selection actually changed
        if (newValue !== this.previousSelection) {
          this.showContent = false;
          this.isVisible = false;
          this.previousSelection = newValue;
        }
        // If there's a new selection and it's different from the previous one
        if (newValue && newValue !== this.previousSelection) {
          this.verificationStatus = "Not Verified";
          this.verificationStyle = { color: "red" };
          this.previousSelection = newValue;
        }
      },
      verify() {
        this.isVisible = true;

        if (this.selectedSUT) {
          this.showContent = true;
        }
        if (this.selectedSUT) {
          this.verificationStatus = "Verified";
          this.verificationStyle = { color: "green" };
          this.previousSelection = this.selectedSUT;
        }
      },
      updateName() {
      this.$store.commit('updateBenchmarkName', this.benchmarkName)
    },
    },
  };
  </script>

  <style scoped>
  p {
    padding-left: 1rem;
    margin-top: 1rem;
  }
  .card {
    left: 1rem;
    width: 98%;
  }
  .alignment {
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .SecondRow {
    display: flex;
    flex-direction: row;
  }

  .text-area {
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .toggle {
    display: flex;
    flex-direction: row;
    padding-left: 1rem;
  }
  .ThirdRow {
    display: flex;
    flex-direction: row;
  }
  p2 {
    margin-top: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 1rem;
    font-size: 15px;
  }

  .verify-btn {
    background-color: black;
    color: white;
    margin-top: 1.2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .checkbox {
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 2rem;
  }
  .data {
    font-size: 17px;
    margin-top: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .database {
    width: 66%;
    display: flex;
    flex-direction: row;
  }
  .parameter {
    display: flex;
    flex-direction: row;
  }
  .toggle-para {
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
  }
  .div-width {
    width: 48%;
    padding-right: 1.7rem;
  }
  .toggle-para2 {
    width: 70%;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
  }
  .runs {
    width: 48.5%;
    display: flex;
    flex-direction: row;
  }
  .btn {
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
  }
  .divider {
    width: 95%;
    padding-left: 3.5rem;
  }
  .space-btn {
    background-color: black;
    color: white;
    margin-top: 1rem;
  }
  .space {
    padding-left: 2rem;
  }
  .cancle-btn {
    background-color: black;
    left: 45%;
    color: white;
    margin-top: 1.2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
  }
  .sut-row {
    width: 70%;
    display: flex;
    flex-direction: row;
  }
  .info-icon :deep(.v-field__append-inner .v-icon) {
    color: blue; /* Material Design blue */
  }
  .run-para-row1 {
    display: flex;
    flex-direction: row;
  }
  .run-para-row2 {
    display: flex;
    flex-direction: row;
  }
  .switch-div-size{
    margin-top: 0.5rem;
    width: 33.5%;
    padding-left: 1.3rem;
    padding-right: 1.6rem;
  }
  .run-para-row3{
    display: flex;
    flex-direction: row;
  }
  .run-para-row4{
    display: flex;
    flex-direction: row;
  }
  .textfield-width-div{
    width: 33.5%;
  }
  .run-para-row5{
    display: flex;
    flex-direction: row;
  }
  :deep(.custom-append-icon) .v-input__append {
    color: blue;
  }
  </style>