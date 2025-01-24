


 
     export const data = 
      [  {
            "_id": "66544a2e830f3250ef3f1e2d",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [
                    "EPDW_PUBLIC_VIA_3RD_PARTY_SITES"
                ],
                "levelToBeUpgraded": [
                    "EPDW_TEST_GROUP_ONLY"
                ],
                "requestedBy": "manikanta.s@amd.com",
                "approvers": [
                    {
                        "_id": "6656bc1d5455d5700827d3f8",
                        "email": "keerthana.sanala@amd.com",
                        "approvalRequests": [
                            {
                                "status": "APPROVED",
                                "timestamp": "2024-05-29T05:19:22.206Z",
                                "comment": "Approved",
                                "_id": "6656bc1d5455d5700827d3f9"
                            }
                        ]
                    },
                    {
                        "_id": "6656bc1d5455d5700827d3fa",
                        "email": "pratyusha.tummale@amd.com",
                        "approvalRequests": [
                            {
                                "status": "APPROVED",
                                "timestamp": "2024-05-29T05:19:22.206Z",
                                "comment": "APPROVED",
                                "_id": "6656bc1d5455d5700827d3fb"
                            }
                        ]
                    }
                ],
                "comments": "testing",
                "status": "CLOSE"
            },
            "platformProfile": {
                "platform_profiler_version": "Manual",
                "platform_profiler_timestamp": null,
                "Summary": {
                    "Server": {
                        "Model": "PowerEdge R7425",
                        "SKU": null,
                        "Manufacturer": "Dell Inc.",
                        "Health": "ok",
                        "CPUModel": "7501"
                    },
                    "BIOS": {
                        "BIOSVersion": "1.7.6",
                        "FirmwareVersion": "1.7.6",
                        "Microcode": null,
                        "BIOSWorkloadProfile": null,
                        "AgesaVersion": null,
                        "TransparentSME": null,
                        "ThermalConfig": null,
                        "SR-IOVSupport": null,
                        "SMTControl": null,
                        "L1StridePrefetcher": null,
                        "L1RegionPrefetcher": null,
                        "LocalApicMode": null,
                        "CorePerformanceBoost": null,
                        "FmaxBoostLimitControl": null,
                        "PowerProfile": null,
                        "MemoryInterleaving": null,
                        "MemoryRefreshRate": null,
                        "ProcessorC-States": null,
                        "3DV-Cache": null,
                        "LastLevelCacheAsNUMANode": null,
                        "NumaNodesPerSocket": null,
                        "DeterminismSlider": null,
                        "MaxMemoryClockSpeed": null,
                        "L1StreamHwPrefetcher": null,
                        "L2StreamHWprefetcher": null,
                        "L2UpDownPrefetcher": null,
                        "IOMMUSupport": null,
                        "XGMILinkSpeed": null,
                        "DataFabricCState": null,
                        "DeterminismControl": null,
                        "InfinityFabricPstate": null,
                        "xGMIForceLinkWidth": null,
                        "xGMIMaxLinkWidth": null,
                        "AlgorithmPerformanceBoostDisable": null,
                        "VirtualizationSupport": null
                    },
                    "CPU": {
                        "Architecture": "x86_64",
                        "Socket(s)": "2",
                        "CPU(s)": 128,
                        "Thread(s)PerCore": "2",
                        "Core(s)PerSocket": "32",
                        "CPUMaxMHz": null,
                        "L3Cache": "8192K",
                        "Microcode": null
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Ubuntu 18.04.2 LTS",
                        "Kernel": null,
                        "NUMAnode(s)": "8"
                    },
                    "Memory": {
                        "DIMMSize": "64GB",
                        "Manufacturer": "80CE863280CE M386A8K40BM2-CTD",
                        "MemoryModuleType": null,
                        "OperatingSpeedMhz": "2666",
                        "AllowedSpeedMHz": "2666",
                        "Total": "1TB"
                    },
                    "Network": [
                        {
                            "Name": "ens10f0",
                            "Product": null,
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1p8",
                            "Size": "109G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": null,
                        "GccVersion": null,
                        "NumaBalancing": null,
                        "VMOvercommitMemory": null,
                        "VMSwappiness": null,
                        "VMDirtyRatio": null,
                        "VMDirtyBackgroundRatio": null,
                        "NmiWatchdog": null,
                        "RandomizeVaSpace": null,
                        "NetCoreSomaxconn": null,
                        "TransparentHugepage": null,
                        "TransparentHugepageSize": null,
                        "Governor": null,
                        "TunedProfiles": null,
                        "CoreFileSize(Blocks)": null,
                        "DataSegSize(Kbytes)": null,
                        "FileSize(Blocks)": null,
                        "MaxLockedMemory(Kbytes)": null,
                        "MaxMemorySize(Kbytes)": null,
                        "OpenFiles": null,
                        "StackSize(Kbytes)": null,
                        "CpuTime(Seconds)": null,
                        "VirtualMemory(Kbytes)": null
                    },
                    "Vulnerability": {
                        "Itlb multihit": null,
                        "L1tf": null,
                        "Mds": null,
                        "Meltdown": null,
                        "Mmio stale data": null,
                        "Retbleed": null,
                        "Spec store bypass": null,
                        "Spectre v1": null,
                        "Spectre v2": null,
                        "Srbds": null,
                        "Tsx async abort": null
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerInstances": {
                        "Count": null
                    }
                }
            },
            "benchmarkExecutionID": "84c8ae3c-1a8f-4b67-8191-f90a16552936",
            "executionStatus": "COMPLETED",
            "benchmark": null,
            "resultsInfo": [
                {
                    "run": 1,
                    "statistics": [
                        {
                            "metricsName": "base",
                            "metricsValue": 274
                        },
                        {
                            "metricsName": "peak",
                            "metricsValue": 287
                        }
                    ]
                }
            ],
            "resultType": "MANUAL",
            "name": "Benchmark_Test_SPEC-CPU-2017_externalsource@spec.com_01-01-2098_45595719",
            "groupName": "Benchmark_Test_SPEC-CPU-2017_externalsource@spec.com_01-01-2098",
            "benchmarkType": "SPEC-CPU-2017",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "7501",
            "benchmarkName": null,
            "benchmarkCategory": "SPEC",
            "benchmarkScheduleID": null,
            "benchmarkTemplateID": null,
            "platformProfileURL": null,
            "resultFormat": "BASE",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": "JSON_UPLOAD_BATCH",
            "createdBy": "63e0c557244b93593680add0",
            "publishHistory": [],
            "dataEntitlementHistory": [
                {
                    "currentLevel": [
                        "EPDW_PUBLIC_VIA_3RD_PARTY_SITES"
                    ],
                    "levelToBeUpgraded": [
                        "EPDW_TEST_GROUP_ONLY"
                    ],
                    "requestedBy": "manikanta.s@amd.com",
                    "status": "CLOSE",
                    "comments": "testing",
                    "approvers": [
                        {
                            "_id": "6656bc1d5455d5700827d3f8",
                            "email": "keerthana.sanala@amd.com",
                            "approvalRequests": [
                                {
                                    "status": "APPROVED",
                                    "timestamp": "2024-05-29T05:19:22.206Z",
                                    "comment": "Approved",
                                    "_id": "6656bc1d5455d5700827d3f9"
                                }
                            ]
                        },
                        {
                            "_id": "6656bc1d5455d5700827d3fa",
                            "email": "pratyusha.tummale@amd.com",
                            "approvalRequests": [
                                {
                                    "status": "APPROVED",
                                    "timestamp": "2024-05-29T05:19:22.206Z",
                                    "comment": "APPROVED",
                                    "_id": "6656bc1d5455d5700827d3fb"
                                }
                            ]
                        }
                    ]
                }
            ],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [
                "server"
            ],
            "dataSource": "SPEC.org",
            "publishToHDFS": false,
            "testDate": "2098-01-01T08:00:00.000Z",
            "comments": "",
            "tester": "externalsource@spec.com",
            "runConfigurations": {
                "ecoSystem": "Non-HPC",
                "benchmarkVersion": "",
                "clientVersion": "",
                "serverCommandline": "",
                "clientCommandline": "",
                "compiler": "C/C++: Version 1.3.0 of AOCC, Fortran: Version 4.8.2 of GCC",
                "compilerversion": "Version 1.3.0",
                "workload": "fp-rate",
                "type": "rate",
                "benchmarks": "fp",
                "reportable": true,
                "runType": null,
                "nodes": 1,
                "noOfIterations": 1,
                "otherInfoFromSource": {
                    "TestedBy": "Dell Inc.",
                    "TestSponsor": "Dell Inc.",
                    "PublishedDate": "04-01-2019"
                }
            },
            "resultsFolder": "",
            "logsInfo": "http://10.216.136.189/84c8ae3c-1a8f-4b67-8191-f90a16552936",
            "createdOn": "2098-01-01T08:00:00.000Z",
            "sourceArtifactLocation": "http://10.216.136.189/manualupload/uploaded_zips/4ba85f9930",
            "lastModifiedOn": "2024-11-29T07:25:29.131Z",
            "__v": 1,
            "customTagHistory": [
                {
                    "oldCustomTag": [
                        "server",
                        "manjit2",
                        "test1"
                    ],
                    "currentCustomTag": [
                        "server"
                    ],
                    "updatedBy": {
                        "id": "63e4981c772175b9e8ace333",
                        "role": "ADMIN",
                        "username": "ptummale@amd.com",
                        "fullName": "Tummale, Pratyusha",
                        "email": "pratyusha.tummale@amd.com"
                    },
                    "updatedOn": "2024-10-10T10:35:22.574Z"
                },
                {
                    "oldCustomTag": [
                        "server",
                        "manjit2"
                    ],
                    "currentCustomTag": [
                        "server",
                        "manjit2",
                        "test1"
                    ],
                    "updatedBy": {
                        "id": "63e4f02e7bfb98d9dc68c4bb",
                        "role": "ADMIN",
                        "username": "amithn12@amd.com",
                        "fullName": "N, Amith",
                        "email": "amith.n@amd.com"
                    },
                    "updatedOn": "2024-09-18T07:01:30.475Z"
                },
                {
                    "oldCustomTag": [
                        "server",
                        "manjit1"
                    ],
                    "currentCustomTag": [
                        "server",
                        "manjit2"
                    ],
                    "updatedBy": {
                        "id": "63e4f02e7bfb98d9dc68c4bb",
                        "role": "ADMIN",
                        "username": "amithn12@amd.com",
                        "fullName": "N, Amith",
                        "email": "amith.n@amd.com"
                    },
                    "updatedOn": "2024-09-06T13:43:01.390Z"
                },
                {
                    "oldCustomTag": [
                        "server",
                        "manjit"
                    ],
                    "currentCustomTag": [
                        "server",
                        "manjit1"
                    ],
                    "updatedBy": {
                        "id": "63e4f02e7bfb98d9dc68c4bb",
                        "role": "ADMIN",
                        "username": "amithn12@amd.com",
                        "fullName": "N, Amith",
                        "email": "amith.n@amd.com"
                    },
                    "updatedOn": "2024-09-06T13:27:32.191Z"
                },
                {
                    "oldCustomTag": [
                        "server",
                        " malaya-testing",
                        " malaya-testing2"
                    ],
                    "currentCustomTag": [
                        "server",
                        "manjit"
                    ],
                    "updatedBy": {
                        "id": "63dca008bcec41fec62c2749",
                        "role": "ADMIN",
                        "username": "manjikum@amd.com",
                        "fullName": "Kumar, Manjit",
                        "email": "manjit.kumar@amd.com"
                    },
                    "updatedOn": "2024-08-30T04:31:42.675Z"
                },
                {
                    "customTag": [
                        "server",
                        " malaya-testing"
                    ],
                    "updatedBy": {
                        "id": "61f958670306ef1f60f3d8d4",
                        "role": "EXPERT",
                        "username": "mallenka@amd.com",
                        "fullName": "Lenka, MalayaRaj (Malaya Raj)",
                        "email": "malayaraj.lenka@amd.com"
                    },
                    "updatedOn": "2024-08-30T04:01:10.372Z"
                },
                {
                    "customTag": [
                        "server"
                    ],
                    "updatedBy": {
                        "id": "61f958670306ef1f60f3d8d4",
                        "role": "EXPERT",
                        "username": "mallenka@amd.com",
                        "fullName": "Lenka, MalayaRaj (Malaya Raj)",
                        "email": "malayaraj.lenka@amd.com"
                    },
                    "updatedOn": "2024-08-30T04:00:25.915Z"
                },
                {
                    "customTag": [
                        "server4"
                    ],
                    "updatedBy": {
                        "id": "63dca008bcec41fec62c2749",
                        "role": "ADMIN",
                        "username": "manjikum@amd.com",
                        "fullName": "Kumar, Manjit",
                        "email": "manjit.kumar@amd.com"
                    },
                    "updatedOn": "2024-08-29T17:07:43.980Z"
                },
                {
                    "customTag": [
                        "server2"
                    ],
                    "updatedBy": {
                        "id": "63dca008bcec41fec62c2749",
                        "role": "ADMIN",
                        "username": "manjikum@amd.com",
                        "fullName": "Kumar, Manjit",
                        "email": "manjit.kumar@amd.com"
                    },
                    "updatedOn": "2024-08-29T17:03:35.700Z"
                }
            ],
            "isResultLockout": true,
            "resultLockoutHistory": [
                {
                    "oldResultLockOutFlag": false,
                    "currentResultLockOutFlag": true,
                    "comments": "test",
                    "updatedBy": {
                        "id": "6544c959d23c2fa68756f6ab",
                        "role": "ADMIN",
                        "username": "manikans@amd.com",
                        "fullName": "S, Manikanta",
                        "email": "manikanta.s@amd.com"
                    },
                    "updatedOn": "2024-09-02T11:16:47.634Z"
                }
            ]
        },
        {
            "_id": "678a25c9b9838033287c3217",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-17 09:38 UTC",
                "Summary": {
                    "Server": {
                        "Model": "Cinnabar",
                        "SKU": "PXU-0004075-00",
                        "Manufacturer": "American Megatrends International, LLC.",
                        "Health": "OK",
                        "CPUModel": "8534P",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RCB100CC",
                        "FirmwareVersion": "5720-v1.42 NCSI v1.5.28.0",
                        "Microcode": "0xaa00215",
                        "BIOSWorkloadProfile": null,
                        "AgesaVersion": null,
                        "TransparentSME": null,
                        "ThermalConfig": null,
                        "TDP": null,
                        "SR-IOVSupport": null,
                        "SMTControl": "Enabled",
                        "L1StridePrefetcher": null,
                        "L1RegionPrefetcher": null,
                        "LocalApicMode": null,
                        "CorePerformanceBoost": null,
                        "FmaxBoostLimitControl": null,
                        "PowerProfile": null,
                        "MemoryInterleaving": null,
                        "MemoryRefreshRate": null,
                        "ProcessorC-States": null,
                        "3DV-Cache": null,
                        "LastLevelCacheAsNUMANode": null,
                        "NumaNodesPerSocket": null,
                        "DeterminismSlider": null,
                        "MaxMemoryClockSpeed": null,
                        "L1StreamHwPrefetcher": null,
                        "L2StreamHWprefetcher": null,
                        "L2UpDownPrefetcher": null,
                        "IOMMUSupport": null,
                        "XGMILinkSpeed": null,
                        "DataFabricCState": null,
                        "DeterminismControl": null,
                        "InfinityFabricPstate": null,
                        "xGMIForceLinkWidth": null,
                        "xGMIMaxLinkWidth": null,
                        "GMIEncryptionControl": null,
                        "xGMIEncryptionControl": null,
                        "AlgorithmPerformanceBoostDisable": null,
                        "VirtualizationSupport": null,
                        "ACPIAutoConfiguration": null,
                        "SecureMemoryEncryption": null,
                        "AVX512": null,
                        "MONITORandMWAIT": null,
                        "PCIESpeedControl": null,
                        "PCIELinkSpeed": null,
                        "SEVControl": null,
                        "SNPMemory": null,
                        "SVMMode": null,
                        "AES": null,
                        "SEV-SNPSupport": null,
                        "PPTControl": null,
                        "PPT": null
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "1",
                        "CPU(s)": "128",
                        "Thread(s)PerCore": "2",
                        "Core(s)PerSocket": "64",
                        "CPUMaxMHz": "3101.8550",
                        "L3Cache": "128 MiB",
                        "L3CacheInstances": "8"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Ubuntu 22.04.4 LTS",
                        "Kernel": "Linux 5.15.0-130-generic",
                        "NUMAnode(s)": "1"
                    },
                    "Memory": {
                        "DIMMSize": "32 GiB",
                        "Manufacturer": "Samsung",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 4800 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "505 MHz",
                        "AllowedSpeedMHz": "4800 MHz",
                        "Total": "194 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp199s0f0",
                            "Product": "NetXtreme BCM5720 Gigabit Ethernet PCIe",
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp199s0f1",
                            "Product": "NetXtreme BCM5720 Gigabit Ethernet PCIe",
                            "Speed": "Unknown!",
                            "LinkDetected": "no"
                        },
                        {
                            "Name": "enp65s0f0np0",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f1np1",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "465.8G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "13.1.0",
                        "NumaBalancing": "0",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "0",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "1",
                        "VMDropCaches": null,
                        "StatInterval": "10",
                        "NmiWatchdog": "0",
                        "Watchdog": "0",
                        "WatchdogThresh": "0",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "1000000",
                        "ScheduledRTRuntimeUS": "-1",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": "0",
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": "1024",
                        "SchedulerUtilClampedMin": "1024",
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "never",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "never",
                        "TransparentKHugepageDefrag": "0",
                        "HugePagesTotal": "60",
                        "HugePagesFree": "0",
                        "Governor": {
                            "0-127": "performance"
                        },
                        "Driver": {
                            "0-127": "acpi-cpufreq"
                        },
                        "TunedProfiles": null,
                        "CmdLine": "BOOT_IMAGE=/vmlinuz-5.15.0-130-generic root=/dev/mapper/ubuntu--vg-ubuntu--lv ro default_hugepagesz=1GB isolcpus=8,9-63 processor.max_cstate=0 nohz_full=8,9-63 rcu_nocbs=8,9-63 amd_iommu=on hugepagesz=1GB hugepages=60 irqaffinity=0,1-7",
                        "GLIBC": "ldd (Ubuntu GLIBC 2.35-0ubuntu3.8) 2.35",
                        "Binutils": "GNU ld (GNU Binutils for Ubuntu) 2.38",
                        "OpenSSL": "OpenSSL 3.0.2 15 Mar 2022 (Library: OpenSSL 3.0.2 15 Mar 2022)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "24695184",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl and seccomp",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": []
                }
            },
            "benchmarkExecutionID": "987a4bd1-c976-4742-b409-fad3d3211d16",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "678a20c9b9838033287c2af8",
                "platformDetails": {
                    "lts": null,
                    "sut": "6777a721afec579ef46abc0a",
                    "secondarySuts": [
                        "6777a62fafec579ef46aba98"
                    ]
                },
                "databaseConfigurations": null,
                "executionStep": "SUT TEARDOWN IN PROGRESS",
                "executionStatus": "CLEANUP",
                "runType": null,
                "benchmarkExecutionID": "987a4bd1-c976-4742-b409-fad3d3211d16",
                "benchmarkTemplateDetails": {
                    "_id": "66838caf4d01de54ebdda091",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "NetPerf",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "Communication",
                    "noneDatabaseConfigs": {
                        "gitBranch": "development",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-netperf.git",
                        "runScriptFile": "netperf/test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "development",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-netperf-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": [
                            {
                                "isRequired": true,
                                "gitBranch": "development",
                                "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                                "setupFilePath": "Playbooks/setup-netperf-lts.yml",
                                "teardownFilePath": ""
                            }
                        ]
                    },
                    "createdBy": "626b83c4a8b360df9979f96d",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "Benchmark for Netperf-TCP-RR",
                    "benchmarkName": "NetPerf",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "dual",
                    "test_duration": "120",
                    "turbostat_on": true,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-17T09:15:00.000Z",
                    "expressSetup": true,
                    "LinuxProfilingTool_on": false,
                    "benchmarkType": "NetPerf",
                    "server_host_ip": "10.86.27.152",
                    "hugepage_size": "1GB",
                    "nps": "1",
                    "irq_affinity": "",
                    "nohz_full": "null",
                    "rcu_nocbs": "null",
                    "proc_cstate": "null",
                    "amd_iommu": "off",
                    "smt_status": "Enabled",
                    "turbo_status": "Enabled",
                    "testnames": [
                        "TCP_RR",
                        "TCP_STREAM",
                        "TCP_MAERTS",
                        "UDP_STREAM",
                        "UDP_RR"
                    ],
                    "serverifname": "enp65s0f1np1",
                    "clientifname": "enp65s0f1np1",
                    "serverip": "10.10.10.3",
                    "clientip": "10.10.10.4",
                    "packet_size": 64,
                    "local_remote_core_list": "9,10",
                    "power_governor": "ondemand",
                    "AmdProfiling_Tools": "AMDuProf",
                    "restoreBIOS": false,
                    "avx_value": null
                },
                "createdBy": {
                    "_id": "63e4981c772175b9e8ace333",
                    "role": "ADMIN",
                    "fullName": "Tummale, Pratyusha",
                    "email": "pratyusha.tummale@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/21409/console",
                "executionProgressSteps": [
                    "SUT SETUP IN PROGRESS",
                    "CALCULATING PLATFORM PROFILE",
                    "EXECUTING 1/1 RUN"
                ],
                "batchId": null,
                "executionType": "SINGLE",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test",
                "name": "Benchmark_Test_NetPerf_388810_run_1",
                "createdOn": "2025-01-17T09:20:09.951Z",
                "lastModifiedOn": "2025-01-17T09:41:31.701Z"
            },
            "resultsInfo": [
                {
                    "summary": "Result for Run 1",
                    "run": 1,
                    "configSummary": {
                        "ClangVersion": "Data not available",
                        "SMT": "Enabled",
                        "TurboBoost": null,
                        "NPS": null,
                        "AVX": 512
                    },
                    "statistics": [],
                    "powerstatStatistics": [
                        {
                            "Maximum": 150.05
                        },
                        {
                            "Minimum": 29.3
                        }
                    ],
                    "turbostatStatistics": [
                        {
                            "Maximum_TurboStat_Value": 3105
                        },
                        {
                            "Minimum_TurboStat_Value": 1343
                        }
                    ],
                    "detailedReport": "http://deae-resultserver-dev.amd.com/987a4bd1-c976-4742-b409-fad3d3211d16/results/1/netperf_execution.log",
                    "workloadProfile": {
                        "workloadDescription": {},
                        "workloadMetrics": {},
                        "workloadMeasures": {}
                    }
                }
            ],
            "resultType": "AUTOMATED",
            "name": "Benchmark_Test_NetPerf_388810_run_1",
            "groupName": "Benchmark_Test",
            "benchmarkType": "NetPerf",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "8534P",
            "benchmarkName": "NetPerf",
            "benchmarkCategory": "Communication",
            "benchmarkScheduleID": "678a20c9b9838033287c2af8",
            "benchmarkTemplateID": "66838caf4d01de54ebdda091",
            "platformProfileURL": null,
            "resultFormat": "BASE",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-17T09:23:19.714538+00:00",
                    "endTime": null,
                    "elapsedTimeInMins": null
                },
                {
                    "event": "ApplyingTunings",
                    "startTime": "2025-01-17T09:23:21.298371+00:00",
                    "endTime": null,
                    "elapsedTimeInMins": null
                },
                {
                    "event": "SutSetUp",
                    "startTime": "2025-01-17T09:23:21.298388+00:00",
                    "endTime": "2025-01-17T09:36:34.508665+00:00",
                    "elapsedTimeInMins": 13.2202
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-17T09:38:01.349948+00:00",
                    "endTime": "2025-01-17T09:39:09.597332+00:00",
                    "elapsedTimeInMins": 1.1375
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-17T09:39:09.597557+00:00",
                    "endTime": "2025-01-17T09:40:17.701929+00:00",
                    "elapsedTimeInMins": 1.1351
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-17T09:40:22.618384+00:00",
                    "endTime": "2025-01-17T09:41:14.281896+00:00",
                    "elapsedTimeInMins": 0.8611
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-17T09:40:34.933978+00:00",
                    "endTime": "2025-01-17T09:40:56.109636+00:00",
                    "elapsedTimeInMins": 0.3529
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/987a4bd1-c976-4742-b409-fad3d3211d16",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "dual",
                "test_duration": "120",
                "turbostat_on": true,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-17T09:15:00.000Z",
                "expressSetup": true,
                "LinuxProfilingTool_on": false,
                "benchmarkType": "NetPerf",
                "server_host_ip": "10.86.27.152",
                "hugepage_size": "1GB",
                "nps": "1",
                "irq_affinity": "",
                "nohz_full": "null",
                "rcu_nocbs": "null",
                "proc_cstate": "null",
                "amd_iommu": "off",
                "smt_status": "Enabled",
                "turbo_status": "Enabled",
                "testnames": [
                    "TCP_RR",
                    "TCP_STREAM",
                    "TCP_MAERTS",
                    "UDP_STREAM",
                    "UDP_RR"
                ],
                "serverifname": "enp65s0f1np1",
                "clientifname": "enp65s0f1np1",
                "serverip": "10.10.10.3",
                "clientip": "10.10.10.4",
                "packet_size": 64,
                "local_remote_core_list": "9,10",
                "power_governor": "ondemand",
                "AmdProfiling_Tools": "AMDuProf",
                "restoreBIOS": false,
                "avx_value": null
            },
            "createdOn": "2025-01-17T09:41:29.092Z",
            "lastModifiedOn": "2025-01-17T09:41:29.092Z",
            "__v": 0
        },
        {
            "_id": "678a2015b9838033287c2a08",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-17 09:04 UTC",
                "Summary": {
                    "Server": {
                        "Model": "VOLCANO",
                        "SKU": "PXU-0005729-00",
                        "Manufacturer": "AMD",
                        "Health": "OK",
                        "CPUModel": "9755",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RVOT1003B",
                        "FirmwareVersion": "sp5-irmg_v2.11.0.12",
                        "Microcode": "0xb00211e",
                        "BIOSWorkloadProfile": null,
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Enabled",
                        "SMTControl": "Disable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "Auto",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Auto",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Auto",
                        "NumaNodesPerSocket": "NPS2",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Disable",
                        "L2StreamHWprefetcher": "Disable",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Auto",
                        "XGMILinkSpeed": null,
                        "DataFabricCState": "Auto",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": null,
                        "GMIEncryptionControl": "Auto",
                        "xGMIEncryptionControl": "Auto",
                        "AlgorithmPerformanceBoostDisable": "Auto",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Auto",
                        "AVX512": "Auto",
                        "MONITORandMWAIT": "Auto",
                        "PCIESpeedControl": null,
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "2",
                        "CPU(s)": "256",
                        "Thread(s)PerCore": "1",
                        "Core(s)PerSocket": "128",
                        "CPUMaxMHz": "4121.1909",
                        "L3Cache": "1024.0 MiB",
                        "L3CacheInstances": "32"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Ubuntu 24.04 LTS",
                        "Kernel": "Linux 6.8.0-51-generic",
                        "NUMAnode(s)": "4"
                    },
                    "Memory": {
                        "DIMMSize": "128 GiB",
                        "Manufacturer": "Micron Technology",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 6400 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "6400 MT/s",
                        "AllowedSpeedMHz": "6400 MT/s",
                        "Total": "3072 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp82s0",
                            "Product": null,
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "docker0",
                            "Product": null,
                            "Speed": "10.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "476.9G"
                        },
                        {
                            "Name": "nvme6n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme3n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme8n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme4n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme5n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme2n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme1n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme7n1",
                            "Size": "3500.0 G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "13.3.0",
                        "NumaBalancing": "1",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "60",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "0",
                        "VMDropCaches": null,
                        "StatInterval": "1",
                        "NmiWatchdog": "1",
                        "Watchdog": "1",
                        "WatchdogThresh": "10",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "1000000",
                        "ScheduledRTRuntimeUS": "950000",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": null,
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": "1024",
                        "SchedulerUtilClampedMin": "1024",
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "madvise",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "madvise",
                        "TransparentKHugepageDefrag": "1",
                        "HugePagesTotal": "0",
                        "HugePagesFree": "0",
                        "Governor": {
                            "0-255": "schedutil"
                        },
                        "Driver": {
                            "0-255": "acpi-cpufreq"
                        },
                        "TunedProfiles": null,
                        "CmdLine": "BOOT_IMAGE=/boot/vmlinuz-6.8.0-51-generic root=UUID=8ad5549c-23a3-4fba-bb3f-270f1c1f359f ro",
                        "GLIBC": "ldd (Ubuntu GLIBC 2.39-0ubuntu8.3) 2.39",
                        "Binutils": "GNU ld (GNU Binutils for Ubuntu) 2.42",
                        "OpenSSL": "OpenSSL 3.0.13 30 Jan 2024 (Library: OpenSSL 3.0.13 30 Jan 2024)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "396274436",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": [
                        {
                            "Platform": "Docker",
                            "Count": {
                                "Count": null
                            }
                        }
                    ]
                }
            },
            "benchmarkExecutionID": "23566b16-2a3e-4362-b4dc-ebbd8e98c4bb",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "678a1ad02714c8ef467314a0",
                "platformDetails": {
                    "lts": null,
                    "sut": "677e6390420ca106aa7f0d62",
                    "secondarySuts": []
                },
                "databaseConfigurations": null,
                "executionStep": "SUT TEARDOWN IN PROGRESS",
                "executionStatus": "CLEANUP",
                "runType": null,
                "benchmarkExecutionID": "23566b16-2a3e-4362-b4dc-ebbd8e98c4bb",
                "benchmarkTemplateDetails": {
                    "_id": "6704d733d3ce93ab6b1c233c",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "ZenTorch",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "AI-ML",
                    "noneDatabaseConfigs": {
                        "gitBranch": "testing",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-zentorch.git",
                        "runScriptFile": "test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "ZenDnn",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-zentorch-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": []
                    },
                    "createdBy": "627ccec529bcaa0713d0e1a1",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "ZenTorch",
                    "benchmarkName": "ZenTorch",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "single",
                    "turbostat_on": false,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-17T08:54:00.000Z",
                    "priority": "CRITICAL",
                    "modelName": "Llama-3.2-1B",
                    "dataType": "bfloat16",
                    "batchSize": "1",
                    "runType": "generation",
                    "maxNewTokens": "128",
                    "numBeams": "4",
                    "inputTokens": "1024",
                    "threads": "128",
                    "backend": "zentorch_llm_optimize",
                    "warmupSteps": "2",
                    "stepCount": "3",
                    "fw": "zentorch",
                    "torchVersion": "2.5.0",
                    "intelExtensionVersion": "2.5.0",
                    "transformersVersion": "4.45.0",
                    "mode": "generative_mode",
                    "isSetupRequired": true
                },
                "createdBy": {
                    "_id": "627ccec529bcaa0713d0e1a1",
                    "role": "EXPERT",
                    "fullName": "Kanimireddy, Kulasekharreddy",
                    "email": "kulasekharreddy.kanimireddy@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/21394/console",
                "executionProgressSteps": [],
                "batchId": "7b207c38-9734-4df0-8201-c31c74b5eddf",
                "executionType": "BATCH",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test",
                "name": "Benchmark_Test_ZenTorch_77110_Llama-3.2-1B",
                "createdOn": "2025-01-17T08:54:40.076Z",
                "lastModifiedOn": "2025-01-17T09:17:11.048Z"
            },
            "resultsInfo": [],
            "resultType": "AUTOMATED",
            "name": "Benchmark_Test_ZenTorch_77110_Llama-3.2-1B",
            "groupName": "Benchmark_Test",
            "benchmarkType": "ZenTorch",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "9755",
            "benchmarkName": "ZenTorch",
            "benchmarkCategory": "AI-ML",
            "benchmarkScheduleID": "678a1ad02714c8ef467314a0",
            "benchmarkTemplateID": "6704d733d3ce93ab6b1c233c",
            "platformProfileURL": null,
            "resultFormat": "BASE",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-17T08:56:14.644181+00:00",
                    "endTime": "2025-01-17T09:17:19.326359+00:00",
                    "elapsedTimeInMins": 21.078
                },
                {
                    "event": "SutSetUp",
                    "startTime": "2025-01-17T08:56:16.144014+00:00",
                    "endTime": "2025-01-17T09:03:49.513415+00:00",
                    "elapsedTimeInMins": 7.5562
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-17T09:03:49.513692+00:00",
                    "endTime": "2025-01-17T09:04:50.176956+00:00",
                    "elapsedTimeInMins": 1.0111
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-17T09:04:54.403346+00:00",
                    "endTime": "2025-01-17T09:17:13.463676+00:00",
                    "elapsedTimeInMins": 12.3177
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-17T09:04:58.159004+00:00",
                    "endTime": "2025-01-17T09:17:00.483200+00:00",
                    "elapsedTimeInMins": 12.0387
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/23566b16-2a3e-4362-b4dc-ebbd8e98c4bb",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "single",
                "turbostat_on": false,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-17T08:54:00.000Z",
                "priority": "CRITICAL",
                "modelName": "Llama-3.2-1B",
                "dataType": "bfloat16",
                "batchSize": "1",
                "runType": "generation",
                "maxNewTokens": "128",
                "numBeams": "4",
                "inputTokens": "1024",
                "threads": "128",
                "backend": "zentorch_llm_optimize",
                "warmupSteps": "2",
                "stepCount": "3",
                "fw": "zentorch",
                "torchVersion": "2.5.0",
                "intelExtensionVersion": "2.5.0",
                "transformersVersion": "4.45.0",
                "mode": "generative_mode",
                "isSetupRequired": true
            },
            "createdOn": "2025-01-17T09:17:09.818Z",
            "lastModifiedOn": "2025-01-17T09:17:09.818Z",
            "__v": 0
        },
        {
            "_id": "678a01452714c8ef4672e89e",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-17 06:52 UTC",
                "Summary": {
                    "Server": {
                        "Model": "VOLCANO",
                        "SKU": "PXU-0005729-00",
                        "Manufacturer": "AMD",
                        "Health": "OK",
                        "CPUModel": "9755",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RVOT1003B",
                        "FirmwareVersion": "sp5-irmg_v2.11.0.12",
                        "Microcode": "0xb00211e",
                        "BIOSWorkloadProfile": null,
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Enabled",
                        "SMTControl": "Disable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "Auto",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Auto",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Auto",
                        "NumaNodesPerSocket": "NPS2",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Disable",
                        "L2StreamHWprefetcher": "Disable",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Auto",
                        "XGMILinkSpeed": null,
                        "DataFabricCState": "Auto",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": null,
                        "GMIEncryptionControl": "Auto",
                        "xGMIEncryptionControl": "Auto",
                        "AlgorithmPerformanceBoostDisable": "Auto",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Auto",
                        "AVX512": "Auto",
                        "MONITORandMWAIT": "Auto",
                        "PCIESpeedControl": null,
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "2",
                        "CPU(s)": "256",
                        "Thread(s)PerCore": "1",
                        "Core(s)PerSocket": "128",
                        "CPUMaxMHz": "4121.1909",
                        "L3Cache": "1024.0 MiB",
                        "L3CacheInstances": "32"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Ubuntu 24.04 LTS",
                        "Kernel": "Linux 6.8.0-51-generic",
                        "NUMAnode(s)": "4"
                    },
                    "Memory": {
                        "DIMMSize": "128 GiB",
                        "Manufacturer": "Micron Technology",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 6400 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "6400 MT/s",
                        "AllowedSpeedMHz": "6400 MT/s",
                        "Total": "3072 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp82s0",
                            "Product": null,
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "docker0",
                            "Product": null,
                            "Speed": "10.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "476.9G"
                        },
                        {
                            "Name": "nvme6n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme3n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme8n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme4n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme5n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme2n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme1n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme7n1",
                            "Size": "3500.0 G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "13.3.0",
                        "NumaBalancing": "1",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "60",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "0",
                        "VMDropCaches": null,
                        "StatInterval": "1",
                        "NmiWatchdog": "1",
                        "Watchdog": "1",
                        "WatchdogThresh": "10",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "1000000",
                        "ScheduledRTRuntimeUS": "950000",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": null,
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": "1024",
                        "SchedulerUtilClampedMin": "1024",
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "madvise",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "madvise",
                        "TransparentKHugepageDefrag": "1",
                        "HugePagesTotal": "0",
                        "HugePagesFree": "0",
                        "Governor": {
                            "0-255": "schedutil"
                        },
                        "Driver": {
                            "0-255": "acpi-cpufreq"
                        },
                        "TunedProfiles": null,
                        "CmdLine": "BOOT_IMAGE=/boot/vmlinuz-6.8.0-51-generic root=UUID=8ad5549c-23a3-4fba-bb3f-270f1c1f359f ro",
                        "GLIBC": "ldd (Ubuntu GLIBC 2.39-0ubuntu8.3) 2.39",
                        "Binutils": "GNU ld (GNU Binutils for Ubuntu) 2.42",
                        "OpenSSL": "OpenSSL 3.0.13 30 Jan 2024 (Library: OpenSSL 3.0.13 30 Jan 2024)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "396274436",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": [
                        {
                            "Platform": "Docker",
                            "Count": {
                                "Count": null
                            }
                        }
                    ]
                }
            },
            "benchmarkExecutionID": "ce7ea40b-04ba-47bb-aec6-5a248ad7ba10",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "6789fb7a2714c8ef4672db21",
                "platformDetails": {
                    "lts": null,
                    "sut": "677e6390420ca106aa7f0d62",
                    "secondarySuts": []
                },
                "databaseConfigurations": null,
                "executionStep": "",
                "executionStatus": "FAILED",
                "runType": null,
                "benchmarkExecutionID": "ce7ea40b-04ba-47bb-aec6-5a248ad7ba10",
                "benchmarkTemplateDetails": {
                    "_id": "6704d733d3ce93ab6b1c233c",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "ZenTorch",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "AI-ML",
                    "noneDatabaseConfigs": {
                        "gitBranch": "testing",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-zentorch.git",
                        "runScriptFile": "test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "ZenDnn",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-zentorch-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": []
                    },
                    "createdBy": "627ccec529bcaa0713d0e1a1",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "ZenTorch",
                    "benchmarkName": "ZenTorch",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "single",
                    "turbostat_on": false,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-17T06:41:00.000Z",
                    "priority": "CRITICAL",
                    "modelName": "Llama-2-7b-chat-hf",
                    "dataType": "bfloat16",
                    "batchSize": "1",
                    "runType": "generation",
                    "maxNewTokens": "128",
                    "numBeams": "4",
                    "inputTokens": "1024",
                    "threads": "128",
                    "backend": "zentorch_llm_optimize",
                    "warmupSteps": "2",
                    "stepCount": "3",
                    "fw": "zentorch",
                    "torchVersion": "2.5.0",
                    "intelExtensionVersion": "2.5.0",
                    "transformersVersion": "4.45.0",
                    "mode": "generative_mode",
                    "isSetupRequired": false
                },
                "createdBy": {
                    "_id": "6763bb93415cabaaa7844188",
                    "role": "TESTER",
                    "fullName": "Dsilva, Joyel",
                    "email": "joyel.dsilva@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/21375/console",
                "executionProgressSteps": [],
                "batchId": "72b36b7a-1bb2-41d7-b27e-510aac1ed753",
                "executionType": "BATCH",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test",
                "name": "zenai606s_bs1_Llama-2-7b-chat-hf",
                "createdOn": "2025-01-17T06:40:58.419Z",
                "lastModifiedOn": "2025-01-17T08:41:10.039Z"
            },
            "resultsInfo": [],
            "resultType": "AUTOMATED",
            "name": "zenai606s_bs1_Llama-2-7b-chat-hf",
            "groupName": "Benchmark_Test",
            "benchmarkType": "ZenTorch",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "9755",
            "benchmarkName": "ZenTorch",
            "benchmarkCategory": "AI-ML",
            "benchmarkScheduleID": "6789fb7a2714c8ef4672db21",
            "benchmarkTemplateID": "6704d733d3ce93ab6b1c233c",
            "platformProfileURL": null,
            "resultFormat": "BASE",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-17T06:44:14.189502+00:00",
                    "endTime": "2025-01-17T07:05:50.471031+00:00",
                    "elapsedTimeInMins": 21.6047
                },
                {
                    "event": "SutSetUp",
                    "startTime": "2025-01-17T06:44:15.707713+00:00",
                    "endTime": "2025-01-17T06:52:27.017044+00:00",
                    "elapsedTimeInMins": 8.1885
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-17T06:52:27.017264+00:00",
                    "endTime": "2025-01-17T06:53:27.365122+00:00",
                    "elapsedTimeInMins": 1.0058
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-17T06:53:31.597651+00:00",
                    "endTime": "2025-01-17T07:05:44.549559+00:00",
                    "elapsedTimeInMins": 12.2159
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-17T06:53:35.362584+00:00",
                    "endTime": "2025-01-17T07:05:31.856525+00:00",
                    "elapsedTimeInMins": 11.9416
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/ce7ea40b-04ba-47bb-aec6-5a248ad7ba10",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "single",
                "turbostat_on": false,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-17T06:41:00.000Z",
                "priority": "CRITICAL",
                "modelName": "Llama-2-7b-chat-hf",
                "dataType": "bfloat16",
                "batchSize": "1",
                "runType": "generation",
                "maxNewTokens": "128",
                "numBeams": "4",
                "inputTokens": "1024",
                "threads": "128",
                "backend": "zentorch_llm_optimize",
                "warmupSteps": "2",
                "stepCount": "3",
                "fw": "zentorch",
                "torchVersion": "2.5.0",
                "intelExtensionVersion": "2.5.0",
                "transformersVersion": "4.45.0",
                "mode": "generative_mode",
                "isSetupRequired": false
            },
            "createdOn": "2025-01-17T07:05:41.079Z",
            "lastModifiedOn": "2025-01-17T07:05:41.079Z",
            "__v": 0
        },
        {
            "_id": "6788e633eeb0ade3c835ef7d",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-16 16:22 IST",
                "Summary": {
                    "Server": {
                        "Model": "Sunstone",
                        "SKU": "PXU-0004075-00",
                        "Manufacturer": "AMD",
                        "Health": "OK",
                        "CPUModel": "8534P",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RSS0090B",
                        "FirmwareVersion": "sp6_v2.11.0.05",
                        "Microcode": "0xaa00213",
                        "BIOSWorkloadProfile": "Auto",
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Disabled",
                        "SMTControl": "Disable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "x2APIC",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Enabled",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Disabled",
                        "NumaNodesPerSocket": "NPS1",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Enable",
                        "L2StreamHWprefetcher": "Enable",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Enabled",
                        "XGMILinkSpeed": "Auto",
                        "DataFabricCState": "Disabled",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": "Auto",
                        "GMIEncryptionControl": "Disabled",
                        "xGMIEncryptionControl": "Disabled",
                        "AlgorithmPerformanceBoostDisable": "1",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Disable",
                        "AVX512": "Disabled",
                        "MONITORandMWAIT": "Disabled",
                        "PCIESpeedControl": "Static Target Link Speed (GEN5",
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "1",
                        "CPU(s)": "64",
                        "Thread(s)PerCore": "1",
                        "Core(s)PerSocket": "64",
                        "CPUMaxMHz": "3101.8550",
                        "L3Cache": "128 MiB",
                        "L3CacheInstances": "8"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Red Hat Enterprise Linux 9.4 (Plow)",
                        "Kernel": "Linux 5.14.0-427.13.1.el9_4.x86_64",
                        "NUMAnode(s)": "1"
                    },
                    "Memory": {
                        "DIMMSize": "32 GiB",
                        "Manufacturer": "Micron Technology",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 4800 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "3600 MT/s",
                        "AllowedSpeedMHz": "4800 MT/s",
                        "Total": "386 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp195s0",
                            "Product": "NetXtreme BCM5720 Gigabit Ethernet PCIe",
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f0np0",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f1np1",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "931.5G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "11.5.0",
                        "NumaBalancing": "0",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "0",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "1",
                        "VMDropCaches": null,
                        "StatInterval": "10",
                        "NmiWatchdog": "0",
                        "Watchdog": "0",
                        "WatchdogThresh": "0",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "-1",
                        "ScheduledRTRuntimeUS": "-1",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": "0",
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": null,
                        "SchedulerUtilClampedMin": null,
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "never",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "never",
                        "TransparentKHugepageDefrag": "0",
                        "HugePagesTotal": "0",
                        "HugePagesFree": "0",
                        "Governor": {
                            "0-63": "performance"
                        },
                        "Driver": {
                            "0-63": "acpi-cpufreq"
                        },
                        "TunedProfiles": "throughput-performance",
                        "CmdLine": "BOOT_IMAGE=(hd0,gpt2)/vmlinuz-5.14.0-427.13.1.el9_4.x86_64 root=/dev/mapper/rhel_sunstone--2dbf--os-root ro crashkernel=1G-4G:192M,4G-64G:256M,64G-:512M resume=/dev/mapper/rhel_sunstone--2dbf--os-swap rd.lvm.lv=rhel_sunstone-2dbf-os/root rd.lvm.lv=rhel_sunstone-2dbf-os/swap rhgb quiet",
                        "GLIBC": "ldd (GNU libc) 2.34",
                        "Binutils": "GNU ld version 2.35.2-54.el9",
                        "OpenSSL": "OpenSSL 3.0.7 1 Nov 2022 (Library: OpenSSL 3.0.7 1 Nov 2022)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "unlimited",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS, IBPB conditional, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": []
                }
            },
            "benchmarkExecutionID": "9b64999e-03fb-4e26-baec-cc7d834d0acf",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "6788e1d3eeb0ade3c835e75d",
                "platformDetails": {
                    "lts": null,
                    "sut": "65f03727589e75b3ccc35cc3",
                    "secondarySuts": []
                },
                "databaseConfigurations": null,
                "executionStep": "",
                "executionStatus": "COMPLETED",
                "runType": null,
                "benchmarkExecutionID": "9b64999e-03fb-4e26-baec-cc7d834d0acf",
                "benchmarkTemplateDetails": {
                    "_id": "670524045bc583bcf382c4b8",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "NIC-IO-TESTPMD",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "Communication",
                    "noneDatabaseConfigs": {
                        "gitBranch": "ipsec_bug",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-dpdk.git",
                        "runScriptFile": "dpdk-testpmd/test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "development",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-dpdk-testpmd-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": []
                    },
                    "createdBy": "64797bd706abaf01a6c2d726",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "The Data Plane Development Kit (DPDK) is an open source software project managed by the Linux Foundation",
                    "benchmarkName": "NIC-IO-TESTPMD-Xena",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": false,
                    "server_setup": "single",
                    "dpdk_avx": "AVX256",
                    "nic_whitelist1": "41:00.0",
                    "forward_mode": "io",
                    "static_library": "static",
                    "flow_control": "off",
                    "benchmark_packages_is_required": false,
                    "frame_work_prerequisite": false,
                    "ipsecmb_is_required": false,
                    "compiler_is_required": false,
                    "profiling_tools_setup_is_required": false,
                    "nic_driver_setup_is_required": false,
                    "is_required_latest_kernel": false,
                    "numberOfFlows": 32,
                    "zeroPkt": false,
                    "test_time_duration": 180,
                    "turbostat_on": true,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-16T10:38:00.000Z",
                    "frame_size": 64,
                    "expressSetup": true,
                    "LinuxProfilingTool_on": false,
                    "benchmarkType": "NIC-IO-TESTPMD",
                    "nps": "1",
                    "irq_affinity": "",
                    "nohz_full": "null",
                    "rcu_nocbs": "null",
                    "proc_cstate": "null",
                    "amd_iommu": "off",
                    "smt_status": "Disabled",
                    "turbo_status": "Enabled",
                    "power_governor": "performance",
                    "test_scenario": "Single Core Performance",
                    "no_of_ports": 1,
                    "testpmd_corelist": "8,9-10",
                    "no_of_cores": "2",
                    "rx_queues": "2",
                    "tx_queues": "2",
                    "number_of_channels": "Default",
                    "NIC Model": "NVIDIA_ConnectX-7_1x100G",
                    "port_numa_config": "0,0",
                    "tx_descriptors": "4096",
                    "rx_descriptors": "8192",
                    "burst_size": 128,
                    "Xena_Port_1": "3/0",
                    "priority": "CRITICAL"
                },
                "createdBy": {
                    "_id": "626b83c4a8b360df9979f96d",
                    "role": "ADMIN",
                    "fullName": "VenkataKrishna, Soma",
                    "email": "soma.venkatakrishna@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/20719/console",
                "executionProgressSteps": [
                    "SUT SETUP IN PROGRESS",
                    "CALCULATING PLATFORM PROFILE",
                    "EXECUTING 1/1 RUN"
                ],
                "batchId": null,
                "executionType": "SINGLE",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test",
                "name": "Benchmark_Test_NIC-IO-TESTPMD_784110_run_1",
                "createdOn": "2025-01-16T10:39:15.755Z",
                "lastModifiedOn": "2025-01-16T10:57:55.939Z"
            },
            "resultsInfo": [
                {
                    "summary": "Result for Run 1",
                    "run": 1,
                    "configSummary": {
                        "ClangVersion": "Data not available",
                        "SMT": "Disable",
                        "TurboBoost": "Auto",
                        "NPS": "NPS1",
                        "AVX": 256,
                        "DpdkVersion": "Data not available",
                        "AVX512withDPDK": false,
                        "PktgenVersion": "Data not available",
                        "ForwardMode": "io",
                        "core": "8,9-10",
                        "NoOfPorts": 1,
                        "nRxnTx": "2Rx-2Tx",
                        "nCnT": "2C2T"
                    },
                    "statistics": [
                        {
                            "TotalPortValues": {
                                "packet Size": "64",
                                "TX frames per second(pps)": 148809524,
                                "RX frames per second(pps)": 3727,
                                "TX(tid=0)_Byte_Count": 1754050346368,
                                "TX(tid=0)_Packet_Count": 27407036662,
                                "RX(tid=1)_Byte_Count": 0,
                                "RX(tid=1)_Packet_Count": 0,
                                "RxValue Frames per Second(Mpps)": 0.003727,
                                "TxValue Frames per Second(Mpps)": 148.809524,
                                "RX min latency": 0,
                                "RX max latency": 0,
                                "RX avg latency": 0,
                                "RX min jitter": -1,
                                "RX max jitter": -1,
                                "RX avg jitter": -1,
                                "RX Lost Packets": 0,
                                "RX Misordered": 0,
                                "RX Payload Errors": 0,
                                "FrameSize": 64
                            },
                            "PortOneOutput": {
                                "packet Size": "64",
                                "TX frames per second(pps)": 148809524,
                                "RX frames per second(pps)": 3727,
                                "TX(tid=0)_Byte_Count": 1754050346368,
                                "TX(tid=0)_Packet_Count": 27407036662,
                                "RX(tid=1)_Byte_Count": 0,
                                "RX(tid=1)_Packet_Count": 0,
                                "RxValue Frames per Second(Mpps)": 0.003727,
                                "TxValue Frames per Second(Mpps)": 148.809524,
                                "RX min latency": 0,
                                "RX max latency": 0,
                                "RX avg latency": 0,
                                "RX min jitter": -1,
                                "RX max jitter": -1,
                                "RX avg jitter": -1,
                                "RX Lost Packets": 0,
                                "RX Misordered": 0,
                                "RX Payload Errors": 0,
                                "FrameSize": 64
                            }
                        }
                    ],
                    "powerstatStatistics": [
                        {
                            "Maximum": 84.47
                        },
                        {
                            "Minimum": 46.53
                        }
                    ],
                    "turbostatStatistics": [
                        {
                            "Maximum_TurboStat_Value": 3101
                        },
                        {
                            "Minimum_TurboStat_Value": 3074
                        }
                    ],
                    "detailedReport": "http://deae-resultserver-dev.amd.com/9b64999e-03fb-4e26-baec-cc7d834d0acf/results/1/dpdk_execution.log",
                    "workloadProfile": {
                        "workloadDescription": {},
                        "workloadMetrics": {},
                        "workloadMeasures": {}
                    }
                }
            ],
            "resultType": "AUTOMATED",
            "name": "Benchmark_Test_NIC-IO-TESTPMD_784110_run_1",
            "groupName": "Benchmark_Test",
            "benchmarkType": "NIC-IO-TESTPMD",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "8534P",
            "benchmarkName": "NIC-IO-TESTPMD-Xena",
            "benchmarkCategory": "Communication",
            "benchmarkScheduleID": "6788e1d3eeb0ade3c835e75d",
            "benchmarkTemplateID": "670524045bc583bcf382c4b8",
            "platformProfileURL": null,
            "resultFormat": "EXTENDED_DPDK",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-16T10:41:20.344318+00:00",
                    "endTime": "2025-01-16T10:57:56.574483+00:00",
                    "elapsedTimeInMins": 16.6038
                },
                {
                    "event": "ApplyingTunings",
                    "startTime": "2025-01-16T10:41:21.559513+00:00",
                    "endTime": "2025-01-16T10:41:21.559540+00:00",
                    "elapsedTimeInMins": 0
                },
                {
                    "event": "ApplyingBIOSTunings",
                    "startTime": "2025-01-16T10:44:38.259879+00:00",
                    "endTime": "2025-01-16T10:44:38.259903+00:00",
                    "elapsedTimeInMins": 0
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T10:51:53.405791+00:00",
                    "endTime": "2025-01-16T10:53:22.785111+00:00",
                    "elapsedTimeInMins": 1.4897
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-16T10:53:36.884253+00:00",
                    "endTime": "2025-01-16T10:57:41.309842+00:00",
                    "elapsedTimeInMins": 4.0738
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-16T10:53:41.264087+00:00",
                    "endTime": "2025-01-16T10:57:28.933646+00:00",
                    "elapsedTimeInMins": 3.7945
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/9b64999e-03fb-4e26-baec-cc7d834d0acf",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": false,
                "server_setup": "single",
                "dpdk_avx": "AVX256",
                "nic_whitelist1": "41:00.0",
                "forward_mode": "io",
                "static_library": "static",
                "flow_control": "off",
                "benchmark_packages_is_required": false,
                "frame_work_prerequisite": false,
                "ipsecmb_is_required": false,
                "compiler_is_required": false,
                "profiling_tools_setup_is_required": false,
                "nic_driver_setup_is_required": false,
                "is_required_latest_kernel": false,
                "numberOfFlows": 32,
                "zeroPkt": false,
                "test_time_duration": 180,
                "turbostat_on": true,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-16T10:38:00.000Z",
                "frame_size": 64,
                "expressSetup": true,
                "LinuxProfilingTool_on": false,
                "benchmarkType": "NIC-IO-TESTPMD",
                "nps": "1",
                "irq_affinity": "",
                "nohz_full": "null",
                "rcu_nocbs": "null",
                "proc_cstate": "null",
                "amd_iommu": "off",
                "smt_status": "Disabled",
                "turbo_status": "Enabled",
                "power_governor": "performance",
                "test_scenario": "Single Core Performance",
                "no_of_ports": 1,
                "testpmd_corelist": "8,9-10",
                "no_of_cores": "2",
                "rx_queues": "2",
                "tx_queues": "2",
                "number_of_channels": "Default",
                "NIC Model": "NVIDIA_ConnectX-7_1x100G",
                "port_numa_config": "0,0",
                "tx_descriptors": "4096",
                "rx_descriptors": "8192",
                "burst_size": 128,
                "Xena_Port_1": "3/0",
                "priority": "CRITICAL"
            },
            "createdOn": "2025-01-16T10:57:55.998Z",
            "lastModifiedOn": "2025-01-16T10:57:55.998Z",
            "__v": 0
        },
        {
            "_id": "6788e36deeb0ade3c835eb14",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-16 09:50 UTC",
                "Summary": {
                    "Server": {
                        "Model": "VOLCANO",
                        "SKU": "PXU-0003626-00",
                        "Manufacturer": "American Megatrends International, LLC.",
                        "Health": "OK",
                        "CPUModel": "9655",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RVOT1003E",
                        "FirmwareVersion": "5720-v1.42 DASH v184.116.201.66",
                        "Microcode": "0xb00211e",
                        "BIOSWorkloadProfile": null,
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Enabled",
                        "SMTControl": "Enable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "Auto",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Auto",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Auto",
                        "NumaNodesPerSocket": "NPS4",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Auto",
                        "L2StreamHWprefetcher": "Auto",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Auto",
                        "XGMILinkSpeed": null,
                        "DataFabricCState": "Auto",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": null,
                        "GMIEncryptionControl": "Auto",
                        "xGMIEncryptionControl": "Auto",
                        "AlgorithmPerformanceBoostDisable": "Auto",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Auto",
                        "AVX512": "Enabled",
                        "MONITORandMWAIT": "Auto",
                        "PCIESpeedControl": null,
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "2",
                        "CPU(s)": "384",
                        "Thread(s)PerCore": "2",
                        "Core(s)PerSocket": "96",
                        "CPUMaxMHz": "4509.3750",
                        "L3Cache": "768 MiB",
                        "L3CacheInstances": "24"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Ubuntu 24.04 LTS",
                        "Kernel": "Linux 6.8.0-35-generic",
                        "NUMAnode(s)": "8"
                    },
                    "Memory": {
                        "DIMMSize": "64.0 GB",
                        "Manufacturer": "SK Hynix",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 6400 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "6000 MT/s",
                        "AllowedSpeedMHz": "6400 MHz",
                        "Total": "1536 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp82s0",
                            "Product": null,
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme1n1",
                            "Size": "3500.0 G"
                        },
                        {
                            "Name": "nvme2n1",
                            "Size": "476.9G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "13.3.0",
                        "NumaBalancing": "0",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "1",
                        "VMDirtyRatio": "8",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "1",
                        "VMDropCaches": null,
                        "StatInterval": "1",
                        "NmiWatchdog": "0",
                        "Watchdog": "0",
                        "WatchdogThresh": "10",
                        "RandomizeVaSpace": "0",
                        "ScheduledRTPeriodUS": "1000000",
                        "ScheduledRTRuntimeUS": "950000",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": null,
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": "1024",
                        "SchedulerUtilClampedMin": "1024",
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "1",
                        "TransparentHugepage": "always",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "always",
                        "TransparentKHugepageDefrag": "1",
                        "HugePagesTotal": "0",
                        "HugePagesFree": "0",
                        "Governor": {
                            "0-383": "performance"
                        },
                        "Driver": {
                            "0-383": "acpi-cpufreq"
                        },
                        "TunedProfiles": null,
                        "CmdLine": "BOOT_IMAGE=/boot/vmlinuz-6.8.0-35-generic root=UUID=fadd4781-d1a1-4298-aba7-beebbb18a2ce ro",
                        "GLIBC": "ldd (Ubuntu GLIBC 2.39-0ubuntu8.2) 2.39",
                        "Binutils": "GNU ld (GNU Binutils for Ubuntu) 2.42",
                        "OpenSSL": "OpenSSL 3.0.13 30 Jan 2024 (Library: OpenSSL 3.0.13 30 Jan 2024)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "198082704",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": []
                }
            },
            "benchmarkExecutionID": "f39907b9-7ac4-4eed-a805-53bd97a96bb6",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "6788d254eeb0ade3c835c444",
                "platformDetails": {
                    "lts": null,
                    "sut": "6788d147eeb0ade3c835c142",
                    "secondarySuts": []
                },
                "databaseConfigurations": null,
                "executionStep": "",
                "executionStatus": "COMPLETED",
                "runType": null,
                "benchmarkExecutionID": "f39907b9-7ac4-4eed-a805-53bd97a96bb6",
                "benchmarkTemplateDetails": {
                    "_id": "61fa56b00306ef1f60f3df97",
                    "benchmarkType": "SPEC-CPU-2017",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "noneDatabaseConfigs": {
                        "gitBranch": "development",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-spec-cpu.git",
                        "runScriptFile": "test_runner.sh"
                    },
                    "runOptions": [],
                    "platformDetails": {
                        "bmc": {
                            "isRequired": false
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "spec",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-speccpu-sut.yml"
                        },
                        "secondarySuts": []
                    },
                    "createdBy": "61f8ee964e513f1b915e082b",
                    "lastUpdatedBy": "61f8ee964e513f1b915e082b",
                    "benchmarkDescription": "Benchmark For SPEC-CPU",
                    "benchmarkName": "SPEC-CPU",
                    "benchmarkCategory": "SPEC"
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "single",
                    "type": "rate",
                    "benchmarks": "int",
                    "tuning": "base",
                    "auto_thp": true,
                    "auto_cpu_perf": true,
                    "auto_basepeak": false,
                    "size": "ref",
                    "reportable": false,
                    "check": false,
                    "turbostat_on": false,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-16T09:32:00.000Z",
                    "AOCC": "5.0.0",
                    "compiler": "AOCC",
                    "compilerversion": "5.0.0",
                    "speccpu_kit_version": "1.1.9",
                    "priority": "CRITICAL"
                },
                "createdBy": {
                    "_id": "64c73934c11996a9b475eb74",
                    "role": "TESTER",
                    "fullName": "Doniprathi, Nitish Kumar",
                    "email": "nitishkumar.doniprathi@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/20682/console",
                "executionProgressSteps": [
                    "SUT SETUP IN PROGRESS",
                    "CALCULATING PLATFORM PROFILE",
                    "EXECUTING 1/1 RUN"
                ],
                "batchId": null,
                "executionType": "SINGLE",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test_Chandrika",
                "name": "Benchmark_Test_Chandrika_SPEC-CPU-2017_875410_run_1",
                "createdOn": "2025-01-16T09:33:08.829Z",
                "lastModifiedOn": "2025-01-16T10:46:05.791Z"
            },
            "resultsInfo": [
                {
                    "summary": "Result for Run 1",
                    "run": 1,
                    "statistics": [
                        {
                            "metricsName": "base",
                            "metricsValue": 2020
                        },
                        {
                            "metricsName": "peak",
                            "metricsValue": "Not Run"
                        }
                    ]
                }
            ],
            "resultType": "AUTOMATED",
            "name": "Benchmark_Test_Chandrika_SPEC-CPU-2017_875410_run_1",
            "groupName": "Benchmark_Test_Chandrika",
            "benchmarkType": "SPEC-CPU-2017",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "9655",
            "benchmarkName": "SPEC-CPU",
            "benchmarkCategory": "SPEC",
            "benchmarkScheduleID": "6788d254eeb0ade3c835c444",
            "benchmarkTemplateID": "61fa56b00306ef1f60f3df97",
            "platformProfileURL": null,
            "resultFormat": "BASE",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-16T09:35:20.076964+00:00",
                    "endTime": "2025-01-16T10:46:14.404624+00:00",
                    "elapsedTimeInMins": 70.9055
                },
                {
                    "event": "SutSetUp",
                    "startTime": "2025-01-16T09:35:21.337394+00:00",
                    "endTime": "2025-01-16T09:47:59.259968+00:00",
                    "elapsedTimeInMins": 12.632
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T09:47:59.260397+00:00",
                    "endTime": "2025-01-16T09:50:55.718215+00:00",
                    "elapsedTimeInMins": 2.941
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-16T09:50:55.818709+00:00",
                    "endTime": "2025-01-16T10:45:45.168884+00:00",
                    "elapsedTimeInMins": 54.8225
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-16T09:50:59.565338+00:00",
                    "endTime": "2025-01-16T10:45:20.955333+00:00",
                    "elapsedTimeInMins": 54.3565
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/f39907b9-7ac4-4eed-a805-53bd97a96bb6",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "single",
                "type": "rate",
                "benchmarks": "int",
                "tuning": "base",
                "auto_thp": true,
                "auto_cpu_perf": true,
                "auto_basepeak": false,
                "size": "ref",
                "reportable": false,
                "check": false,
                "turbostat_on": false,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-16T09:32:00.000Z",
                "AOCC": "5.0.0",
                "compiler": "AOCC",
                "compilerversion": "5.0.0",
                "speccpu_kit_version": "1.1.9",
                "priority": "CRITICAL"
            },
            "createdOn": "2025-01-16T10:46:05.817Z",
            "lastModifiedOn": "2025-01-16T10:46:05.817Z",
            "__v": 0
        },
        {
            "_id": "6788d9dfeeb0ade3c835d7f6",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-16 09:52 UTC",
                "Summary": {
                    "Server": {
                        "Model": "Sunstone",
                        "SKU": "PXU-0004075-00",
                        "Manufacturer": "AMD",
                        "Health": "OK",
                        "CPUModel": "8534P",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RSS0090B",
                        "FirmwareVersion": "sp6_v2.11.0.02b",
                        "Microcode": "0xaa00215",
                        "BIOSWorkloadProfile": "Auto",
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Disabled",
                        "SMTControl": "Disable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "x2APIC",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Enabled",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Disabled",
                        "NumaNodesPerSocket": "NPS1",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Enable",
                        "L2StreamHWprefetcher": "Enable",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Enabled",
                        "XGMILinkSpeed": "Auto",
                        "DataFabricCState": "Disabled",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": "Auto",
                        "GMIEncryptionControl": "Disabled",
                        "xGMIEncryptionControl": "Disabled",
                        "AlgorithmPerformanceBoostDisable": "1",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Disable",
                        "AVX512": "Disabled",
                        "MONITORandMWAIT": "Disabled",
                        "PCIESpeedControl": "Static Target Link Speed (GEN5",
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "1",
                        "CPU(s)": "64",
                        "Thread(s)PerCore": "1",
                        "Core(s)PerSocket": "64",
                        "CPUMaxMHz": "3101.8550",
                        "L3Cache": "128 MiB",
                        "L3CacheInstances": "8"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Ubuntu 22.04.4 LTS",
                        "Kernel": "Linux 5.15.0-130-generic",
                        "NUMAnode(s)": "1"
                    },
                    "Memory": {
                        "DIMMSize": "32 GiB",
                        "Manufacturer": "Micron Technology",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 4800 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "3600 MT/s",
                        "AllowedSpeedMHz": "4800 MT/s",
                        "Total": "386 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp195s0",
                            "Product": "NetXtreme BCM5720 Gigabit Ethernet PCIe",
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f0np0",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f1np1",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "931.5G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "11.4.0",
                        "NumaBalancing": "0",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "60",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "0",
                        "VMDropCaches": null,
                        "StatInterval": "1",
                        "NmiWatchdog": "1",
                        "Watchdog": "1",
                        "WatchdogThresh": "10",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "1000000",
                        "ScheduledRTRuntimeUS": "950000",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": "0",
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": "1024",
                        "SchedulerUtilClampedMin": "1024",
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "madvise",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "madvise",
                        "TransparentKHugepageDefrag": "1",
                        "HugePagesTotal": "24",
                        "HugePagesFree": "24",
                        "Governor": {
                            "0-63": "ondemand"
                        },
                        "Driver": {
                            "0-63": "acpi-cpufreq"
                        },
                        "TunedProfiles": null,
                        "CmdLine": "BOOT_IMAGE=/vmlinuz-5.15.0-130-generic root=/dev/mapper/ubuntu--vg-ubuntu--lv ro default_hugepagesz=1GB isolcpus=0-7 processor.max_cstate=0 nohz_full=0-7 rcu_nocbs=0-7 amd_iommu=on hugepagesz=1GB hugepages=24 irqaffinity=8-16",
                        "GLIBC": "ldd (Ubuntu GLIBC 2.35-0ubuntu3.8) 2.35",
                        "Binutils": "GNU ld (GNU Binutils for Ubuntu) 2.38",
                        "OpenSSL": "OpenSSL 3.0.2 15 Mar 2022 (Library: OpenSSL 3.0.2 15 Mar 2022)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "49470072",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl and seccomp",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": []
                }
            },
            "benchmarkExecutionID": "b0033730-fe91-4a88-b108-3d31dd35193d",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "6788cc51eeb0ade3c835b3a8",
                "platformDetails": {
                    "lts": null,
                    "sut": "6777a62fafec579ef46aba98",
                    "secondarySuts": [
                        "6777a721afec579ef46abc0a"
                    ]
                },
                "databaseConfigurations": null,
                "executionStep": "",
                "executionStatus": "FAILED",
                "runType": null,
                "benchmarkExecutionID": "b0033730-fe91-4a88-b108-3d31dd35193d",
                "benchmarkTemplateDetails": {
                    "_id": "66838caf4d01de54ebdda091",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "NetPerf",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "Communication",
                    "noneDatabaseConfigs": {
                        "gitBranch": "development",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-netperf.git",
                        "runScriptFile": "netperf/test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "development",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-netperf-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": [
                            {
                                "isRequired": true,
                                "gitBranch": "development",
                                "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                                "setupFilePath": "Playbooks/setup-netperf-lts.yml",
                                "teardownFilePath": ""
                            }
                        ]
                    },
                    "createdBy": "626b83c4a8b360df9979f96d",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "Benchmark for Netperf-TCP-RR",
                    "benchmarkName": "NetPerf",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "dual",
                    "test_duration": "120",
                    "turbostat_on": false,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-16T09:01:00.000Z",
                    "expressSetup": true,
                    "LinuxProfilingTool_on": false,
                    "benchmarkType": "NetPerf",
                    "server_host_ip": "10.86.19.1",
                    "hugepage_size": "1GB",
                    "number_of_hugepages": "24",
                    "isolcpus": "0-7",
                    "nps": "1",
                    "irq_affinity": "8-16",
                    "nohz_full": "0-7",
                    "rcu_nocbs": "0-7",
                    "proc_cstate": "0",
                    "amd_iommu": "on",
                    "smt_status": "Enabled",
                    "turbo_status": "Enabled",
                    "testnames": [
                        "TCP_RR",
                        "TCP_STREAM",
                        "TCP_MAERTS",
                        "UDP_STREAM",
                        "UDP_RR"
                    ],
                    "serverifname": "enp65s0f0np0",
                    "clientifname": "enp65s0f0np0",
                    "serverip": "10.10.10.1",
                    "clientip": "10.10.10.2",
                    "packet_size": 64,
                    "local_remote_core_list": "9,10",
                    "power_governor": "ondemand",
                    "AmdProfiling_Tools": "AMDuProf"
                },
                "createdBy": {
                    "_id": "63e4981c772175b9e8ace333",
                    "role": "ADMIN",
                    "fullName": "Tummale, Pratyusha",
                    "email": "pratyusha.tummale@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "console",
                "executionProgressSteps": [
                    "SUT SETUP IN PROGRESS",
                    "CALCULATING PLATFORM PROFILE",
                    "EXECUTING 1/1 RUN"
                ],
                "batchId": null,
                "executionType": "SINGLE",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test",
                "name": "Benchmark_Test_NetPerf_881810_run_1",
                "createdOn": "2025-01-16T09:07:29.443Z",
                "lastModifiedOn": "2025-01-17T06:19:07.856Z"
            },
            "resultsInfo": [
                {
                    "summary": "Result for Run 1",
                    "run": 1,
                    "configSummary": {
                        "ClangVersion": "Data not available",
                        "SMT": "Disable",
                        "TurboBoost": "Auto",
                        "NPS": "NPS1",
                        "AVX": 256
                    },
                    "statistics": [
                        {
                            "metricsName": "TCP_STREAM",
                            "metricsValue": [
                                {
                                    "metricName": "Recv Socket Size",
                                    "metricValue": 131072
                                },
                                {
                                    "metricName": "Send Socket Size",
                                    "metricValue": 131072
                                },
                                {
                                    "metricName": "Send Message Size",
                                    "metricValue": 64
                                },
                                {
                                    "metricName": "Elapsed Time",
                                    "metricValue": 120
                                },
                                {
                                    "metricName": "Throughput",
                                    "metricValue": 0.52
                                },
                                {
                                    "metricName": "Utilization Send Local",
                                    "metricValue": 1.76
                                },
                                {
                                    "metricName": "Utilization Recv Remote",
                                    "metricValue": 0.77
                                },
                                {
                                    "metricName": "Service Demand Send Local",
                                    "metricValue": 17.891
                                },
                                {
                                    "metricName": "Service Demand Recv Remote",
                                    "metricValue": 15.742
                                }
                            ]
                        },
                        {
                            "metricsName": "TCP_RR",
                            "metricsValue": [
                                {
                                    "metricName": "minimumlatency(Microseconds)",
                                    "metricValue": 28
                                },
                                {
                                    "metricName": "maximumlatency(Microseconds)",
                                    "metricValue": 359
                                },
                                {
                                    "metricName": "meanlatency(Microseconds)",
                                    "metricValue": 34.44
                                }
                            ]
                        },
                        {
                            "metricsName": "UDP_STREAM",
                            "metricsValue": [
                                {
                                    "metricName": "Socket Size",
                                    "metricValue": 212992
                                },
                                {
                                    "metricName": "Message Size",
                                    "metricValue": 64
                                },
                                {
                                    "metricName": "Elapsed Time",
                                    "metricValue": 120
                                },
                                {
                                    "metricName": "Throughput",
                                    "metricValue": 0.2
                                },
                                {
                                    "metricName": "CPU Utilization",
                                    "metricValue": 1.74
                                },
                                {
                                    "metricName": "Service Demand",
                                    "metricValue": 57.181
                                }
                            ]
                        },
                        {
                            "metricsName": "TCP_MAERTS",
                            "metricsValue": [
                                {
                                    "metricName": "Recv Socket Size",
                                    "metricValue": 131072
                                },
                                {
                                    "metricName": "Send Socket Size",
                                    "metricValue": 131072
                                },
                                {
                                    "metricName": "Send Message Size",
                                    "metricValue": 16384
                                },
                                {
                                    "metricName": "Elapsed Time",
                                    "metricValue": 120
                                },
                                {
                                    "metricName": "Throughput",
                                    "metricValue": 27.34
                                },
                                {
                                    "metricName": "Utilization Recv Local",
                                    "metricValue": 3.4
                                },
                                {
                                    "metricName": "Utilization Send Remote",
                                    "metricValue": 0.92
                                },
                                {
                                    "metricName": "Service Demand Recv Local",
                                    "metricValue": 0.652
                                },
                                {
                                    "metricName": "Service Demand Send Remote",
                                    "metricValue": 0.353
                                }
                            ]
                        },
                        {
                            "metricsName": "UDP_RR",
                            "metricsValue": [
                                {
                                    "metricName": "Socket Size Send",
                                    "metricValue": 212992
                                },
                                {
                                    "metricName": "Socket Size Recv",
                                    "metricValue": 212992
                                },
                                {
                                    "metricName": "Request Size",
                                    "metricValue": 1
                                },
                                {
                                    "metricName": "Response Size",
                                    "metricValue": 1
                                },
                                {
                                    "metricName": "Elapsed Time",
                                    "metricValue": 120
                                },
                                {
                                    "metricName": "Throughput",
                                    "metricValue": 0
                                },
                                {
                                    "metricName": "CPU Utilization Local",
                                    "metricValue": 0.94
                                },
                                {
                                    "metricName": "CPU Utilization Remote",
                                    "metricValue": 0.44
                                },
                                {
                                    "metricName": "Service Demand Local",
                                    "metricValue": 9789.73
                                },
                                {
                                    "metricName": "Service Demand Remote",
                                    "metricValue": 9206.647
                                }
                            ]
                        }
                    ],
                    "powerstatStatistics": {},
                    "turbostatStatistics": {},
                    "detailedReport": "http://deae-resultserver-dev.amd.com/b0033730-fe91-4a88-b108-3d31dd35193d/results/1/netperf_execution.log",
                    "workloadProfile": {
                        "workloadDescription": {},
                        "workloadMetrics": {},
                        "workloadMeasures": {}
                    }
                }
            ],
            "resultType": "AUTOMATED",
            "name": "Benchmark_Test_NetPerf_881810_run_1",
            "groupName": "Benchmark_Test",
            "benchmarkType": "NetPerf",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "8534P",
            "benchmarkName": "NetPerf",
            "benchmarkCategory": "Communication",
            "benchmarkScheduleID": "6788cc51eeb0ade3c835b3a8",
            "benchmarkTemplateID": "66838caf4d01de54ebdda091",
            "platformProfileURL": null,
            "resultFormat": "BASE",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-16T09:38:15.087019+00:00",
                    "endTime": null,
                    "elapsedTimeInMins": null
                },
                {
                    "event": "ApplyingTunings",
                    "startTime": "2025-01-16T09:38:16.402695+00:00",
                    "endTime": null,
                    "elapsedTimeInMins": null
                },
                {
                    "event": "SutSetUp",
                    "startTime": "2025-01-16T09:38:16.402714+00:00",
                    "endTime": "2025-01-16T09:50:48.671616+00:00",
                    "elapsedTimeInMins": 12.5378
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T09:52:15.132512+00:00",
                    "endTime": "2025-01-16T09:53:21.174623+00:00",
                    "elapsedTimeInMins": 1.1007
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T09:53:21.174829+00:00",
                    "endTime": "2025-01-16T09:54:30.211408+00:00",
                    "elapsedTimeInMins": 1.1506
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-16T09:54:35.200181+00:00",
                    "endTime": "2025-01-16T10:05:14.556258+00:00",
                    "elapsedTimeInMins": 10.6559
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-16T09:54:43.658939+00:00",
                    "endTime": "2025-01-16T10:04:49.442907+00:00",
                    "elapsedTimeInMins": 10.0964
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/b0033730-fe91-4a88-b108-3d31dd35193d",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "dual",
                "test_duration": "120",
                "turbostat_on": false,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-16T09:01:00.000Z",
                "expressSetup": true,
                "LinuxProfilingTool_on": false,
                "benchmarkType": "NetPerf",
                "server_host_ip": "10.86.19.1",
                "hugepage_size": "1GB",
                "number_of_hugepages": "24",
                "isolcpus": "0-7",
                "nps": "1",
                "irq_affinity": "8-16",
                "nohz_full": "0-7",
                "rcu_nocbs": "0-7",
                "proc_cstate": "0",
                "amd_iommu": "on",
                "smt_status": "Enabled",
                "turbo_status": "Enabled",
                "testnames": [
                    "TCP_RR",
                    "TCP_STREAM",
                    "TCP_MAERTS",
                    "UDP_STREAM",
                    "UDP_RR"
                ],
                "serverifname": "enp65s0f0np0",
                "clientifname": "enp65s0f0np0",
                "serverip": "10.10.10.1",
                "clientip": "10.10.10.2",
                "packet_size": 64,
                "local_remote_core_list": "9,10",
                "power_governor": "ondemand",
                "AmdProfiling_Tools": "AMDuProf"
            },
            "createdOn": "2025-01-16T10:05:19.594Z",
            "lastModifiedOn": "2025-01-16T10:05:19.594Z",
            "__v": 0
        },
        {
            "_id": "6788d9daeeb0ade3c835d7b4",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-16 15:29 IST",
                "Summary": {
                    "Server": {
                        "Model": "Sunstone",
                        "SKU": "PXU-0004075-00",
                        "Manufacturer": "AMD",
                        "Health": "OK",
                        "CPUModel": "8534P",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RSS0090B",
                        "FirmwareVersion": "sp6_v2.11.0.05",
                        "Microcode": "0xaa00213",
                        "BIOSWorkloadProfile": "Auto",
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Disabled",
                        "SMTControl": "Disable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "x2APIC",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Enabled",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Disabled",
                        "NumaNodesPerSocket": "NPS1",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Enable",
                        "L2StreamHWprefetcher": "Enable",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Enabled",
                        "XGMILinkSpeed": "Auto",
                        "DataFabricCState": "Disabled",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": "Auto",
                        "GMIEncryptionControl": "Disabled",
                        "xGMIEncryptionControl": "Disabled",
                        "AlgorithmPerformanceBoostDisable": "1",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Disable",
                        "AVX512": "Disabled",
                        "MONITORandMWAIT": "Disabled",
                        "PCIESpeedControl": "Static Target Link Speed (GEN5",
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "1",
                        "CPU(s)": "64",
                        "Thread(s)PerCore": "1",
                        "Core(s)PerSocket": "64",
                        "CPUMaxMHz": "3101.8550",
                        "L3Cache": "128 MiB",
                        "L3CacheInstances": "8"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Red Hat Enterprise Linux 9.4 (Plow)",
                        "Kernel": "Linux 5.14.0-427.13.1.el9_4.x86_64",
                        "NUMAnode(s)": "1"
                    },
                    "Memory": {
                        "DIMMSize": "32 GiB",
                        "Manufacturer": "Micron Technology",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 4800 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "3600 MT/s",
                        "AllowedSpeedMHz": "4800 MT/s",
                        "Total": "386 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp195s0",
                            "Product": "NetXtreme BCM5720 Gigabit Ethernet PCIe",
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f0np0",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f1np1",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "931.5G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "11.5.0",
                        "NumaBalancing": "0",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "0",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "1",
                        "VMDropCaches": null,
                        "StatInterval": "10",
                        "NmiWatchdog": "0",
                        "Watchdog": "0",
                        "WatchdogThresh": "0",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "-1",
                        "ScheduledRTRuntimeUS": "-1",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": "0",
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": null,
                        "SchedulerUtilClampedMin": null,
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "never",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "never",
                        "TransparentKHugepageDefrag": "0",
                        "HugePagesTotal": "0",
                        "HugePagesFree": "0",
                        "Governor": {
                            "0-63": "performance"
                        },
                        "Driver": {
                            "0-63": "acpi-cpufreq"
                        },
                        "TunedProfiles": "throughput-performance",
                        "CmdLine": "BOOT_IMAGE=(hd0,gpt2)/vmlinuz-5.14.0-427.13.1.el9_4.x86_64 root=/dev/mapper/rhel_sunstone--2dbf--os-root ro crashkernel=1G-4G:192M,4G-64G:256M,64G-:512M resume=/dev/mapper/rhel_sunstone--2dbf--os-swap rd.lvm.lv=rhel_sunstone-2dbf-os/root rd.lvm.lv=rhel_sunstone-2dbf-os/swap rhgb quiet",
                        "GLIBC": "ldd (GNU libc) 2.34",
                        "Binutils": "GNU ld version 2.35.2-54.el9",
                        "OpenSSL": "OpenSSL 3.0.7 1 Nov 2022 (Library: OpenSSL 3.0.7 1 Nov 2022)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "unlimited",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS, IBPB conditional, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": []
                }
            },
            "benchmarkExecutionID": "5ff644af-294b-47c7-a762-6a8df69bbfc5",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "6788d21ceeb0ade3c835c399",
                "platformDetails": {
                    "lts": null,
                    "sut": "65f03727589e75b3ccc35cc3",
                    "secondarySuts": []
                },
                "databaseConfigurations": null,
                "executionStep": "",
                "executionStatus": "COMPLETED",
                "runType": null,
                "benchmarkExecutionID": "5ff644af-294b-47c7-a762-6a8df69bbfc5",
                "benchmarkTemplateDetails": {
                    "_id": "670524045bc583bcf382c4b8",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "NIC-IO-TESTPMD",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "Communication",
                    "noneDatabaseConfigs": {
                        "gitBranch": "ipsec_bug",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-dpdk.git",
                        "runScriptFile": "dpdk-testpmd/test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "development",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-dpdk-testpmd-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": []
                    },
                    "createdBy": "64797bd706abaf01a6c2d726",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "The Data Plane Development Kit (DPDK) is an open source software project managed by the Linux Foundation",
                    "benchmarkName": "NIC-IO-TESTPMD-Xena",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "single",
                    "dpdk_avx": "AVX256",
                    "nic_whitelist1": "41:00.0",
                    "forward_mode": "io",
                    "static_library": "static",
                    "flow_control": "off",
                    "benchmark_packages_is_required": false,
                    "frame_work_prerequisite": false,
                    "ipsecmb_is_required": true,
                    "compiler_is_required": true,
                    "profiling_tools_setup_is_required": false,
                    "nic_driver_setup_is_required": true,
                    "is_required_latest_kernel": false,
                    "numberOfFlows": 32,
                    "zeroPkt": false,
                    "test_time_duration": 180,
                    "turbostat_on": true,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-16T09:32:00.000Z",
                    "frame_size": 64,
                    "expressSetup": true,
                    "LinuxProfilingTool_on": false,
                    "benchmarkType": "NIC-IO-TESTPMD",
                    "dpdk_setup_is_required": true,
                    "dpdkversion": "v24.03",
                    "gcc_version": "Default",
                    "power_governor": "performance",
                    "Dc_args": "-march=native -Ofast",
                    "test_scenario": "Single Core Performance",
                    "nic_vendor": "NVIDIA",
                    "mprq_en_value": "1",
                    "mprq_log_stride_num_value": "9",
                    "rxq_pkt_pad_en_value": "1",
                    "rxqs_min_mprq_value": "1",
                    "txq_inline_mpw_value": "128",
                    "nvidia_pmd": "PMD_Param",
                    "mellanox_version": "24.10-0.7.0.0",
                    "no_of_ports": 1,
                    "testpmd_corelist": "8,9-10",
                    "no_of_cores": "2",
                    "rx_queues": "2",
                    "tx_queues": "2",
                    "number_of_channels": "6",
                    "NIC Model": "NVIDIA_ConnectX-7_1x100G",
                    "port_numa_config": "0,0",
                    "tx_descriptors": "4096",
                    "rx_descriptors": "8192",
                    "burst_size": 128,
                    "Xena_Port_1": "3/0",
                    "priority": "CRITICAL"
                },
                "createdBy": {
                    "_id": "626b83c4a8b360df9979f96d",
                    "role": "ADMIN",
                    "fullName": "VenkataKrishna, Soma",
                    "email": "soma.venkatakrishna@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/20687/console",
                "executionProgressSteps": [
                    "SUT SETUP IN PROGRESS",
                    "CALCULATING PLATFORM PROFILE",
                    "EXECUTING 1/1 RUN"
                ],
                "batchId": null,
                "executionType": "SINGLE",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test",
                "name": "Benchmark_Test_NIC-IO-TESTPMD_173710_run_1",
                "createdOn": "2025-01-16T09:32:12.401Z",
                "lastModifiedOn": "2025-01-16T10:05:14.886Z"
            },
            "resultsInfo": [
                {
                    "summary": "Result for Run 1",
                    "run": 1,
                    "configSummary": {
                        "GccVersion": "Default",
                        "SMT": "Disable",
                        "TurboBoost": "Auto",
                        "NPS": "NPS1",
                        "AVX": 256,
                        "DpdkVersion": "v24.03",
                        "AVX512withDPDK": false,
                        "PktgenVersion": "Data not available",
                        "ForwardMode": "io",
                        "core": "8,9-10",
                        "NoOfPorts": 1,
                        "nRxnTx": "0Rx-0Tx",
                        "nCnT": "2C2T"
                    },
                    "statistics": [
                        {
                            "TotalPortValues": {
                                "packet Size": "64",
                                "TX frames per second(pps)": 148809524,
                                "RX frames per second(pps)": 3724,
                                "TX(tid=0)_Byte_Count": 1754042541632,
                                "TX(tid=0)_Packet_Count": 27406914713,
                                "RX(tid=1)_Byte_Count": 0,
                                "RX(tid=1)_Packet_Count": 0,
                                "RxValue Frames per Second(Mpps)": 0.003724,
                                "TxValue Frames per Second(Mpps)": 148.809524,
                                "RX min latency": 0,
                                "RX max latency": 0,
                                "RX avg latency": 0,
                                "RX min jitter": -1,
                                "RX max jitter": -1,
                                "RX avg jitter": -1,
                                "RX Lost Packets": 0,
                                "RX Misordered": 0,
                                "RX Payload Errors": 0,
                                "FrameSize": 64
                            },
                            "PortOneOutput": {
                                "packet Size": "64",
                                "TX frames per second(pps)": 148809524,
                                "RX frames per second(pps)": 3724,
                                "TX(tid=0)_Byte_Count": 1754042541632,
                                "TX(tid=0)_Packet_Count": 27406914713,
                                "RX(tid=1)_Byte_Count": 0,
                                "RX(tid=1)_Packet_Count": 0,
                                "RxValue Frames per Second(Mpps)": 0.003724,
                                "TxValue Frames per Second(Mpps)": 148.809524,
                                "RX min latency": 0,
                                "RX max latency": 0,
                                "RX avg latency": 0,
                                "RX min jitter": -1,
                                "RX max jitter": -1,
                                "RX avg jitter": -1,
                                "RX Lost Packets": 0,
                                "RX Misordered": 0,
                                "RX Payload Errors": 0,
                                "FrameSize": 64
                            }
                        }
                    ],
                    "powerstatStatistics": [
                        {
                            "Maximum": 79.72
                        },
                        {
                            "Minimum": 53.1
                        }
                    ],
                    "turbostatStatistics": [
                        {
                            "Maximum_TurboStat_Value": 3103
                        },
                        {
                            "Minimum_TurboStat_Value": 3073
                        }
                    ],
                    "detailedReport": "http://deae-resultserver-dev.amd.com/5ff644af-294b-47c7-a762-6a8df69bbfc5/results/1/dpdk_execution.log",
                    "workloadProfile": {
                        "workloadDescription": {},
                        "workloadMetrics": {},
                        "workloadMeasures": {}
                    }
                }
            ],
            "resultType": "AUTOMATED",
            "name": "Benchmark_Test_NIC-IO-TESTPMD_173710_run_1",
            "groupName": "Benchmark_Test",
            "benchmarkType": "NIC-IO-TESTPMD",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "8534P",
            "benchmarkName": "NIC-IO-TESTPMD-Xena",
            "benchmarkCategory": "Communication",
            "benchmarkScheduleID": "6788d21ceeb0ade3c835c399",
            "benchmarkTemplateID": "670524045bc583bcf382c4b8",
            "platformProfileURL": null,
            "resultFormat": "EXTENDED_DPDK",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-16T09:41:20.137872+00:00",
                    "endTime": "2025-01-16T10:05:15.475392+00:00",
                    "elapsedTimeInMins": 23.9223
                },
                {
                    "event": "ApplyingTunings",
                    "startTime": "2025-01-16T09:49:00.317903+00:00",
                    "endTime": "2025-01-16T09:49:00.317929+00:00",
                    "elapsedTimeInMins": 0
                },
                {
                    "event": "ApplyingBIOSTunings",
                    "startTime": "2025-01-16T09:52:18.035061+00:00",
                    "endTime": "2025-01-16T09:52:18.035086+00:00",
                    "elapsedTimeInMins": 0
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T09:59:29.864626+00:00",
                    "endTime": "2025-01-16T10:00:57.768807+00:00",
                    "elapsedTimeInMins": 1.4651
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-16T10:01:11.929727+00:00",
                    "endTime": "2025-01-16T10:05:00.421175+00:00",
                    "elapsedTimeInMins": 3.8082
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-16T10:01:16.359041+00:00",
                    "endTime": "2025-01-16T10:04:48.203661+00:00",
                    "elapsedTimeInMins": 3.5307
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/5ff644af-294b-47c7-a762-6a8df69bbfc5",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "single",
                "dpdk_avx": "AVX256",
                "nic_whitelist1": "41:00.0",
                "forward_mode": "io",
                "static_library": "static",
                "flow_control": "off",
                "benchmark_packages_is_required": false,
                "frame_work_prerequisite": false,
                "ipsecmb_is_required": true,
                "compiler_is_required": true,
                "profiling_tools_setup_is_required": false,
                "nic_driver_setup_is_required": true,
                "is_required_latest_kernel": false,
                "numberOfFlows": 32,
                "zeroPkt": false,
                "test_time_duration": 180,
                "turbostat_on": true,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-16T09:32:00.000Z",
                "frame_size": 64,
                "expressSetup": true,
                "LinuxProfilingTool_on": false,
                "benchmarkType": "NIC-IO-TESTPMD",
                "dpdk_setup_is_required": true,
                "dpdkversion": "v24.03",
                "gcc_version": "Default",
                "power_governor": "performance",
                "Dc_args": "-march=native -Ofast",
                "test_scenario": "Single Core Performance",
                "nic_vendor": "NVIDIA",
                "mprq_en_value": "1",
                "mprq_log_stride_num_value": "9",
                "rxq_pkt_pad_en_value": "1",
                "rxqs_min_mprq_value": "1",
                "txq_inline_mpw_value": "128",
                "nvidia_pmd": "PMD_Param",
                "mellanox_version": "24.10-0.7.0.0",
                "no_of_ports": 1,
                "testpmd_corelist": "8,9-10",
                "no_of_cores": "2",
                "rx_queues": "2",
                "tx_queues": "2",
                "number_of_channels": "6",
                "NIC Model": "NVIDIA_ConnectX-7_1x100G",
                "port_numa_config": "0,0",
                "tx_descriptors": "4096",
                "rx_descriptors": "8192",
                "burst_size": 128,
                "Xena_Port_1": "3/0",
                "priority": "CRITICAL"
            },
            "createdOn": "2025-01-16T10:05:14.934Z",
            "lastModifiedOn": "2025-01-16T10:05:14.934Z",
            "__v": 0
        },
        {
            "_id": "6788d404eeb0ade3c835c881",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-16 15:05 IST",
                "Summary": {
                    "Server": {
                        "Model": "Sunstone",
                        "SKU": "PXU-0004075-00",
                        "Manufacturer": "AMD",
                        "Health": "OK",
                        "CPUModel": "8534P",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RSS0090B",
                        "FirmwareVersion": "sp6_v2.11.0.05",
                        "Microcode": "0xaa00213",
                        "BIOSWorkloadProfile": "Auto",
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Disabled",
                        "SMTControl": "Disable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "x2APIC",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Enabled",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Disabled",
                        "NumaNodesPerSocket": "NPS1",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Enable",
                        "L2StreamHWprefetcher": "Enable",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Enabled",
                        "XGMILinkSpeed": "Auto",
                        "DataFabricCState": "Disabled",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": "Auto",
                        "GMIEncryptionControl": "Disabled",
                        "xGMIEncryptionControl": "Disabled",
                        "AlgorithmPerformanceBoostDisable": "1",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Disable",
                        "AVX512": "Disabled",
                        "MONITORandMWAIT": "Disabled",
                        "PCIESpeedControl": "Static Target Link Speed (GEN5",
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "1",
                        "CPU(s)": "64",
                        "Thread(s)PerCore": "1",
                        "Core(s)PerSocket": "64",
                        "CPUMaxMHz": "3101.8550",
                        "L3Cache": "128 MiB",
                        "L3CacheInstances": "8"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Red Hat Enterprise Linux 9.4 (Plow)",
                        "Kernel": "Linux 5.14.0-427.13.1.el9_4.x86_64",
                        "NUMAnode(s)": "1"
                    },
                    "Memory": {
                        "DIMMSize": "32 GiB",
                        "Manufacturer": "Micron Technology",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 4800 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "3600 MT/s",
                        "AllowedSpeedMHz": "4800 MT/s",
                        "Total": "386 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp195s0",
                            "Product": "NetXtreme BCM5720 Gigabit Ethernet PCIe",
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f0np0",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f1np1",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "100.0 Gbps",
                            "LinkDetected": "yes"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "931.5G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "11.5.0",
                        "NumaBalancing": "0",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "0",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "1",
                        "VMDropCaches": null,
                        "StatInterval": "10",
                        "NmiWatchdog": "0",
                        "Watchdog": "0",
                        "WatchdogThresh": "0",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "-1",
                        "ScheduledRTRuntimeUS": "-1",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": "0",
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": null,
                        "SchedulerUtilClampedMin": null,
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "never",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "never",
                        "TransparentKHugepageDefrag": "0",
                        "HugePagesTotal": "0",
                        "HugePagesFree": "0",
                        "Governor": {
                            "0-63": "performance"
                        },
                        "Driver": {
                            "0-63": "acpi-cpufreq"
                        },
                        "TunedProfiles": "throughput-performance",
                        "CmdLine": "BOOT_IMAGE=(hd0,gpt2)/vmlinuz-5.14.0-427.13.1.el9_4.x86_64 root=/dev/mapper/rhel_sunstone--2dbf--os-root ro crashkernel=1G-4G:192M,4G-64G:256M,64G-:512M resume=/dev/mapper/rhel_sunstone--2dbf--os-swap rd.lvm.lv=rhel_sunstone-2dbf-os/root rd.lvm.lv=rhel_sunstone-2dbf-os/swap rhgb quiet",
                        "GLIBC": "ldd (GNU libc) 2.34",
                        "Binutils": "GNU ld version 2.35.2-54.el9",
                        "OpenSSL": "OpenSSL 3.0.7 1 Nov 2022 (Library: OpenSSL 3.0.7 1 Nov 2022)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "8192",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS, IBPB conditional, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": []
                }
            },
            "benchmarkExecutionID": "38a4ad04-f8c4-45b7-8f19-b1d48b4c9fa3",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "6788b4d9f8d20cd90fdeaeec",
                "platformDetails": {
                    "lts": null,
                    "sut": "65f03727589e75b3ccc35cc3",
                    "secondarySuts": []
                },
                "databaseConfigurations": null,
                "executionStep": "",
                "executionStatus": "COMPLETED",
                "runType": null,
                "benchmarkExecutionID": "38a4ad04-f8c4-45b7-8f19-b1d48b4c9fa3",
                "benchmarkTemplateDetails": {
                    "_id": "670524045bc583bcf382c4b8",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "NIC-IO-TESTPMD",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "Communication",
                    "noneDatabaseConfigs": {
                        "gitBranch": "ipsec_bug",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-dpdk.git",
                        "runScriptFile": "dpdk-testpmd/test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "development",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-dpdk-testpmd-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": []
                    },
                    "createdBy": "64797bd706abaf01a6c2d726",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "The Data Plane Development Kit (DPDK) is an open source software project managed by the Linux Foundation",
                    "benchmarkName": "NIC-IO-TESTPMD-Xena",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "single",
                    "dpdk_avx": "AVX256",
                    "nic_whitelist1": "41:00.0",
                    "forward_mode": "io",
                    "static_library": "static",
                    "flow_control": "off",
                    "benchmark_packages_is_required": true,
                    "frame_work_prerequisite": true,
                    "ipsecmb_is_required": true,
                    "compiler_is_required": true,
                    "profiling_tools_setup_is_required": true,
                    "nic_driver_setup_is_required": true,
                    "is_required_latest_kernel": false,
                    "numberOfFlows": 32,
                    "zeroPkt": false,
                    "test_time_duration": 180,
                    "turbostat_on": true,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-16T07:27:00.000Z",
                    "frame_size": 64,
                    "expressSetup": true,
                    "LinuxProfilingTool_on": false,
                    "benchmarkType": "NIC-IO-TESTPMD",
                    "dpdk_setup_is_required": true,
                    "dpdkversion": "v24.03",
                    "gcc_version": "Default",
                    "power_governor": "performance",
                    "Dc_args": "-march=native",
                    "test_scenario": "Single Core Performance",
                    "nic_vendor": "NVIDIA",
                    "mprq_en_value": "1",
                    "mprq_log_stride_num_value": "9",
                    "rxq_pkt_pad_en_value": "1",
                    "rxqs_min_mprq_value": "1",
                    "txq_inline_mpw_value": "128",
                    "nvidia_pmd": "PMD_Param",
                    "mellanox_version": "24.10-0.7.0.0  ",
                    "no_of_ports": 1,
                    "testpmd_corelist": "8,9-10",
                    "NIC Model": "NVIDIA_ConnectX-7_1x100G",
                    "no_of_cores": "2",
                    "rx_queues": "2",
                    "tx_queues": "2",
                    "number_of_channels": "6",
                    "port_numa_config": "0,0",
                    "tx_descriptors": "4096",
                    "rx_descriptors": "8192",
                    "burst_size": 32,
                    "Xena_Port_1": "3/0",
                    "priority": "CRITICAL"
                },
                "createdBy": {
                    "_id": "64797bd706abaf01a6c2d726",
                    "role": "EXPERT",
                    "fullName": "Sanala, Keerthana",
                    "email": "keerthana.sanala@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/20665/console",
                "executionProgressSteps": [
                    "SUT SETUP IN PROGRESS",
                    "CALCULATING PLATFORM PROFILE",
                    "EXECUTING 1/1 RUN"
                ],
                "batchId": null,
                "executionType": "SINGLE",
                "runCategory": "Functional_Test",
                "groupName": "Functional_Test",
                "name": "Functional_Test_NIC-IO-TESTPMD_575910_run_1",
                "createdOn": "2025-01-16T07:27:21.528Z",
                "lastModifiedOn": "2025-01-16T09:40:20.104Z"
            },
            "resultsInfo": [
                {
                    "summary": "Result for Run 1",
                    "run": 1,
                    "configSummary": {
                        "GccVersion": "Default",
                        "SMT": "Disable",
                        "TurboBoost": "Auto",
                        "NPS": "NPS1",
                        "AVX": 256,
                        "DpdkVersion": "v24.03",
                        "AVX512withDPDK": false,
                        "PktgenVersion": "Data not available",
                        "ForwardMode": "io",
                        "core": "8,9-10",
                        "NoOfPorts": 1,
                        "nRxnTx": "0Rx-0Tx",
                        "nCnT": "2C2T"
                    },
                    "statistics": [
                        {
                            "TotalPortValues": {
                                "packet Size": "64",
                                "TX frames per second(pps)": 148809524,
                                "RX frames per second(pps)": 0,
                                "TX(tid=0)_Byte_Count": 1758798382080,
                                "TX(tid=0)_Packet_Count": 27481224720,
                                "RX(tid=1)_Byte_Count": 0,
                                "RX(tid=1)_Packet_Count": 0,
                                "RxValue Frames per Second(Mpps)": 0,
                                "TxValue Frames per Second(Mpps)": 148.809524,
                                "RX min latency": 0,
                                "RX max latency": 0,
                                "RX avg latency": 0,
                                "RX min jitter": -1,
                                "RX max jitter": -1,
                                "RX avg jitter": -1,
                                "RX Lost Packets": 0,
                                "RX Misordered": 0,
                                "RX Payload Errors": 0,
                                "FrameSize": 64
                            },
                            "PortOneOutput": {
                                "packet Size": "64",
                                "TX frames per second(pps)": 148809524,
                                "RX frames per second(pps)": 0,
                                "TX(tid=0)_Byte_Count": 1758798382080,
                                "TX(tid=0)_Packet_Count": 27481224720,
                                "RX(tid=1)_Byte_Count": 0,
                                "RX(tid=1)_Packet_Count": 0,
                                "RxValue Frames per Second(Mpps)": 0,
                                "TxValue Frames per Second(Mpps)": 148.809524,
                                "RX min latency": 0,
                                "RX max latency": 0,
                                "RX avg latency": 0,
                                "RX min jitter": -1,
                                "RX max jitter": -1,
                                "RX avg jitter": -1,
                                "RX Lost Packets": 0,
                                "RX Misordered": 0,
                                "RX Payload Errors": 0,
                                "FrameSize": 64
                            }
                        }
                    ],
                    "powerstatStatistics": [
                        {
                            "Maximum": 69
                        },
                        {
                            "Minimum": 52.69
                        }
                    ],
                    "turbostatStatistics": [
                        {
                            "Maximum_TurboStat_Value": 3104
                        },
                        {
                            "Minimum_TurboStat_Value": 3081
                        }
                    ],
                    "detailedReport": "http://deae-resultserver-dev.amd.com/38a4ad04-f8c4-45b7-8f19-b1d48b4c9fa3/results/1/dpdk_execution.log",
                    "workloadProfile": {
                        "workloadDescription": {},
                        "workloadMetrics": {},
                        "workloadMeasures": {}
                    }
                }
            ],
            "resultType": "AUTOMATED",
            "name": "Functional_Test_NIC-IO-TESTPMD_575910_run_1",
            "groupName": "Functional_Test",
            "benchmarkType": "NIC-IO-TESTPMD",
            "runCategory": "Functional_Test",
            "runType": null,
            "cpuModel": "8534P",
            "benchmarkName": "NIC-IO-TESTPMD-Xena",
            "benchmarkCategory": "Communication",
            "benchmarkScheduleID": "6788b4d9f8d20cd90fdeaeec",
            "benchmarkTemplateID": "670524045bc583bcf382c4b8",
            "platformProfileURL": null,
            "resultFormat": "EXTENDED_DPDK",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-16T09:05:19.980900+00:00",
                    "endTime": "2025-01-16T09:40:20.648457+00:00",
                    "elapsedTimeInMins": 35.0111
                },
                {
                    "event": "ApplyingTunings",
                    "startTime": "2025-01-16T09:24:32.943092+00:00",
                    "endTime": "2025-01-16T09:24:32.943117+00:00",
                    "elapsedTimeInMins": 0
                },
                {
                    "event": "ApplyingBIOSTunings",
                    "startTime": "2025-01-16T09:27:50.912737+00:00",
                    "endTime": "2025-01-16T09:27:50.912756+00:00",
                    "elapsedTimeInMins": 0
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T09:35:01.917237+00:00",
                    "endTime": "2025-01-16T09:36:02.427773+00:00",
                    "elapsedTimeInMins": 1.0085
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-16T09:36:16.490759+00:00",
                    "endTime": "2025-01-16T09:40:05.703085+00:00",
                    "elapsedTimeInMins": 3.8202
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-16T09:36:20.869848+00:00",
                    "endTime": "2025-01-16T09:39:53.351080+00:00",
                    "elapsedTimeInMins": 3.5414
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/38a4ad04-f8c4-45b7-8f19-b1d48b4c9fa3",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "single",
                "dpdk_avx": "AVX256",
                "nic_whitelist1": "41:00.0",
                "forward_mode": "io",
                "static_library": "static",
                "flow_control": "off",
                "benchmark_packages_is_required": true,
                "frame_work_prerequisite": true,
                "ipsecmb_is_required": true,
                "compiler_is_required": true,
                "profiling_tools_setup_is_required": true,
                "nic_driver_setup_is_required": true,
                "is_required_latest_kernel": false,
                "numberOfFlows": 32,
                "zeroPkt": false,
                "test_time_duration": 180,
                "turbostat_on": true,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-16T07:27:00.000Z",
                "frame_size": 64,
                "expressSetup": true,
                "LinuxProfilingTool_on": false,
                "benchmarkType": "NIC-IO-TESTPMD",
                "dpdk_setup_is_required": true,
                "dpdkversion": "v24.03",
                "gcc_version": "Default",
                "power_governor": "performance",
                "Dc_args": "-march=native",
                "test_scenario": "Single Core Performance",
                "nic_vendor": "NVIDIA",
                "mprq_en_value": "1",
                "mprq_log_stride_num_value": "9",
                "rxq_pkt_pad_en_value": "1",
                "rxqs_min_mprq_value": "1",
                "txq_inline_mpw_value": "128",
                "nvidia_pmd": "PMD_Param",
                "mellanox_version": "24.10-0.7.0.0  ",
                "no_of_ports": 1,
                "testpmd_corelist": "8,9-10",
                "NIC Model": "NVIDIA_ConnectX-7_1x100G",
                "no_of_cores": "2",
                "rx_queues": "2",
                "tx_queues": "2",
                "number_of_channels": "6",
                "port_numa_config": "0,0",
                "tx_descriptors": "4096",
                "rx_descriptors": "8192",
                "burst_size": 32,
                "Xena_Port_1": "3/0",
                "priority": "CRITICAL"
            },
            "createdOn": "2025-01-16T09:40:20.171Z",
            "lastModifiedOn": "2025-01-16T09:40:20.171Z",
            "__v": 0
        },
        {
            "_id": "6788d317eeb0ade3c835c6ea",
            "baselineInfo": {
                "isBasedLined": false,
                "name": null
            },
            "sutInstanceMetadata": {
                "sutType": "server",
                "geoLocation": null,
                "cloudProvider": null,
                "instanceType": null
            },
            "entitlementChangeRequest": {
                "currentLevel": [],
                "levelToBeUpgraded": [],
                "requestedBy": null,
                "status": null,
                "comments": null,
                "approvers": []
            },
            "platformProfile": {
                "platform_profiler_version": "5.3.0",
                "platform_profiler_timestamp": "2025-01-16 09:22 UTC",
                "Summary": {
                    "Server": {
                        "Model": "Sunstone",
                        "SKU": "PXU-0004075-00",
                        "Manufacturer": "AMD",
                        "Health": "OK",
                        "CPUModel": "8534P",
                        "Region": null
                    },
                    "BIOS": {
                        "BIOSVersion": "RSS0090B",
                        "FirmwareVersion": "sp6_v2.11.0.02b",
                        "Microcode": "0xaa00215",
                        "BIOSWorkloadProfile": "Auto",
                        "AgesaVersion": null,
                        "TransparentSME": "Auto",
                        "ThermalConfig": "Auto",
                        "TDP": "Default",
                        "SR-IOVSupport": "Disabled",
                        "SMTControl": "Disable",
                        "L1StridePrefetcher": "Auto",
                        "L1RegionPrefetcher": "Auto",
                        "LocalApicMode": "x2APIC",
                        "CorePerformanceBoost": "Auto",
                        "FmaxBoostLimitControl": "Auto",
                        "PowerProfile": "High Performance Mode",
                        "MemoryInterleaving": "Auto",
                        "MemoryRefreshRate": "3.9 usec",
                        "ProcessorC-States": "Enabled",
                        "3DV-Cache": "Auto",
                        "LastLevelCacheAsNUMANode": "Disabled",
                        "NumaNodesPerSocket": "NPS1",
                        "DeterminismSlider": "Power",
                        "MaxMemoryClockSpeed": "Auto",
                        "L1StreamHwPrefetcher": "Enable",
                        "L2StreamHWprefetcher": "Enable",
                        "L2UpDownPrefetcher": "Auto",
                        "IOMMUSupport": "Enabled",
                        "XGMILinkSpeed": "Auto",
                        "DataFabricCState": "Disabled",
                        "DeterminismControl": "Manual",
                        "InfinityFabricPstate": "Auto",
                        "xGMIForceLinkWidth": "Auto",
                        "xGMIMaxLinkWidth": "Auto",
                        "GMIEncryptionControl": "Disabled",
                        "xGMIEncryptionControl": "Disabled",
                        "AlgorithmPerformanceBoostDisable": "1",
                        "VirtualizationSupport": "Enabled",
                        "ACPIAutoConfiguration": "Disabled",
                        "SecureMemoryEncryption": "Disable",
                        "AVX512": "Disabled",
                        "MONITORandMWAIT": "Disabled",
                        "PCIESpeedControl": "Static Target Link Speed (GEN5",
                        "PCIELinkSpeed": "Auto",
                        "SEVControl": "Enable",
                        "SNPMemory": "Auto",
                        "SVMMode": "Enabled",
                        "AES": "AES-256",
                        "SEV-SNPSupport": "Auto",
                        "PPTControl": "Auto",
                        "PPT": "Default"
                    },
                    "CPU": {
                        "Architecture": "x86-64",
                        "Socket(s)": "1",
                        "CPU(s)": "64",
                        "Thread(s)PerCore": "1",
                        "Core(s)PerSocket": "64",
                        "CPUMaxMHz": "3101.8550",
                        "L3Cache": "128 MiB",
                        "L3CacheInstances": "8"
                    },
                    "OS": {
                        "SystemType": "server",
                        "HypervisorVendor": null,
                        "OperatingSystem": "Ubuntu 22.04.4 LTS",
                        "Kernel": "Linux 5.15.0-130-generic",
                        "NUMAnode(s)": "1"
                    },
                    "Memory": {
                        "DIMMSize": "32 GiB",
                        "Manufacturer": "Micron Technology",
                        "MemoryModuleType": "DIMM Synchronous Registered (Buffered) 4800 MHz (0.2 ns)",
                        "OperatingSpeedMhz": "3600 MT/s",
                        "AllowedSpeedMHz": "4800 MT/s",
                        "Total": "386 GiB"
                    },
                    "Network": [
                        {
                            "Name": "enp195s0",
                            "Product": "NetXtreme BCM5720 Gigabit Ethernet PCIe",
                            "Speed": "1.0 Gbps",
                            "LinkDetected": "yes"
                        },
                        {
                            "Name": "enp65s0f0np0",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "Unknown!",
                            "LinkDetected": "no"
                        },
                        {
                            "Name": "enp65s0f1np1",
                            "Product": "MT2910 Family [ConnectX-7]",
                            "Speed": "Unknown!",
                            "LinkDetected": "no"
                        }
                    ],
                    "Disk": [
                        {
                            "Name": "nvme0n1",
                            "Size": "931.5G"
                        }
                    ],
                    "Tunings": {
                        "FrequencyBoost": "enabled",
                        "GccVersion": "11.4.0",
                        "NumaBalancing": "0",
                        "VMOvercommitMemory": "0",
                        "VMSwappiness": "60",
                        "VMDirtyRatio": "20",
                        "VMDirtyBackgroundRatio": "10",
                        "VMZoneReclaimMode": "0",
                        "VMDropCaches": null,
                        "StatInterval": "1",
                        "NmiWatchdog": "1",
                        "Watchdog": "1",
                        "WatchdogThresh": "10",
                        "RandomizeVaSpace": "2",
                        "ScheduledRTPeriodUS": "1000000",
                        "ScheduledRTRuntimeUS": "950000",
                        "SchedulerAutoGroupEnabled": "1",
                        "SchedulerCFSBandwidthSliceUS": "5000",
                        "SchedulerChildRunsFirst": "0",
                        "SchedulerLatencyNS": null,
                        "SchedulerMigrationCostNS": null,
                        "SchedulerMinGranularityNS": null,
                        "SchedulerNRMigrate": null,
                        "SchedulerRRTimesliceMS": "100",
                        "SchedulerStats": "0",
                        "SchedulerTunableScaling": null,
                        "SchedulerUtilClampedMax": "1024",
                        "SchedulerUtilClampedMin": "1024",
                        "SchedulerWakeupGranularityNS": null,
                        "NetCoreSomaxconn": "4096",
                        "KsmRun": "0",
                        "TransparentHugepage": "madvise",
                        "TransparentHugepageSize": "2097152",
                        "TransparentHugepageDefrag": "madvise",
                        "TransparentKHugepageDefrag": "1",
                        "HugePagesTotal": "24",
                        "HugePagesFree": "24",
                        "Governor": {
                            "0-63": "ondemand"
                        },
                        "Driver": {
                            "0-63": "acpi-cpufreq"
                        },
                        "TunedProfiles": null,
                        "CmdLine": "BOOT_IMAGE=/vmlinuz-5.15.0-130-generic root=/dev/mapper/ubuntu--vg-ubuntu--lv ro default_hugepagesz=1GB isolcpus=0-7 processor.max_cstate=0 nohz_full=0-7 rcu_nocbs=0-7 amd_iommu=on hugepagesz=1GB hugepages=24 irqaffinity=8-16",
                        "GLIBC": "ldd (Ubuntu GLIBC 2.35-0ubuntu3.8) 2.35",
                        "Binutils": "GNU ld (GNU Binutils for Ubuntu) 2.38",
                        "OpenSSL": "OpenSSL 3.0.2 15 Mar 2022 (Library: OpenSSL 3.0.2 15 Mar 2022)",
                        "CoreFileSize(Blocks)": "0",
                        "DataSegSize(Kbytes)": "unlimited",
                        "FileSize(Blocks)": "unlimited",
                        "MaxLockedMemory(Kbytes)": "49470072",
                        "MaxMemorySize(Kbytes)": "unlimited",
                        "OpenFiles": "1024",
                        "StackSize(Kbytes)": "8192",
                        "CpuTime(Seconds)": "unlimited",
                        "VirtualMemory(Kbytes)": "unlimited"
                    },
                    "Vulnerability": {
                        "GatherDataSampling": "Not affected",
                        "ItlbMultihit": "Not affected",
                        "L1tf": "Not affected",
                        "Mds": "Not affected",
                        "Meltdown": "Not affected",
                        "MmioStaleData": "Not affected",
                        "Retbleed": "Not affected",
                        "SpecStoreBypass": "Mitigation; Speculative Store Bypass disabled via prctl and seccomp",
                        "SpectreV1": "Mitigation; usercopy/swapgs barriers and __user pointer sanitization",
                        "SpectreV2": "Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected",
                        "Srbds": "Not affected",
                        "TsxAsyncAbort": "Not affected"
                    },
                    "VMInstances": {
                        "Count": null
                    },
                    "ContainerOrchestration": []
                }
            },
            "benchmarkExecutionID": "eaf62384-68a5-4b73-8b1e-cc17ac3bb6b3",
            "executionStatus": "COMPLETED",
            "benchmark": {
                "_id": "6788cc55eeb0ade3c835b3cf",
                "platformDetails": {
                    "lts": null,
                    "sut": "6777a62fafec579ef46aba98",
                    "secondarySuts": [
                        "6777a721afec579ef46abc0a"
                    ]
                },
                "databaseConfigurations": null,
                "executionStep": "SUT TEARDOWN IN PROGRESS",
                "executionStatus": "CLEANUP",
                "runType": null,
                "benchmarkExecutionID": "eaf62384-68a5-4b73-8b1e-cc17ac3bb6b3",
                "benchmarkTemplateDetails": {
                    "_id": "66838caf4d01de54ebdda091",
                    "databaseConfigs": {
                        "databases": [],
                        "workloadTools": []
                    },
                    "benchmarkType": "NetPerf",
                    "isDeleted": false,
                    "isDatabase": false,
                    "approvalStatus": true,
                    "isFromApi": false,
                    "benchmarkCategory": "Communication",
                    "noneDatabaseConfigs": {
                        "gitBranch": "development",
                        "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-scripts-netperf.git",
                        "runScriptFile": "netperf/test_runner.sh"
                    },
                    "platformDetails": {
                        "bmc": {
                            "isRequired": true
                        },
                        "sut": {
                            "isRequired": true,
                            "gitBranch": "development",
                            "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                            "setupFilePath": "Playbooks/setup-netperf-sut.yml",
                            "teardownFilePath": ""
                        },
                        "secondarySuts": [
                            {
                                "isRequired": true,
                                "gitBranch": "development",
                                "gitURL": "git@github.com:AMD-DEAE-CEME/epdw-automation-ansible-playbooks.git",
                                "setupFilePath": "Playbooks/setup-netperf-lts.yml",
                                "teardownFilePath": ""
                            }
                        ]
                    },
                    "createdBy": "626b83c4a8b360df9979f96d",
                    "lastUpdatedBy": null,
                    "benchmarkDescription": "Benchmark for Netperf-TCP-RR",
                    "benchmarkName": "NetPerf",
                    "runOptions": []
                },
                "runConfigurations": {
                    "ansible_setup": true,
                    "server_setup": "dual",
                    "test_duration": "120",
                    "turbostat_on": false,
                    "noOfIterations": 1,
                    "scheduledAt": "2025-01-16T09:06:00.000Z",
                    "expressSetup": true,
                    "LinuxProfilingTool_on": false,
                    "benchmarkType": "NetPerf",
                    "server_host_ip": "10.86.19.1",
                    "testnames": [
                        "TCP_RR",
                        "TCP_STREAM",
                        "TCP_MAERTS",
                        "UDP_STREAM",
                        "UDP_RR"
                    ],
                    "serverifname": "enp65s0f0np0",
                    "serverip": "10.10.10.1",
                    "hugepage_size": "1GB",
                    "number_of_hugepages": "24",
                    "isolcpus": "0-7",
                    "nps": "1",
                    "irq_affinity": "8-16",
                    "nohz_full": "0-7",
                    "rcu_nocbs": "0-7",
                    "proc_cstate": "0",
                    "amd_iommu": "on",
                    "smt_status": "Enabled",
                    "turbo_status": "Enabled",
                    "clientifname": "enp65s0f0np0",
                    "clientip": "10.10.10.2",
                    "packet_size": 64,
                    "local_remote_core_list": "9,10",
                    "power_governor": "ondemand",
                    "AmdProfiling_Tools": "AMDuProf"
                },
                "createdBy": {
                    "_id": "63e4981c772175b9e8ace333",
                    "role": "ADMIN",
                    "fullName": "Tummale, Pratyusha",
                    "email": "pratyusha.tummale@amd.com"
                },
                "lastUpdatedBy": {
                    "_id": "62136d3e83d66811fd562657",
                    "role": "ADMIN",
                    "fullName": "Auto User",
                    "email": "jenkinsceme@amd.com"
                },
                "jenkinsLogLink": "http://deae-jenkins-dev.amd.com:8080/jenkins/job/run-benchmark/job/start-benchmark/20667/console",
                "executionProgressSteps": [
                    "SUT SETUP IN PROGRESS",
                    "CALCULATING PLATFORM PROFILE",
                    "EXECUTING 1/1 RUN"
                ],
                "batchId": null,
                "executionType": "SINGLE",
                "runCategory": "Benchmark_Test",
                "groupName": "Benchmark_Test",
                "name": "Benchmark_Test_NetPerf_215410_run_1",
                "createdOn": "2025-01-16T09:07:33.945Z",
                "lastModifiedOn": "2025-01-16T09:36:24.411Z"
            },
            "resultsInfo": [
                {
                    "summary": "Result for Run 1",
                    "run": 1,
                    "configSummary": {
                        "ClangVersion": "Data not available",
                        "SMT": "Disable",
                        "TurboBoost": "Auto",
                        "NPS": "NPS1",
                        "AVX": 256
                    },
                    "statistics": [],
                    "powerstatStatistics": {},
                    "turbostatStatistics": {},
                    "detailedReport": "http://deae-resultserver-dev.amd.com/eaf62384-68a5-4b73-8b1e-cc17ac3bb6b3/results/1/netperf_execution.log",
                    "workloadProfile": {
                        "workloadDescription": {},
                        "workloadMetrics": {},
                        "workloadMeasures": {}
                    }
                }
            ],
            "resultType": "AUTOMATED",
            "name": "Benchmark_Test_NetPerf_215410_run_1",
            "groupName": "Benchmark_Test",
            "benchmarkType": "NetPerf",
            "runCategory": "Benchmark_Test",
            "runType": null,
            "cpuModel": "8534P",
            "benchmarkName": "NetPerf",
            "benchmarkCategory": "Communication",
            "benchmarkScheduleID": "6788cc55eeb0ade3c835b3cf",
            "benchmarkTemplateID": "66838caf4d01de54ebdda091",
            "platformProfileURL": null,
            "resultFormat": "BASE",
            "isPublishedToEPYC": false,
            "currentPublicationStatus": "NONE",
            "publishAction": "NONE",
            "publicationErrorMessage": null,
            "isEPYCData": false,
            "source": null,
            "createdBy": null,
            "publishHistory": [],
            "customTagHistory": [],
            "dataEntitlementHistory": [],
            "dataEntitlementTag": [
                "EPDW_TEST_GROUP_ONLY"
            ],
            "customTag": [],
            "dataSource": null,
            "publishToHDFS": false,
            "BenchmarkRunTimings": [
                {
                    "event": "BenchmarkExecution",
                    "startTime": "2025-01-16T09:08:14.990062+00:00",
                    "endTime": null,
                    "elapsedTimeInMins": null
                },
                {
                    "event": "ApplyingTunings",
                    "startTime": "2025-01-16T09:08:16.199448+00:00",
                    "endTime": null,
                    "elapsedTimeInMins": null
                },
                {
                    "event": "SutSetUp",
                    "startTime": "2025-01-16T09:08:16.199468+00:00",
                    "endTime": "2025-01-16T09:20:58.704533+00:00",
                    "elapsedTimeInMins": 12.7084
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T09:22:25.349253+00:00",
                    "endTime": "2025-01-16T09:23:30.314485+00:00",
                    "elapsedTimeInMins": 1.0828
                },
                {
                    "event": "PlatformProfile",
                    "startTime": "2025-01-16T09:23:30.314758+00:00",
                    "endTime": "2025-01-16T09:24:38.793643+00:00",
                    "elapsedTimeInMins": 1.1413
                },
                {
                    "event": "WorkloadProfiler_run1",
                    "startTime": "2025-01-16T09:24:43.812641+00:00",
                    "endTime": "2025-01-16T09:36:17.820933+00:00",
                    "elapsedTimeInMins": 11.5668
                },
                {
                    "event": "Masterscript_run1",
                    "startTime": "2025-01-16T09:24:52.262698+00:00",
                    "endTime": "2025-01-16T09:35:52.388198+00:00",
                    "elapsedTimeInMins": 11.0021
                }
            ],
            "powerConsumptionInfo": [],
            "templateType": "DEFAULT",
            "isResultLockout": false,
            "resultLockoutHistory": [],
            "logsInfo": "http://deae-resultserver-dev.amd.com:80/eaf62384-68a5-4b73-8b1e-cc17ac3bb6b3",
            "batchId": null,
            "runConfigurations": {
                "ansible_setup": true,
                "server_setup": "dual",
                "test_duration": "120",
                "turbostat_on": false,
                "noOfIterations": 1,
                "scheduledAt": "2025-01-16T09:06:00.000Z",
                "expressSetup": true,
                "LinuxProfilingTool_on": false,
                "benchmarkType": "NetPerf",
                "server_host_ip": "10.86.19.1",
                "testnames": [
                    "TCP_RR",
                    "TCP_STREAM",
                    "TCP_MAERTS",
                    "UDP_STREAM",
                    "UDP_RR"
                ],
                "serverifname": "enp65s0f0np0",
                "serverip": "10.10.10.1",
                "hugepage_size": "1GB",
                "number_of_hugepages": "24",
                "isolcpus": "0-7",
                "nps": "1",
                "irq_affinity": "8-16",
                "nohz_full": "0-7",
                "rcu_nocbs": "0-7",
                "proc_cstate": "0",
                "amd_iommu": "on",
                "smt_status": "Enabled",
                "turbo_status": "Enabled",
                "clientifname": "enp65s0f0np0",
                "clientip": "10.10.10.2",
                "packet_size": 64,
                "local_remote_core_list": "9,10",
                "power_governor": "ondemand",
                "AmdProfiling_Tools": "AMDuProf"
            },
            "createdOn": "2025-01-16T09:36:23.375Z",
            "lastModifiedOn": "2025-01-16T09:36:23.375Z",
            "__v": 0
        },
      
    // "Pagination": {
    //     "hasNext": true,
    //     "hasPrev": false,
    //     "pageNum": 1,
    //     "pages": 7796,
    //     "perPage": 10,
    //     "total": 77957
    // },

]
