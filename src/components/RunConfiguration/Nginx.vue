  <template>
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
        @click="triggerParentFunction"
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

  <!-- bv4h2g3-vm-ubuntu2310_test Content -->
  <div
    v-if="showContent && selectedSUT === 'bv4h2g3-vm-ubuntu2310_test'"
    class="content"
  >
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
        v-model="formData.kbSize"
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
        v-model="formData.threads"
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
        v-model="formData.connections"
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
    <div class="run-para-row2">
      <v-text-field
        class="text-area info-icon"
        v-model="formData.duration"
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
          v-model="formData.captureLatency"
          label="Capture latency Statitics"
          hide-details
          inset
          append-icon="mdi-information"
          class="custom-append-icon"
        ></v-switch>
      </div>
      <v-text-field
        class="text-area info-icon"
        v-model="formData.header"
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
        v-model="formData.timeout"
        label="Timeout (Optional in secs)"
        placeholder="Timeout (Optional in secs)"
        variant="outlined"
        width="300"
        append-inner-icon="mdi-information"
      ></v-text-field>
      <v-text-field
        class="text-area info-icon"
        density="compact"
        v-model="formData.luaScript"
        label="LuaJIt script (Optional-in secs)"
        placeholder="LuaJIt script (Optional-in secs)"
        variant="outlined"
        width="300"
        append-inner-icon="mdi-information"
      ></v-text-field>
      <div class="switch-div-size">
        <v-switch
          color="info"
          v-model="formData.useSutIp"
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
          v-model="formData.numberOfRuns"
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
          v-model="formData.runTurbostat"
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
        v-model="formData.priority1"
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
        v-model="formData.iterations"
        variant="outlined"
        width="300"
        value="1"
        persistent-placeholder
      ></v-text-field>
      <v-text-field
          density="compact"
          v-model="formData.date"
          class="textarea-width date-input"
          width="300"
          type="date"
          label="Select Date"
          variant="outlined"
        ></v-text-field>
    </div>

    <!--5th Row ends-->

    <div class="divider">
      <v-divider></v-divider>
    </div>
    <div class="btn">
      <div class="space">
        <!--Dialog Starts-->
        <div class="text-center pa-4">
          <v-dialog v-model="dialog" max-width="1200" persistent>
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn class="dialog-btn" v-bind="activatorProps"> Submit </v-btn>
            </template>

            <v-card
              prepend-icon="mdi-account-details"
              title="Run Parameters Summary"
            >
              <v-card-text>
                <div v-html="formattedContent"></div>
              </v-card-text>
              <template v-slot:actions>
                <v-spacer></v-spacer>

                <v-btn @click="dialogFunc"> Submit </v-btn>

                <v-btn @click="dialog = false"> Cancel </v-btn>
              </template>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <!--Dialog ends-->
      <div class="space">
        <v-btn class="space-btn" @click="navigateToStart"> CANCEL</v-btn>
      </div>
      <div class="space">
        <v-btn class="space-btn" @click="apiRunParaConfig"> SAVE RUN PARAMETERS </v-btn>
      </div>
    </div>
  </div>
  <!-- bv4h2g3-vm-ubuntu2310_test Content ends -->
</template>

  <script>
export default {
  data() {
    return {

      BenchmarkTest: "Benchmark Test",
      BenchMarkName: "Benchmark_Test_Nginx_439210",
      TestType: "Nginx",
      Workload: "",
      WorkloadTool: "",
      initiatedBy: "muzassar@tempmail.com",
      ansible_setup: "true",
      server_setup: "single",
      numjobs: "16",
      iodepth: "1",
      ramp_time: "1",
      disk: "2",
      mode: "write",
      blocksize: "128",

      model1: false,
      model2: false,
      model3: false,
      model4: false,
      model5: false,
      model6: false,
      model7: false,
      model8: false,
      model9: false,

      dialog: false,

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

      // Create v-model bindings for form inputs
      formData: {
        kbSize: "1",
        threads: "1",
        connections: "1",
        duration: "60",
        captureLatency: false,
        header: "",
        timeout: "",
        luaScript: "",
        useSutIp: false,
        numberOfRuns: "1",
        runTurbostat: false,
        iterations: "1",
        priority1: "",
        date: "",
      },
      formattedContent: "",
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
    // Watch all form fields for changes
    formData: {
      deep: true,
      handler(newVal) {
        this.updateDialogContent();
      },
    },
    dialog(newVal) {
      if (newVal) {
        this.updateDialogContent();
      }
    },
  },
  methods: {

    dialogFunc(){
      this.dialog = false;
      this.apiRunParaConfig();
      this.$router.push('/benchmark-runs');

    },

    apiRunParaConfig() {
      fetch(
        "https://amd-demo-3c3b6-default-rtdb.firebaseio.com/nginx-run-parameters-dialog.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            kbSize: this.formData.kbSize,
            threads: this.formData.threads,
            connections: this.formData.connections,
            duration: `${this.formData.duration} seconds`,
            captureLatency: this.formData.captureLatency ? "Yes" : "No",
            header: this.formData.header || "Not provided",
            timeout: this.formData.timeout || "Not set",
            luaScript: this.formData.luaScript || "Not provided",
            useSutIp: this.formData.useSutIp ? "Yes" : "No",
            numberOfRuns: this.formData.numberOfRuns,
            runTurbostat: this.formData.runTurbostat ? "Yes" : "No",
            iterations: this.formData.iterations,
            priority1: this.formData.priority1 || "Not set",
            date: this.formData.date || "Not set",
          }),
        }
      )
        .then((response) => response.json()) // Parse response as JSON
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));

        fetch(
        "https://amd-demo-3c3b6-default-rtdb.firebaseio.com/benchmark-runs-header.json?auth=AIzaSyAhfnwltXip04eV4OxPQpi731JofAdd21o",
        {
          method: "POST",
          headers: {
            "Content-Type": "BenchmarkRuns/json",
          },
          body: JSON.stringify({

          BenchmarkTest: this.BenchmarkTest,
          BenchMarkName: this.BenchMarkName,
          TestType: this.TestType,
          Workload: this.Workload || "-",
          WorkloadTool: this.WorkloadTool || "-",
          sut: this.selectedSUT || "-",
          date: this.formData.date || "-",
          initiatedBy: this.initiatedBy,
          ansible_setup: this.ansible_setup,
          server_setup: this.server_setup,
          noOfiterations: this.formData.iterations,
          size: this.formData.kbSize,
          runtime: this.formData.duration,
          numjobs: this.numjobs,
          iodepth: this.iodepth,  
          ramp_time: this.ramp_time,
          disk: this.disk,
          mode: this.mode,
          blocksize: this.blocksize
          }),
        }
      )
        .then((response) => response.json()) // Parse response as JSON
        .then((data) => console.log("Data submitted successfully!", data))
        .catch((error) => console.error("Error:", error));
    },
    handleSelection() {
      this.dialog = false;
    },
    updateDialogContent() {
      this.formattedContent = `
        <h3>System Information</h3>
        <p>
          Processor: AMD EPYC 7713 64-Core Processor<br>
          RAM: 15983 MB<br>
          OS: Ubuntu 23.10 (Mantic Minotaur)<br>
          Socket(s): 1<br>
          NUMA node(s): 1
        </p>
        <h3>Benchmark Parameters</h3>
        <p>
          KB Size: ${this.formData.kbSize}<br>
          Threads: ${this.formData.threads}<br>
          Number of Connections: ${this.formData.connections}<br>
          Duration: ${this.formData.duration} seconds<br>
          Capture Latency Statistics: ${
            this.formData.captureLatency ? "Yes" : "No"
          }<br>
          Header: ${this.formData.header || "Not provided"}<br>
          Timeout: ${this.formData.timeout || "Not set"}<br>
          LuaJIT Script: ${this.formData.luaScript || "Not provided"}<br>
          Use SUT IP: ${this.formData.useSutIp ? "Yes" : "No"}<br>
          Number of Runs: ${this.formData.numberOfRuns}<br>
          Run Turbostat: ${this.formData.runTurbostat ? "Yes" : "No"}<br>
          Number of Iterations: ${this.formData.iterations}<br>
          Priority 1: ${this.formData.priority1 || "Not set"}<br>
          Date: ${this.formData.date || "Not set"}
        </p>
      `;
    },
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
    triggerParentFunction() {
      this.$emit("callParentFunction"); // Emit the event
    },
  },
};
</script>

  <style scoped>
.textarea-width {
  margin-top: 0.9rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 300 !important; /* Adjust width */
  min-width: 200px !important;
}
.date-input :deep(.v-field__input) {
  position: relative;
}

.date-input :deep(.v-field__input)::-webkit-calendar-picker-indicator {
  position: absolute;
  right: 0;
  margin-right: 8px;
}
::v-deep(.v-data-table thead) {
  background-color: black !important;
  color: white !important;
}
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
.switch-div-size {
  margin-top: 0.5rem;
  width: 33.5%;
  padding-left: 1.3rem;
  padding-right: 1.6rem;
}
.run-para-row3 {
  display: flex;
  flex-direction: row;
}
.run-para-row4 {
  display: flex;
  flex-direction: row;
}
.textfield-width-div {
  width: 33.5%;
}
.run-para-row5 {
  display: flex;
  flex-direction: row;
}
:deep(.custom-append-icon) .v-input__append {
  color: blue;
}
.dialog-btn {
  background-color: black;
  color: white;
}
</style>