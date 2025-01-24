<template>
    <div class="pt-3">
        <div class="pb-3" v-if="!hideCustomTag">
            <div style="display: flex;justify-content: end;">
                <v-btn dark @click="invalidDialog = true" style="margin-right:10px;">
                    {{ this.lockoutResultLabel }}
                </v-btn>

            </div>
            <div>
                <v-dialog v-model="invalidDialog" width="75%">
                    <v-card>
                        <v-card-title class="headline" style="background-color: #272727;color: #ffffff;">Are
                            you sure you want to lock out the benchmark run from Reporting ?</v-card-title>
                        <v-divider></v-divider>
                        <div class="pa-3">
                            <v-form lazy-validation ref="invalidRunForm">
                                <v-textarea label="Comments" rows="3" variant="outlined" v-model="invalidRunComment"
                                    style="resize: none;" required :rules="requiredFields">
                                </v-textarea>
                            </v-form>
                        </div>
                        <v-card-actions style="justify-content: right;">
                            <v-btn dark @click="lockoutFn">Confirm</v-btn>
                            <v-btn dark @click="closeInvalidDialog">Cancel</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-dialog>
            </div>
        </div>

        <v-row>
            <v-col cols="12" md="12" sm="12">
                <v-form v-on:submit.prevent="updateFormDetails" id="frm" lazy-validation ref="updateForm">
                    <v-row style="border: 1px solid #CCCCCC; margin: 1px;">
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b>Name: </b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <div style="word-break: break-all;">{{ name }}</div>
                        </v-col>
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b>Group Name: </b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <div style="word-break: break-all;">{{ groupName }}</div>
                        </v-col>
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b>Test Type: </b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <label>{{ testType }}
                            </label>
                        </v-col>
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b>Execution Id: </b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <label>{{ templateData.benchmarkExecutionID }}
                            </label>
                        </v-col>
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b v-if="!isAutomatedBenchmarkRun">Created Date: </b><b v-else>Test Date:</b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <label>{{ createdDate || "" }}
                            </label>
                        </v-col>
                        <v-col v-if="!isAutomatedBenchmarkRun" col="12" md="2" sm="12" class="cls infoStyle">
                            <b>Test Date: </b>
                        </v-col>
                        <v-col v-if="!isAutomatedBenchmarkRun" col="12" md="4" sm="12" class="cls infoStyle">
                            <label>{{ testDate || "" }}
                            </label>
                        </v-col>
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b>Owner: </b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <label>{{ createdBy }}
                            </label>
                        </v-col>
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b>CPU Model: </b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <label>{{ modelCPUModel }}</label>
                        </v-col>
                        <v-col col="12" md="2" sm="12" class="cls infoStyle">
                            <b>Custom Tag: </b>
                        </v-col>
                        <v-col col="12" md="4" sm="12" class="cls infoStyle">
                            <label v-if="!isEditData">{{ runType }}</label>
                            <v-text-field v-else outlined dense v-model="runTypeEdit" label="Custom Tag"
                                :disabled="stats"></v-text-field>
                        </v-col>
                        <v-col style="padding-left: 0px" col="12" md="12" sm="12" class="cls infoStyle">
                            <v-row style="margin: 0px">
                                <v-col col="12" md="2" sm="12" class="cls infoStyle">
                                    <b>Published to EPYC Dashboard: </b>
                                </v-col>
                                <v-col col="12" md="4" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <label>{{ publishStatus }}</label>
                                </v-col>
                                <v-col v-if="!hideLogs" col="12" md="2" sm="12" class="cls infoStyle"
                                    style="margin-right: -10px;">
                                    <b>Logs: </b>
                                </v-col>
                                <v-col v-if="!hideLogs" col="12" md="3" sm="12" class="cls infoStyle"
                                    style="margin-left: 10px;">
                                    <v-icon class="mr-2" @click="downloadArtifacts()" title="Download Logs">
                                        mdi-download
                                    </v-icon>
                                    <v-icon class="mr-2" @click="navigateToArtifacts()" title="View Artifacts">
                                        mdi-eye
                                    </v-icon>
                                    <v-icon v-if="executionLog" class="mr-2" @click="showExecutionLogs()"
                                        title="Jenkins Execution Logs">
                                        mdi-history
                                    </v-icon>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col v-if="this.isMultiSUTResult && this.resultFormat == 'AUGMENTED_RESULTS'"
                            style="padding-left: 0px" col="12" md="12" sm="12" class="cls infoStyle">
                            <v-row style="margin: 0px">
                                <v-col col="12" md="2" sm="12" class="cls infoStyle">
                                    <b>Multiple SUT Used: </b>
                                </v-col>
                                <v-col col="12" md="4" sm="12" class="cls infoStyle">
                                    <label>{{ this.isMultiSUTResult }} </label>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <b>No. Of SUT(s):</b>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <label>{{ this.multiSUTNodes }}</label>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col v-if="this.isMultiInstanceResult && this.resultFormat == 'AUGMENTED_RESULTS'"
                            style="padding-left: 0px" col="12" md="12" sm="12" class="cls infoStyle">
                            <v-row style="margin: 0px">
                                <v-col col="12" md="2" sm="12" class="cls infoStyle">
                                    <b>Multi Instance Used: </b>
                                </v-col>
                                <v-col col="12" md="4" sm="12" class="cls infoStyle">
                                    <label>{{ this.isMultiInstanceResult }} </label>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <b>No. of Instance(s):</b>
                                </v-col>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle" style="margin-right: 7px;">
                                    <label>{{ this.multiSUTNodes }}</label>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col col="12" md="12" sm="12" class="cls infoStyle" style="height: auto;">
                            <v-row>
                                <v-col col="12" md="2" sm="12" class="cls infoStyle">
                                    <b>Data Entitlement: </b>
                                </v-col>
                                <!-- <v-col col="12" :md="isEditData ? '3' : '10'" sm="12" class="cls infoStyle"> -->

                                <v-col col="12" md="4" sm="12" class="cls infoStyle">
                                    <div>
                                        <label>{{ dataEntitlementTagValue }}</label>
                                    </div>
                                </v-col>
                                <v-col v-if="showPTS" col="12" md="2" sm="12" class="cls infoStyle">
                                    <strong>PTS Report :</strong>
                                </v-col>
                                <v-col v-if="showPTS" col="12" md="1" sm="12" class="cls infoStyle">
                                    <v-icon @click="ptsReportLink()" style="margin-left: 0px;">mdi-open-in-new</v-icon>
                                </v-col>
                            </v-row>
                            <v-row style="margin-top: -45px;">
                                <v-col col="12" md="11" sm="12" class="cls infoStyle"
                                    style="text-align: right;width: 100%;">
                                    <div v-if="roleConfig.showEditCustomTagButton && !hideCustomTag">
                                        <span v-if="isEditData === false"><v-icon
                                                v-on:click="showFormEdit()">mdi-pencil</v-icon></span>
                                        <span v-else>
                                            <v-icon v-on:click="closeFormEdit()"
                                                style="margin-right: 10px;">mdi-cancel</v-icon>
                                            <v-icon v-on:click="saveFormEdit()">mdi-content-save</v-icon>
                                        </span>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row style="padding: 10px;" >
                            <v-col md="12">
                                    <div style="background-color: #CCCCCC;">
                                        <h3>Platform Profile</h3>
                                    </div>
                                <PlatformProfileTableComponent
                                v-if="platformProfileValues"
                                :key="templateData.benchmarkExecutionID"
                                        :platformProfileValues="platformProfileValues">
                                    </PlatformProfileTableComponent>
                            </v-col>
                            </v-row>
                            <v-row style="padding: 10px;">
                                <v-col md="12">
                                    <div style="background-color: #CCCCCC;">
                                        <h3>Run Configurations</h3>
                                    </div>
                                    <RunConfigurationTableComponent :key="templateData.benchmarkExecutionID"
                                        :runConfigurations="runConfigurations">
                                    </RunConfigurationTableComponent>
                                </v-col>
                            </v-row>
                        </v-col>


                    </v-row>
                </v-form>


            </v-col>

        </v-row>



        <v-row v-if="this.testType && this.testType.toLowerCase().includes('dpdk-core-libraries')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <DPDKLibCoreReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :runOptions="runOptions" :records="records"
                        :showChart=true ref="dpdk_libcore" :platformProfile="platformProfile"></DPDKLibCoreReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>

        <v-row
            v-else-if="this.testType && this.testType.toLowerCase().includes('nic-io-testpmd') || this.testType.toLowerCase().includes('dpdk-l3fwd') || this.testType.toLowerCase().includes('dpdk-l2fwd') || this.testType.toLowerCase().includes('dpdk-ipsec-secgw')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <DPDKTestPmdReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :runOptions="runOptions" :records="records"
                        ref="nic-io-testpmd" :platformProfile="platformProfile">
                    </DPDKTestPmdReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-if="this.testType && this.testType.toLowerCase().includes('srsran')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <SrsRanReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :runOptions="runOptions" :records="records"
                        :showChart=true ref="srsran" :platformProfile="platformProfile"></SrsRanReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('tpc-ds')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container fluid>
                    <TPCDSReport :results="this.selectedResultInfo" :runOptions="runOptions" ref="TPC-DS"
                        :key="selectedResultInfo" :platformProfile="platformProfile">
                    </TPCDSReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>

        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('iperf')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <IperfReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :runOptions="runOptions" :key="templateData.benchmarkExecutionID" ref="iPerf"
                        :platformProfile="platformProfile">
                    </IperfReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('isa-l-crypto')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <ISALCryptoReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :isalCryptoHeaders="isalCryptoHeaders"
                        :isalCryptoItems="medAvgISALCryptoData" :showISALCrypto="showISALCrypto" ref="isal_crypto"
                        :platformProfile="platformProfile">
                    </ISALCryptoReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('lzbench')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <LZBenchCompressionReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :LZHeaders="LZHeaders" :LZItemsAVG="LZItemsAVG"
                        :LZItemsMED="LZItemsMED" :showLZBench="showLZBench" ref="lz_bench"
                        :platformProfile="platformProfile"></LZBenchCompressionReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('speedtest')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <OpensslSpeedTestReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :openSSLHeaders="openSSLHeaders"
                        :openSSLItemsAVG="openSSLItemsAVG" :openSSLItemsMED="openSSLItemsMED" :showOpenSSL="showOpenSSL"
                        ref="openssl" :platformProfile="platformProfile">
                    </OpensslSpeedTestReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('integrity')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <ISALIntegrityReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :isalheaders="isalheaders" :isalItems="medAvgISALData"
                        :showISAL="showISAL" ref="isal_integrity" :platformProfile="platformProfile">
                    </ISALIntegrityReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('dpdk-crypto') && !this.isMultiInstanceResult && this.resultFormat != 'AUGMENTED_RESULTS'">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-row>
                    <v-col>
                        Change chart mode: <v-switch :label="selectedChartMode" v-model="chartmodeSelection"></v-switch>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span style="max-width: 150px; display: inline-block;  margin-right: 30px;">Platform
                            Details :</span>
                        <v-icon v-on:click="download('platformDetails', platformProfile)">mdi-download</v-icon>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-container fluid v-for="(item, index) in this.selectedResultInfo" :key="index">
                            <p>Result for Iteration {{ item && item.run }}
                                <v-btn dark class="mr-4" width="205px" style="margin-left:200px"
                                    @click="downloadExcelSheet()" v-if="item.run === 1">
                                    EXPORT</v-btn>
                                <v-btn dark v-if="getBatchId !== '' && item.run === 1" class="mr-4" width="205px"
                                    @click="downloadBatchRun()">
                                    EXPORT BATCHRUN</v-btn>
                            </p>
                            <ExtendedDPDKResults :statistics="item && item.statistics"
                                :selectedChartMode='selectedChartMode' :key="templateData.benchmarkExecutionID + index"
                                :runOptions="runOptions" :cpuModel="cpuModel" :showChart=true
                                :selectedResultInfo="selectedResultInfo" :records="records" ref="dpdk_extended">
                            </ExtendedDPDKResults>
                            <v-divider></v-divider>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('phoronix test suite')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <PhoronixVisualization :results="this.selectedResultInfo" :workloadProfile="this.workloadProfile"
                        :platformProfile="this.platformProfile">
                    </PhoronixVisualization>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-row v-else-if="this.testType && this.testType.toLowerCase().includes('netperf')">
            <v-col col="12" md="12" sm="12" class="cls">
                <v-container>
                    <NetperfReport :results="this.selectedResultInfo" :logInfo="this.testData.logsInfo"
                        :key="templateData.benchmarkExecutionID" :runOptions="runOptions" :records="records"
                        :showChart=true ref="net_perf" :platformProfile="platformProfile">
                    </NetperfReport>
                    <v-divider></v-divider>
                </v-container>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <div v-else-if="this.isMultiSUTResult===true && this.resultFormat == 'AUGMENTED_RESULTS'">
            <OpnSweepMultiSUTVisualization :currentTestChartOptions="currentTestChartOptions"
                :currentTestHeaders="this.currentTestHeaders" :currentTestBody="currentTestBody"
                :workloadProfile="this.workloadProfile" :platformProfile="this.platformProfile"
                :multiSUTResults="multiSUTResults" :results="templateData.resultsInfo" type="multiSut">
            </OpnSweepMultiSUTVisualization>
        </div>
        <div v-else-if="this.isMultiInstanceResult===true && this.resultFormat == 'AUGMENTED_RESULTS'">
            <OpnSweepMultiSUTVisualization :currentTestChartOptions="currentTestChartOptions"
                :currentTestHeaders="this.currentTestHeaders" :currentTestBody="currentTestBody"
                :workloadProfile="this.workloadProfile" :platformProfile="this.platformProfile"
                :multiSUTResults="multiSUTResults" :results="templateData.resultsInfo" type="multiInstance">
            </OpnSweepMultiSUTVisualization>
        </div>
        <div v-else-if="!this.excludeDpdkBenchmarks.map(e => e.toLowerCase()).includes(this.testType.toLowerCase())">
            <v-row>
                <v-col col="12" md="12" sm="12" class="cls">
                    <p>Current Test</p>
                    <highcharts :options="currentTestChartOptions"></highcharts>
                </v-col>
                <v-divider vertical v-if="show3"></v-divider>
            </v-row>
            <v-row>
                <v-col col="12" md="12" sm="12" class="cls">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead v-bind:style="{ 'background-color': 'black', }">
                                <tr>
                                    <th v-for="( header, index ) in currentTestHeaders" :key="index" class="text-left"
                                        v-bind:style="{ color: 'white', }">
                                        {{ header }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index2) in currentTestBody" :key="index2">
                                    <td>{{ index2 + 1 }}</td>
                                    <td v-for="(cell, index3) in row" :key="index3">
                                        {{ cell }}
                                    </td>
                                    <td :rowspan="workloadProfile.length" v-if="index2 === 0">
                                        <v-icon v-on:click=" download('platformDetails', platformProfile)">
                                            mdi-download
                                        </v-icon>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
                <v-divider vertical v-if="show3"></v-divider>
            </v-row>
            <v-row style="padding: 0px 15px;" v-if="showAvgMdn">
                <v-col cols="12" md="12" sm="12" style="background-color: #CCCCCC;margin-top: 15px;">
                    <h3>Average and Median Analysis</h3>
                </v-col>
                <v-data-table :items-per-page="10" :headers="headers" hide-default-footer style="width: 100%;"
                    :items="medAvgData">
                </v-data-table>

            </v-row>

            <v-row v-if="isShowPowerData" style="padding: 20px 0px;">
                <div style="background-color: #CCCCCC;width: 100%;">
                    <h3>&nbsp;&nbsp;Power Information</h3>
                </div>
                <v-data-table :items-per-page="10" :headers="powerDataHeaders" hide-default-footer style="width: 100%;"
                    :items="powerData">
                </v-data-table>
            </v-row>

        </div>
        <v-row>
            <v-col>

            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </div>


</template>
<script>
import { mapState } from "vuex";
import apiClient from "../service/apiService";
import { config } from "../config";
import { Chart } from "highcharts-vue";
// import api from "@/service/apiService";
import api from "../service/apiService";
import ExtendedDPDKResults from "@/components/reports/ExtendedDPDKResults.vue";
import DPDKLibCoreReport from "@/components/reports/DPDKLibCoreReport.vue";
import DPDKTestPmdReport from "@/components/reports/DPDKTestPmdReport.vue";
import TPCDSReport from "@/components/reports/TpcDsReport.vue";
import ISALIntegrityReport from "@/components/reports/ISALIntegrityReport.vue";
import LZBenchCompressionReport from "@/components/reports/LZBenchCompressionReport.vue";
import ISALCryptoReport from "@/components/reports/ISALCryptoReport.vue";
import OpensslSpeedTestReport from "@/components/reports/OpensslSpeedTestReport.vue";
import OpnSweepMultiSUTVisualization from "@/components/reports/OpnSweepMultiSUTVisualization.vue";
import PhoronixReport from '@/components/reports/PhoronixReport.vue';
import PhoronixVisualization from '@/components/reports/PhoronixVisualization.vue';
import IperfReport from "@/components/reports/IperfReport.vue";
import RunConfigurationTableComponent from "@/components/RunConfigurationTable.vue";
import PlatformProfileTableComponent from "@/components/PlatformProfileTable.vue";
import { deleteKeysFromRunconfig } from "../utils/index";
import { download, view, toolTip } from "../components/reports/chatUtils";
import SrsRanReport from "@/components/reports/SrsRanReport.vue";
import PlatformCompare from './compare/PlatformCompare.vue';
import NetperfReport from '@/components/reports/NetperfReport.vue'
export default {
    name: "CompletedTestResultsDialogTab",
    props: {
        records: {
            type: Object,
            default: () => { },
        },
        getrefreshData: {
            type: Function
        }
    },
    components: {
        highcharts: Chart,
        ExtendedDPDKResults,
        DPDKLibCoreReport,
        DPDKTestPmdReport,
        TPCDSReport,
        ISALIntegrityReport,
        LZBenchCompressionReport,
        ISALCryptoReport,
        OpensslSpeedTestReport,
        IperfReport,
        RunConfigurationTableComponent,
        PlatformProfileTableComponent,
        PhoronixReport,
        SrsRanReport,
        PhoronixVisualization,
        OpnSweepMultiSUTVisualization,
        PlatformCompare,
        NetperfReport
    },
    async mounted() {
        this.platformProfileKeys=Object.keys(this.platformProfileData)
        this.platformProfileKeys.forEach((element,index) => {
            this.platformProfileValues[element]=this.records['platformProfile']['Summary'][this.platformProfileData[element][0]][this.platformProfileData[element][1]];
        })
        let cpuValue = parseInt(this.records['platformProfile']['Summary']["CPU"]["Core(s)PerSocket"]) * parseInt(this.records['platformProfile']['Summary']["CPU"]["Socket(s)"]);
        this.platformProfileValues["# of CPU Cores"] = cpuValue !== NaN ? cpuValue: "-";
        this.showPTS = this.records.benchmarkName == "Phoronix Test Suite" ? true : false;
        this.checkUserRole();
        this.roleConfig = config;
        await this.setData();
    },
    data() {
        return {
            isMultiInstanceResult:null,
            invalidDialog: false,
            lockoutResultLabel: "Mark result as Invalid",
            lockoutResult: false,
            invalidRunComment: "",
            platformProfileKeys:[],
            platformProfileValues:{},
            isMultiSUTResult: false,
            resultFormat: "",
            originalRunsArr: [],
            multiSUTResults: [],
            showPTS: false,
            modelLogLink: "",
            stats: false,
            currentTestChartOptions: {
                chart: {
                    type: "column",
                },
                credits: {
                    enabled: false,
                },
                xAxis: {
                    categories: [],
                    crosshair: true,
                },
                yAxis: {
                    min: 0,
                },

                tooltip: {
                    headerFormat:
                        '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat:
                        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: "</table>",
                    shared: true,
                    useHTML: true,
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                    },
                },
                series: [],
                title: "",
            },
            chartmodeSelection: false,
            multiSUTNodes: 0,
            selectedChartMode: this.chartmodeSelection ? "Cycles/Buf" : "Throughput(Gbps)",
            dialog: false,
            isEditData: false,
            name: "",
            groupName: "",
            groupNameEdit: "",
            testType: "",
            testName: "",
            templateData: [],
            modelCPUModel: "",
            runType: "",
            runOptions: "",
            publishStatus: "",
            dataEntitlementTagValue: "",
            ErrorMessageDataTag: false,
            selectedResultInfo: [],
            showPublishResult: false,
            leftSideTable: false,
            show3: false,
            cpuModel: "",
            createdBy: "",
            dataEntitlementTag: [],
            nameEdit: "",
            runTypeEdit: "",
            requiredFields: [(value) => value === 0 || !!value || "Required."],
            alldataEntitlements: [],
            dataentitlementValueTag: "",
            currentTestBody: [],
            currentTestHeaders: [],
            x_axis: [],
            x_axis_baseline: [],
            y_axis: [],
            t: [],
            p: [],
            q: [],
            currentTest: [],
            workloadProfile: [],
            createdDate: "",
            resultsFortest: [],
            platformProfile: {},
            logsLink: "",
            executionLog: "",
            resultMongoId: "",
            showDelete: false,
            successSnackbar: false,
            successSnackbarText: "",
            successSnackbarTimeout: 5000,
            snackbarStatus: "dark",
            runConfigurations: {},
            getBatchId: '',
            isAutomatedBenchmarkRun: false,
            testDate: null,
            showAvgMdn: false,
            showISAL: false,
            showISALCrypto: false,
            showLZBench: false,
            showOpenSSL: false,
            swLZBench: false,
            swOpenSSL: false,
            platformProfileData:{
                Manufacturer: ["Server", "Manufacturer"],
                Model: ["Server", "CPUModel"],
                SKU: ["Server", "SKU"],
                "Socket(s)": ["CPU", "Socket(s)"],
                "No of Threads": ["CPU", "CPU(s)"],
                "NUMAnode(s)": ["OS", "NUMAnode(s)"],
                OperatingSystem: ["OS", "OperatingSystem"],
                SystemType: ["OS", "SystemType"],
                Kernel: ["OS", "Kernel"],
                HypervisorVendor: ["OS", "HypervisorVendor"],
                BIOSVersion: ["BIOS", "BIOSVersion"],
                ProductName: ["Server", "Model"],
                Memory: ["Memory", "Total"],
            },
            medAvgData: [],
            medAvgISALData: [],
            medAvgISALCryptoData: [],
            medAvgLZBenchData: [],
            LZItemsAVG: [],
            LZItemsMED: [],
            openSSLItemsAVG: [],
            openSSLItemsMED: [],
            excludeDpdkBenchmarks: ['NIC-IO-TESTPMD', "iPerf3", 'iPerf', 'DPDK-TESTPMD', 'DPDK-L3FWD', 'DPDK-L2FWD', 'DPDK-IPsec-SecGW', 'DPDK-Crypto', 'DPDK-CORE-LIBRARIES', 'srsRAN', 'Netperf-TCP-SENDFILE', 'NetPerf'],
            excludeBenchmarks: ['NIC-IO-TESTPMD', "iPerf3", 'iPerf', 'DPDK-TESTPMD', 'DPDK-L3FWD', 'DPDK-L2FWD', 'DPDK-IPsec-SecGW', 'DPDK-Crypto', 'DPDK-CORE-LIBRARIES', 'srsRAN', 'Netperf-TCP-SENDFILE', 'NetPerf', "LZBench-Compression", "ISA-L-INTEGRITY", "ISA-L-CRYPTO", "Openssl-SpeedTest"],
            headers: [
                {
                    text: "Measures",
                    align: "start",
                    sortable: false,
                    value: "title",
                    class: "black white--text",
                }
            ],
            isalCryptoHeaders: [
                {
                    text: "Measures",
                    align: "start",
                    sortable: false,
                    value: "title",
                    class: "black white--text",
                }
            ],
            isalheaders: [
                {
                    text: "Average",
                    align: "start",
                    sortable: false,
                    value: "average",
                    class: "black white--text",
                },
                {
                    text: "Median",
                    align: "start",
                    sortable: false,
                    value: "median",
                    class: "black white--text",
                },
            ],
            LZHeaders: [
                {
                    text: "Metrics Name",
                    align: "start",
                    sortable: false,
                    value: "MetricsName",
                    class: "black white--text",
                },
                {
                    text: "Compress",
                    align: "start",
                    sortable: false,
                    value: "Compress",
                    class: "black white--text",
                },
                {
                    text: "Decompress",
                    align: "start",
                    sortable: false,
                    value: "Decompress",
                    class: "black white--text",
                },
            ],
            openSSLHeaders: [
                {
                    text: "Keys",
                    align: "start",
                    sortable: false,
                    value: "Keys",
                    class: "black white--text",
                },
                {
                    text: "16",
                    align: "start",
                    sortable: false,
                    value: "16",
                    class: "black white--text",
                },
                {
                    text: "64",
                    align: "start",
                    sortable: false,
                    value: "64",
                    class: "black white--text",
                },
                {
                    text: "256",
                    align: "start",
                    sortable: false,
                    value: "256",
                    class: "black white--text",
                },
                {
                    text: "1024",
                    align: "start",
                    sortable: false,
                    value: "1024",
                    class: "black white--text",
                },
                {
                    text: "8192",
                    align: "start",
                    sortable: false,
                    value: "8192",
                    class: "black white--text",
                },
                {
                    text: "16384",
                    align: "start",
                    sortable: false,
                    value: "16384",
                    class: "black white--text",
                }
            ],

            powerData: [],
            isShowPowerData: false,
            powerDataHeaders: [
                {
                    text: "Iteration",
                    align: "start",
                    sortable: false,
                    value: "iteration",
                    class: "black white--text",
                },
                {
                    text: "Power Captured (watt-hour)",
                    align: "start",
                    sortable: false,
                    value: "value",
                    class: "black white--text",
                },
                {
                    text: "Iteration Run Time (minutes)",
                    value: "iterationRunTimeInMins",
                    class: "black white--text",
                    width: "22%",
                }
                ,
                {
                    text: "Iteration Start Time",
                    class: "black white--text",
                    value: "startTime",
                    width: "22%",
                },
                {
                    text: "Iteration End Time",
                    value: "endTime",
                    class: "black white--text",
                    width: "22%",
                }
            ],
            roleConfig: {},
            hideLogs: false,
            hideCustomTag: false
        }
    },
    methods: {
        closeInvalidDialog() {
            this.invalidDialog = false;
            this.invalidRunComment = "";
        },
        getNestedValue(obj, pathArray) {
            return pathArray.reduce((acc, key) => acc?.[key], obj);
        },
        async lockoutFn() {
            if (this.$refs.invalidRunForm.validate()) {
                try {
                    console.log(this.invalidRunComment, "secured.");
                    let _id = this.records._id;
                    let lockoutInputs = {
                        "lockout": !this.lockoutResult,
                        "comments": this.invalidRunComment
                    }
                    console.log(_id, "_id");
                    console.log(lockoutInputs, "lockoutInputs");
                    const response = await apiClient.setLockoutBenchmarkResult(_id, lockoutInputs);
                    console.log(response, "locked out resp");
                    this.lockoutResult = response?.data?.Data?.isResultLockout;
                    console.log(this.lockoutResult);
                    this.invalidDialog = false;
                    this.invalidRunComment = "";

                    if (response) {
                        this.$store.commit("SET_commonAlertDetails", {
                            showAlert: true,
                            alertType: "success",
                            alertMessage: "Result Lock updated successfully",
                        });
                    } else {
                        console.log("no response");
                    }

                    setTimeout(() => {
                        this.getrefreshData();
                    }, 500);
                } catch (error) {
                    console.log(error);
                    this.$store.commit("SET_commonAlertDetails", {
                        showAlert: true,
                        alertType: "error",
                        alertMessage: error,
                    });
                }
            }
        },
        stringifyKernelInfo(obj) {
            console.log(obj);
            if (obj.runConfigurations && obj.runConfigurations.kernelInfos) {
                obj.runConfigurations.kernelInfos = JSON.stringify(obj.runConfigurations.kernelInfos);
            }
            return obj;
        },
        ptsReportLink() {
            const url = window.location.origin + "/phoronixTestReport?batchId=" + this.records.batchId;
            window.open(url, "_target");
        },
        checkUserRole() {
            this.forNormalUser = window.localStorage['role'] != undefined && window.localStorage['role'].toLowerCase() == "normal" ? true : false;
            this.stats = this.forNormalUser ? true : false;
        },
        closeDialog() {
            this.dialog = false;
            this.medAvgData = [];
            this.medAvgISALData = [];
            this.medAvgISALCryptoData = [];
            this.LZItemsAVG = [];
            this.LZItemsMED = [];
            this.headers = [];
        },
        openDialog() {
            this.dialog = true;
        },
        closeFormEdit() {
            this.isEditData = false;
            if (this.runTypeEdit !== "") {
                this.runTypeEdit = "";
            }
        },
        jsonValuedataEntitlementTagListLevelOneValue(dataEntitlementsTags) {

        },
        async saveFormEdit() {
            try {
                const customTag = this.runTypeEdit;
                const resultId = this.records._id;
                const data = {
                    runConfigRunType: customTag
                }
                const resp = await apiClient.updateResultFields(resultId, data);
                if (resp.data && resp.data.ErrorCode === 0) {
                    this.runType = this.runTypeEdit;
                    this.$store.commit("SET_commonAlertDetails", {
                        showAlert: true,
                        alertType: "success",
                        alertMessage: resp.data?.Message,
                    });
                    this.isEditData = false;
                    this.getrefreshData();
                } else {
                    var message = resp?.data?.Message;
                    this.saveBaselineResponseMessage =
                        `<b style='color: red'>Failed :: ${message}</b>`;
                    this.$store.commit("SET_commonAlertDetails", {
                        showAlert: true,
                        alertType: "error",
                        alertMessage: message,
                    });
                }

            } catch (error) {
                var message = error?.response?.data?.Message;
                this.saveBaselineResponseMessage =
                    `<b style='color: red'>Failed :: ${message}</b>`;
                this.$store.commit("SET_commonAlertDetails", {
                    showAlert: true,
                    alertType: "error",
                    alertMessage: message,
                });
            }

        },
        restDataEntitleMent(val) {
            try {


            } catch (error) {
                //console.log(error)
            }
        },
        async showConfirmPublish() {
            if (
                await this.$root.$confirm.open(
                    "Publish Result",
                    `This will publish the result to "EPYC Performance Dashboard". Please check the result data that you want to publish is verified and correct.`,
                    { color: "black", width: "400px", style: "{'padding-top':'10px'}" }
                )
            ) {
                const response = await this.publishResult();

                if (response?.data?.Data) {
                    this.$store.commit("SET_commonAlertDetails", {
                        showAlert: true,
                        alertType: "success",
                        alertMessage: "Result updated with Publish status",
                    });
                } else {
                    this.$store.commit("SET_commonAlertDetails", {
                        showAlert: true,
                        alertType: "error",
                        alertMessage: "Failed to Publish Result",
                    });
                }
            }
        },
        showFormEdit() {
            this.isEditData = true;
            if (this.runType !== "") {
                this.runTypeEdit = this.runType;
            }
            //this.editOptionDataEntitlement = false
        },
        async downloadExcelSheet() {
            await this.$refs.dpdk_extended[0].downloadExcelSheet()
        },
        async downloadBatchRun() {
            await this.$refs.dpdk_extended[0].downloadBatchRun()
        },
        filterAllElementForAKey(resultInfo, keyElement) {
            return resultInfo.map((item) => {
                return (
                    item.statistics && parseFloat(item.statistics[keyElement])
                );
            });
        },
        transFormResultToNewFormat(resultInfo) {
            try {
                return resultInfo.map((item, index) => {
                    var statistics = item?.statistics;
                    var statisticsConverts = Array.isArray(statistics) && statistics.map((sitem, sindex) => {
                        var dataToReturn = {};
                        dataToReturn[sitem["metricsName"]] = sitem["metricsValue"];
                        return dataToReturn
                    })
                    if (Array.isArray(statistics)) {
                        item["statistics"] = Object.assign({}, ...statisticsConverts);
                    }
                    return item;
                })

            } catch (error) {
                throw error;
            }
        },
        async setData() {
            try {
                let records = this.records
                let batchid = records.batchId
                this.getBatchId = ''
                if (batchid) {
                    this.getBatchId = this.records.batchId
                } else {
                    this.getBatchId = ''
                }
                this.selectedResultInfo = null;
                this.showDelete = false
                this.name = this.records?.name
                this.nameEdit = this.records?.name
                this.groupNameEdit = this.records?.groupName
                this.createdDate = this.records?.createdOn
                this.testType = this.records?.benchmarkName == "Phoronix Test Suite" ? this.records?.benchmarkName : this.records?.benchmarkType
                this.testName = this.records?.benchmarkName;
                this.testName = this.testName === undefined || this.testName === null ? "" : this.testName;
                this.modelCPUModel = this.records?.cpuModel
                console.log(this.records, "recoords");
                this.isMultiSUTResult = this.records.isMultiSUTResult;
                this.isMultiInstanceResult = this.records.isMultiInstanceResult;
                this.lockoutResult = this.records.isResultLockout;
                this.resultFormat = this.records.resultFormat;
                if (Array.isArray(this.records.originalRuns)) {
                    this.originalRunsArr = this.records.originalRuns;
                    if (this.originalRunsArr.length > 0) {
                        console.log(this.originalRunsArr, "this.originalRunsArr");
                        let ids = this.originalRunsArr.join(',');
                        console.log(ids);
                        const res = await apiClient.getMultiSutResults(ids);
                        console.log(res.data.Data);
                        this.multiSUTResults = res.data.Data;
                    }
                }
                this.runOptions = JSON.stringify(this.records.runConfigurations);
                let updatedG = {};
                console.log(typeof this.records.runConfigurations.kernelInfos);
                if (typeof this.records.runConfigurations.kernelInfos === 'object') {
                    updatedG = this.stringifyKernelInfo(this.records);
                }
                this.runConfigurations = deleteKeysFromRunconfig(this.records.runConfigurations);
                console.log(this.runConfigurations, "this.runConfigurations");
                this.multiSUTNodes = this.runConfigurations?.nodes;
                if (this.isMultiInstanceResult === true) {
                    this.multiSUTNodes = this.runConfigurations?.workloadInstances;
                }

                this.x_axis = [];
                this.currentTestHeaders = [];
                this.currentTestBody = [];
                this.publishStatus = this.records.isPublishedToEPYC
                this.groupName = this.records.groupName
                this.templateData = this.records
                this.logsLink = this.records?.logsInfo;
                this.resultMongoId = this.records?._id;
                this.runType = this.records.customTag.toString();
                this.runTypeEdit = this.records.customTag.toString();

                if (this.records.resultType === "AUTOMATED") {
                    this.isAutomatedBenchmarkRun = true;
                    this.executionLog = this.records?.benchmark.jenkinsLogLink;
                } else {
                    this.executionLog = "";
                    this.isAutomatedBenchmarkRun = false;
                    this.testDate = this.records?.testDate;
                }
                var result = [];
                if (Array.isArray(this.records?.resultsInfo)) {
                    var arr = ["isa-l", "openssl-speedtest", "lzbench", "isa-lcrypto", "dpdk-crypto", 'dpdk-core-libraries','netperf', 'srsran', 'nic-io-testpmd', 'isa-l-crypto', 'tpc-ds', 'iperf', 'dpdk-l3fwd', 'dpdk-l2fwd', 'dpdk-ipsec-secgw', 'Phoronix Test Suite']
                    if (!this.isMultiInstanceResult && this.resultFormat != 'AUGMENTED_RESULTS') {
                        for (var i = 0; i < arr.length; i++) {
                            if (this.testType?.toLowerCase().includes(arr[i])) {
                                result.push(arr[i])
                            }
                        }
                    }
                    this.resultsFortest = result[0];
                    if (!this.testType.toLowerCase().includes(this.resultsFortest) && !this.testName.toLowerCase().includes("phoronix")) {
                        this.templateData.resultsInfo = this.transFormResultToNewFormat(this.records?.resultsInfo)
                    } else {
                        this.selectedResultInfo = this.templateData?.resultsInfo;
                    }
                }

                if (this.templateData?.dataEntitlementTag && this.templateData?.dataEntitlementTag !== undefined) {
                    this.selectedDataEntitlement = this.templateData?.dataEntitlementTag;
                    if (this.templateData?.dataEntitlementTagNames) {
                        this.dataEntitlementTagValue = this.templateData?.dataEntitlementTagNames.toString();
                    } else {
                        this.dataEntitlementTagValue = "";
                    }
                } else {
                    this.selectedDataEntitlement = "";
                    this.dataEntitlementTagValue = "";
                }

                this.createdBy = this.templateData?.benchmark?.createdBy?.email || this.templateData?.tester || "";
                this.testData = this.records;

                const entitlements = await api.getAllDataEntitlements();
                const dataEntitlements = entitlements?.data?.Data?.map((x) => {
                    return {
                        name: x.label,
                        value: x.name
                    }
                });
                this.alldataEntitlements = dataEntitlements;

                this.platformProfile = this.templateData.platformProfile;

                if (this.templateData?.resultsInfo?.length > 0) {
                    this.templateData.resultsInfo.map((item, index) => {
                        this.x_axis.push("Iteration " + item.run);
                        this.t.push(item.statistics.ThroughPutSize);
                        this.q.push(item.statistics.QphHSize);
                        this.p.push(item.statistics.PowerSize);
                        this.currentTest.push({
                            run: item.run,
                            QphHSize: item.statistics.QphHSize,
                            PowerSize: item.statistics.PowerSize,
                            ThroughPutSize: item.statistics.ThroughPutSize,
                            workloadDownload: item.workloadProfile,
                            workloadView: item.workloadProfile,
                            platformDownload: this.templateData.platformProfile,
                            platformView: this.templateData.platformProfile,
                        });

                        this.currentTestBody.push(Object.values(item.statistics));
                        if (this.testType.toLowerCase() == 'phoronix test suite') {
                            this.workloadProfile.push(
                                this.templateData.logsInfo +
                                "/WorkloadProfile/1"

                            )
                        }
                        else {
                            this.workloadProfile.push(
                                this.templateData.logsInfo +
                                "/WorkloadProfile/" +
                                (item.run)
                            )
                        }
                    });
                }


                this.currentTestHeaders.push("Iteration");
                if (this.templateData.resultsInfo && this.templateData.resultsInfo.length > 0) {
                    if (this.templateData.resultsInfo[0].statistics) {
                        Object.keys(this.templateData.resultsInfo[0].statistics).map(
                            (item) => {
                                this.currentTestHeaders.push(item);
                            }
                        );
                    }
                }
                this.currentTestHeaders.push("Platform");
                this.rowspanOfCurrentTest = this.workloadProfile.length;

                this.getPowerData(this.testData);
                var originalResultInfo = [...this.templateData.resultsInfo];

                if (this.isMultiSUTResult === true || this.isMultiInstanceResult === true) {
                    if (this.templateData?.originalRuns && this.templateData?.originalRuns.length > 0) {
                        this.hideLogs = true;
                        this.hideCustomTag = false;
                    } else {
                        this.hideLogs = false;
                        this.hideCustomTag = true;
                    }
                }

                let dataForHighcharts = new Array();
                if (originalResultInfo.length > 0) {
                    var resultInfoItem = originalResultInfo[0];
                    if (resultInfoItem.statistics) {
                        var keys = Object.keys(resultInfoItem.statistics);
                        for (let j = 0; j < keys.length; j++) {
                            let objToAppend2 = {};
                            const keysElement = keys[j];
                            objToAppend2["name"] = keysElement;
                            objToAppend2["data"] = this.filterAllElementForAKey(
                                originalResultInfo,
                                keysElement
                            );

                            dataForHighcharts.push(objToAppend2);
                        }
                    }
                }
                this.currentTestChartOptions.xAxis.categories = this.x_axis;
                this.currentTestChartOptions.series = dataForHighcharts;
                this.jsonValuedataEntitlementTagListLevelOneValue(this.records.dataEntitlementTag);
                if (localStorage['role'] === 'ADMIN') {
                    this.showDelete = true;
                }
                console.log("Chart Options", this.currentTestChartOptions);
                // to display median and average code

                let lowerCaseArr = this.excludeBenchmarks.map(e => e.toLowerCase());
                if (!lowerCaseArr.includes(this.records.benchmarkType.toLowerCase())) {
                    if (this.records?.resultsInfo.length > 0) {
                        let res = this.getResultInfosAverageMedianFn(this.records?.resultsInfo);
                        this.medAvgData = res;
                        if (this.medAvgData.length > 0) {
                            this.showAvgMdn = true;
                        }
                    }

                } else if (this.records.benchmarkType.toLowerCase().includes('integrity')) {
                    if (this.records?.resultsInfo.length > 0) {
                        let res = this.getAvgMedianISAFn(this.records?.resultsInfo);
                        // this.showISAL = true;
                        this.medAvgISALData = res;
                        if (this.medAvgISALData.length > 0) {
                            this.showISAL = true;
                        }
                    }
                } else if (this.records.benchmarkType.toLowerCase().includes('isa-l-crypto')) {
                    if (this.records?.resultsInfo.length > 0) {
                        const [averages, medians] = this.getAvgMedianISACryptoFn(this.records?.resultsInfo);
                        const result = [averages, medians];

                        let headerkey = Object.keys(result[0]);
                        this.isalCryptoHeaders = [];
                        this.isalCryptoHeaders.push({
                            text: "Measures",
                            align: "start",
                            sortable: false,
                            value: "title",
                            class: "black white--text",
                        },)
                        headerkey.forEach(x => {
                            if (x !== "title") {
                                this.isalCryptoHeaders.push(
                                    {
                                        text: x,
                                        value: x,
                                        class: "black white--text",
                                        align: "left",
                                        sortable: true
                                    })
                            }
                        });
                        // this.showISALCrypto = true;
                        this.medAvgISALCryptoData = result;
                        if (this.medAvgISALCryptoData.length > 0) {
                            this.showISALCrypto = true;
                        }
                    }
                }
                else if (this.records.benchmarkType.toLowerCase().includes('lzbench')) {
                    if (this.records?.resultsInfo.length > 0) {
                        const [averageResults, medianResults] = this.getAvgMedianLZBenchFn(this.records?.resultsInfo);
                        this.LZItemsAVG = averageResults;
                        this.LZItemsMED = medianResults;
                        if (this.LZItemsAVG.length > 0 || this.LZItemsMED.length > 0) {
                            this.showLZBench = true;
                        }
                    }
                } else if (this.records.benchmarkType.toLowerCase().includes('speedtest')) {
                    if (this.records?.resultsInfo.length > 0) {
                        const [averages, medians] = this.getAvgMedianOpenSSLFn(this.records?.resultsInfo);
                        let finalaverages = this.roundValues(averages);
                        // this.showOpenSSL = true;
                        this.openSSLItemsAVG = finalaverages;
                        this.openSSLItemsMED = medians;

                        if (this.openSSLItemsMED.length > 0 || this.openSSLItemsAVG.length > 0) {
                            this.showOpenSSL = true;
                        }
                    }
                }

                else {
                    this.showAvgMdn = false;
                }
            } catch (error) {
                console.log(error)
            }

        },
        roundValues(array) {
            return array.map(obj => {
                const newObj = {};
                for (const key in obj) {
                    if (typeof obj[key] === 'number') {
                        newObj[key] = Math.round(obj[key] * 100) / 100; // Rounding to 2 decimal points
                    } else {
                        newObj[key] = obj[key];
                    }
                }
                return newObj;
            });
        },
        calculateAverageAndMedian(dataArray) {
            // Initialize an array to store results
            let results = [];

            // Loop through each object in the array
            dataArray.forEach(data => {

                data.forEach(x => {

                    // Initialize arrays to store metric values
                    let metricsValue = [];

                    // Check if metricsName is "isa"
                    if (x.metricsName === "isal_data") {
                        // Extract metric values from the array of objects
                        x.metricsValue.forEach(obj => {
                            metricsValue.push(this.convertToNumber(obj.metricsValue));
                        });

                        // Calculate average
                        const sum = metricsValue.reduce((acc, val) => acc + val, 0);

                        const avgFinal = sum / metricsValue.length;
                        let average = parseFloat(avgFinal.toFixed(2));

                        // Calculate median
                        metricsValue.sort((a, b) => a - b);
                        let medFinal;
                        if (metricsValue.length % 2 === 0) {
                            medFinal = (metricsValue[metricsValue.length / 2 - 1] + metricsValue[metricsValue.length / 2]) / 2;
                        } else {
                            medFinal = metricsValue[Math.floor(metricsValue.length / 2)];
                        }
                        let median = parseFloat(medFinal.toFixed(2));

                        // Push average and median to the results array
                        results.push({ average, median });
                    } else {
                        // If metricsName is not "isa", push null values
                        results.push({ average: null, median: null });
                    }
                })
            });

            // Return the array of results
            return results;
        },

        getAvgMedianOpenSSLFn(data) {
            const avg = {};
            const med = {};

            // Iterate through each object in the data array
            data.forEach(obj => {
                obj.statistics.forEach(stat => {
                    if (stat.metricsName === "evp_data") {
                        stat.metricsValue.forEach(({ metricsName, metricBlocksize, metricValues }) => {
                            // Initialize an object for this metricsName if not exist
                            if (!avg[metricsName]) {
                                avg[metricsName] = {};
                            }
                            if (!med[metricsName]) {
                                med[metricsName] = {};
                            }
                            // Split the metricBlocksize string and iterate through each block size
                            metricBlocksize.split(', ').forEach((blockSize, index) => {
                                // Store the average value at the corresponding block size
                                avg[metricsName][blockSize] = (avg[metricsName][blockSize] || 0) + metricValues[index] / data.length;

                                const value = parseFloat(metricValues[index]);
                                med[metricsName][blockSize] = med[metricsName][blockSize] || { values: [], medians: [] };
                                med[metricsName][blockSize].values.push(value);

                            });
                        });
                    }
                });
            });

            // Calculate averages and medians
            for (const metricsName in med) {
                if (med.hasOwnProperty(metricsName)) {
                    for (const blockSize in med[metricsName]) {
                        if (med[metricsName].hasOwnProperty(blockSize)) {
                            const values = med[metricsName][blockSize].values;
                            const medians = med[metricsName][blockSize].medians = [];
                            med[metricsName][blockSize] = this.calculateSSLMedian(values);
                        }
                    }
                }
            }


            let averages = Object.entries(avg).map(([metricsName, values]) => (
                {
                    Keys: metricsName,
                    ...values
                }));
            let medians = Object.entries(med).map(([metricsName, values]) => ({
                Keys: metricsName,
                ...values
            }));

            return [averages, medians];
        },


        getAvgMedianLZBenchFn(data) {
            this.LZItemsAVG = [];
            this.LZItemsMED = [];
            const averages = [];
            const medians = [];

            // Iterate through each object in the data array
            data.forEach(obj => {
                obj.statistics.forEach(stat => {
                    if (stat.metricsName === "lzbench_data") {
                        stat.metricsValue.forEach(metrics => {
                            // Check if the metricsName value already exists
                            let index = averages.findIndex(item => item.MetricsName === metrics.metricsName);
                            if (index === -1) {
                                index = averages.length;
                                averages.push({ MetricsName: metrics.metricsName, Compress: [], Decompress: [] });
                                medians.push({ MetricsName: metrics.metricsName, Compress: [], Decompress: [] });
                            }

                            // Push metrics values to arrays for later calculation
                            averages[index].Compress.push(this.convertToNumber(metrics.metricsCompress));
                            averages[index].Decompress.push(this.convertToNumber(metrics.metricsDecompress));
                            medians[index].Compress.push(this.convertToNumber(metrics.metricsCompress));
                            medians[index].Decompress.push(this.convertToNumber(metrics.metricsDecompress));
                        });
                    }
                });
            });

            // Calculate average for each metricsName
            averages.forEach(item => {
                if (item.MetricsName == 'memcpy') {
                }
                item.Compress = this.calculateLZAverage(item.Compress);
                item.Decompress = this.calculateLZAverage(item.Decompress);
            });

            // Calculate median for each metricsName
            medians.forEach(item => {
                item.Compress = this.calculateLZMedian(item.Compress);
                item.Decompress = this.calculateLZMedian(item.Decompress);
            });

            // Convert averages and medians to the required format
            const averageResults = averages.map(item => ({
                Compress: item.Compress,
                Decompress: item.Decompress,
                MetricsName: item.MetricsName
            }));

            const medianResults = medians.map(item => ({
                Compress: item.Compress,
                Decompress: item.Decompress,
                MetricsName: item.MetricsName
            }));

            return [averageResults, medianResults];
        },

        getAvgMedianISAFn(data) {
            this.medAvgISALData = [];
            let resultsInfo = data;
            let arrayOfObjects = [];
            resultsInfo.forEach(x => {
                arrayOfObjects.push(x.statistics);

            });

            let sums = {};
            // Object to store count of occurrences for each key
            let counts = {};
            // Iterate through the array of objects
            // let obj = x.statistics;
            let res;
            let arr = [];
            arrayOfObjects.forEach(obj => {
                arr.push(obj)
            });
            res = this.calculateAverageAndMedian(arr);

            return res;

        },
        hasDecimal(num) {
            try {
                return num.toString().includes('.');
            } catch (ex) {
                return false;
            }

        },
        convertObjectToNumbers(obj) {
            let newObj = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    newObj[key] = this.convertToNumber(obj[key]);
                }
            }
            return newObj;
        },
        convertToNumber(value) {
            if (typeof value === 'string') {
                let parsedValue = parseFloat(value);
                if (!isNaN(parsedValue)) {
                    return parsedValue;
                } else {
                    return 0;
                }
            } else {
                return value;
            }
        },
        getResultInfosAverageMedianFn(resultsInfo) {
            this.medAvgData = [];
            let arrayOfObjects = [];
            // if (Object.keys(resultsInfo.statistics).length > 0) {
            resultsInfo.forEach(x => {
                arrayOfObjects.push(x.statistics);

            });

            let convertedArrayOfObjects = arrayOfObjects.map(this.convertObjectToNumbers);

            // }
            let arr = [];
            let sums = {};
            let counts = {};
            convertedArrayOfObjects.forEach(obj => {
                Object.keys(obj).forEach(key => {
                    // Update sum and count objects
                    sums[key] = (sums[key] || 0) + obj[key];
                    counts[key] = (counts[key] || 0) + 1;
                });
            });
            // Calculate average and median for each key
            let results = {};
            Object.keys(sums).forEach(key => {
                let average = sums[key] / counts[key];
                average = parseFloat(average.toFixed(2));
                // Extract values for the current key and sort them
                let values = convertedArrayOfObjects.map(obj => obj[key]).sort((a, b) => a - b);
                let median;
                const sortedArr = values.sort((a, b) => a - b);
                const mid = Math.floor(sortedArr.length / 2);
                if (sortedArr.length % 2 === 0) {
                    median = parseFloat(((sortedArr[mid - 1] + sortedArr[mid]) / 2).toFixed(2));
                } else {
                    let finalMedian = parseFloat(sortedArr[mid]);
                    median = this.hasDecimal(sortedArr[mid]) ? finalMedian.toFixed(2) : sortedArr[mid];
                    median = parseFloat(median);
                }
                if (isNaN(median)) {
                    median = 0;
                }
                results[key] = { average, median };
            });
            // Objects to store averages and medians
            const averages = {};
            const medians = {};
            // Iterate through each key in the data object
            for (const key in results) {
                if (results.hasOwnProperty(key)) {
                    averages[key] = results[key].average;
                    medians[key] = results[key].median;
                }
            }
            // Combine averages and medians objects into one array
            averages.title = "Average";
            medians.title = "Median";
            const result = [averages, medians];
            let headerkey = Object.keys(result[0]);
            // headerkey.unshift({title:"Average", title:"Median"});
            this.headers = [];
            this.headers.push({
                text: "Measures",
                align: "start",
                sortable: false,
                value: "title",
                class: "black white--text",
            },)
            headerkey.forEach(x => {
                if (x !== "title") {
                    this.headers.push(
                        {
                            text: x,
                            value: x,
                            class: "black white--text",
                            align: "left",
                            sortable: true
                        })
                }
            });
            return result;
        },

        getAvgMedianISACryptoFn(data) {
            this.medAvgISALCryptoData = [];
            let averages = {};
            let medians = {};

            data.forEach(obj => {
                obj.statistics.forEach(stat => {
                    if (stat.metricsName === "isal_data") {
                        stat.metricsValue.forEach(metric => {
                            if (!averages[metric.metricNames]) {
                                averages[metric.metricNames] = [];
                            }
                            averages[metric.metricNames].push(this.convertToNumber(metric.metricValues));
                        });
                    }
                });
            });

            for (let key in averages) {
                let values = averages[key];
                let sum = values.reduce((acc, val) => acc + val, 0);
                let avg = sum / values.length;
                let median = this.calculateMedian(values);

                averages[key] = parseFloat(avg.toFixed(2));
                medians[key] = parseFloat(this.convertToNumber(median).toFixed(2));
            }
            averages.title = "Average";
            medians.title = "Median";

            return [averages, medians];

        },
        calculateMedian(arr) {
            const sortedArr = arr.sort((a, b) => a - b);
            const mid = Math.floor(sortedArr.length / 2);
            return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
        },

        calculateSSLMedian(arr) {
            const sortedArr = arr.map(Number).sort((a, b) => a - b);
            const mid = Math.floor(sortedArr.length / 2);
            let median = sortedArr.length % 2 === 0 ? parseFloat(((sortedArr[mid - 1] + sortedArr[mid]) / 2).toFixed(2)) : parseFloat(sortedArr[mid].toFixed(2));
            return median;
        },
        calculateLZAverage(arr) {
            const sum = arr.reduce((acc, val) => acc + val, 0);
            let avgresult = parseFloat((sum / arr.length).toFixed(2));
            return avgresult;
            // return sum / arr.length;
        },
        calculateLZMedian(arr) {
            const sortedArr = arr.slice().sort((a, b) => a - b);
            const mid = Math.floor(sortedArr.length / 2);
            if (sortedArr.length % 2 === 0) {
                return parseFloat(((sortedArr[mid - 1] + sortedArr[mid]) / 2).toFixed(2));
            } else {
                return sortedArr[mid];
            }
        },
        view(data, isWorkload = false) {
            if (isWorkload) {
                window.open(data, "_target");
            } else {
                var myJson = JSON.stringify(data, null, 2);
                var x = window.open();
                x.document.open();
                x.document.write(
                    "<html><body><pre>" + myJson + "</pre></body></html>"
                );
                x.document.close();
            }
        },
        download(val, data, isWorkload = false) {
            let text = JSON.stringify(data);
            let filename = val + ".json";
            let element = document.createElement("a");
            element.setAttribute(
                "href",
                "data:application/json;charset=utf-8," +
                encodeURIComponent(text)
            );
            element.setAttribute("download", filename);

            element.style.display = "none";
            document.body.appendChild(element);

            element.click();
            document.body.removeChild(element);
        },
        showLogs() {
            window.open(this.logsLink, "_target");
        },
        showExecutionLogs() {
            window.open(this.executionLog, "_target");
        },
        navigateToArtifacts() {
            if (this.isMultiSUTResult == true) {
                window.open(`viewartifacts?id=${this.templateData._id}&multisut=true`, "_target");
            } else if(this.isMultiInstanceResult == true) {
                window.open(`viewartifacts?id=${this.templateData._id}&multiinstance=true`, "_target");
            } else {
                window.open(`viewartifacts?id=${this.templateData.benchmarkExecutionID}`, "_target");
            }
        },
        async downloadArtifacts() {

            try {
                this.$store.commit("SET_pageLoadingState", true);
                let resp;
                if(this.isMultiSUTResult == true){
                    resp = await apiClient.downloadArtifacts(this.resultMongoId, this.isMultiSUTResult);
                } else if(this.isMultiInstanceResult == true){
                    resp = await apiClient.downloadArtifacts(this.resultMongoId, this.isMultiInstanceResult);
                } else {
                    resp = await apiClient.downloadArtifacts(this.resultMongoId);
                }
                const _blob = await resp.blob();
                const blobUrl = window.URL.createObjectURL(_blob);

                let element = document.createElement("a");
                element.href = blobUrl;
                element.setAttribute("download", `${this.name}.zip`);

                element.style.display = "none";
                document.body.appendChild(element);

                element.click();
                window.URL.revokeObjectURL(blobUrl);
                document.body.removeChild(element);
                this.$store.commit("SET_pageLoadingState", false);
            } catch (ex) {
                console.log(ex.message);
                this.$store.commit("SET_pageLoadingState", true);
            }

        },
        async deleteResult() {
            if (
                await this.$root.$confirm.open(
                    "Delete Result",
                    `Are you sure to delete Benchmark Result. This will delete the Benchmark result and artifacts`,
                    { color: "black" }
                )
            ) {
                const resultId = this.records._id;
                const resultType = this.records.resultType;
                try {
                    const resp = await api.deleteResult(resultId, resultType);
                    if (resp?.data.ErrorCode === 0) {
                        this.successSnackbar = true;
                        this.successSnackbarText = "Result was deleted successfully. Page will be refreshed.";
                        this.snackbarStatus = "success";

                        setTimeout(() => {
                            this.dialog = false;
                            this.getrefreshData();
                        }, 1000)
                    } else {
                        this.successSnackbar = true;
                        this.successSnackbarText = "There was an error. Please try after some time.";
                        this.snackbarStatus = "danger";
                    }
                } catch (ex) {
                    this.successSnackbar = true;
                    this.successSnackbarText = "There was an error. Please try after some time.";
                    this.snackbarStatus = "danger";
                }

            }
        },
        async downloadCrytpo() {
            await download(this.testData.logsInfo);
        },
        // viewCrypto() {
        //     view(this.testData.logsInfo);
        // },
        getPowerData(result) {
            const benchmarkRunTimings = result?.BenchmarkRunTimings;
            const powerConsumptionInfo = result?.powerConsumptionInfo;
            const powerArr = [];
            try {
                if (powerConsumptionInfo && Array.isArray(powerConsumptionInfo) && powerConsumptionInfo.length > 0) {
                    powerConsumptionInfo.map(x => {
                        this.isShowPowerData = true;
                        const iteration = x.iteration;
                        x["value"] = parseFloat(x["value"]).toFixed(2);
                        x["iterationRunTimeInMins"] = parseFloat(x["iterationRunTimeInMins"]).toFixed(2);
                        const benchmarkTimingIterationName = `Masterscript_run${iteration}`;
                        if (benchmarkRunTimings && Array.isArray(benchmarkRunTimings) && benchmarkRunTimings.length > 0) {
                            const timingRecord = benchmarkRunTimings.filter(y => {
                                if (y.event === benchmarkTimingIterationName) {
                                    return y;
                                }
                            })
                            if (timingRecord.length > 0) {
                                powerArr.push({ ...x, ...timingRecord[0] });
                            } else {
                                powerArr.push(x);
                            }
                        } else {
                            powerArr.push(x);
                        }
                    });
                } else {
                    this.isShowPowerData = false;
                }
            } catch (e) {
                console.log(e);
            }

            this.powerData = powerArr;
        }
    },
    watch: {
        records: function (val) {
            this.setData()
        },
        lockoutResult: function (val) {
            this.lockoutResultLabel = val === true ? "Mark result as Valid" : "Mark result as Invalid";
        },
        chartmodeSelection: function (val) {
            try {
                this.selectedChartMode = val ? "Cycles/Buf" : "Throughput(Gbps)"
            } catch (error) {
                console.log(error);
            }
        }
    }
}


</script>
<style>
.fixed-button {
    position: fixed;
    bottom: 20px;
    /* Adjust the desired distance from the bottom */
    right: 20px;
    /* Adjust the desired distance from the right */
    z-index: 1000;
    /* Adjust the z-index to ensure it's above other elements */
}
</style>