/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

module.exports = {
  format: 'rest-json',
  apiVersion: '2012-06-01',
  checksumFormat: 'sha256',
  endpointPrefix: 'glacier',
  serviceFullName: 'Amazon Glacier',
  signatureVersion: 'v4',
  timestampFormat: 'iso8601',
  operations: {
    abortMultipartUpload: {
      name: 'AbortMultipartUpload',
      http: {
        method: 'DELETE',
        uri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          uploadId: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    completeMultipartUpload: {
      name: 'CompleteMultipartUpload',
      http: {
        method: 'POST',
        uri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          uploadId: {
            location: 'uri'
          },
          archiveSize: {
            location: 'header',
            name: 'x-amz-archive-size'
          },
          checksum: {
            location: 'header',
            name: 'x-amz-sha256-tree-hash'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          location: {
            location: 'header',
            name: 'Location'
          },
          checksum: {
            location: 'header',
            name: 'x-amz-sha256-tree-hash'
          },
          archiveId: {
            location: 'header',
            name: 'x-amz-archive-id'
          }
        }
      }
    },
    createVault: {
      name: 'CreateVault',
      http: {
        method: 'PUT',
        uri: '/{accountId}/vaults/{vaultName}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          location: {
            location: 'header',
            name: 'Location'
          }
        }
      }
    },
    deleteArchive: {
      name: 'DeleteArchive',
      http: {
        method: 'DELETE',
        uri: '/{accountId}/vaults/{vaultName}/archives/{archiveId}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          archiveId: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteVault: {
      name: 'DeleteVault',
      http: {
        method: 'DELETE',
        uri: '/{accountId}/vaults/{vaultName}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    deleteVaultNotifications: {
      name: 'DeleteVaultNotifications',
      http: {
        method: 'DELETE',
        uri: '/{accountId}/vaults/{vaultName}/notification-configuration'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    describeJob: {
      name: 'DescribeJob',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults/{vaultName}/jobs/{jobId}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          jobId: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          JobId: {
          },
          JobDescription: {
          },
          Action: {
          },
          ArchiveId: {
          },
          VaultARN: {
          },
          CreationDate: {
          },
          Completed: {
            type: 'boolean'
          },
          StatusCode: {
          },
          StatusMessage: {
          },
          ArchiveSizeInBytes: {
            type: 'integer'
          },
          InventorySizeInBytes: {
            type: 'integer'
          },
          SNSTopic: {
          },
          CompletionDate: {
          },
          SHA256TreeHash: {
          },
          ArchiveSHA256TreeHash: {
          },
          RetrievalByteRange: {
          }
        }
      }
    },
    describeVault: {
      name: 'DescribeVault',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults/{vaultName}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VaultARN: {
          },
          VaultName: {
          },
          CreationDate: {
          },
          LastInventoryDate: {
          },
          NumberOfArchives: {
            type: 'integer'
          },
          SizeInBytes: {
            type: 'integer'
          }
        }
      }
    },
    getJobOutput: {
      name: 'GetJobOutput',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults/{vaultName}/jobs/{jobId}/output'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          jobId: {
            location: 'uri'
          },
          range: {
            location: 'header',
            name: 'Range'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          body: {
            type: 'binary',
            streaming: true
          },
          checksum: {
            location: 'header',
            name: 'x-amz-sha256-tree-hash'
          },
          status: {
            type: 'integer',
            location: 'status'
          },
          contentRange: {
            location: 'header',
            name: 'Content-Range'
          },
          acceptRanges: {
            location: 'header',
            name: 'Accept-Ranges'
          },
          contentType: {
            location: 'header',
            name: 'Content-Type'
          },
          archiveDescription: {
            location: 'header',
            name: 'x-amz-archive-description'
          }
        },
        payload: 'body'
      }
    },
    getVaultNotifications: {
      name: 'GetVaultNotifications',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults/{vaultName}/notification-configuration'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          SNSTopic: {
          },
          Events: {
            type: 'list'
          }
        }
      }
    },
    initiateJob: {
      name: 'InitiateJob',
      http: {
        method: 'POST',
        uri: '/{accountId}/vaults/{vaultName}/jobs'
      },
      input: {
        payload: 'jobParameters',
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          jobParameters: {
            type: 'structure',
            members: {
              Format: {
              },
              Type: {
              },
              ArchiveId: {
              },
              Description: {
              },
              SNSTopic: {
              },
              RetrievalByteRange: {
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          location: {
            location: 'header',
            name: 'Location'
          },
          jobId: {
            location: 'header',
            name: 'x-amz-job-id'
          }
        }
      }
    },
    initiateMultipartUpload: {
      name: 'InitiateMultipartUpload',
      http: {
        method: 'POST',
        uri: '/{accountId}/vaults/{vaultName}/multipart-uploads'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          archiveDescription: {
            location: 'header',
            name: 'x-amz-archive-description'
          },
          partSize: {
            location: 'header',
            name: 'x-amz-part-size'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          location: {
            location: 'header',
            name: 'Location'
          },
          uploadId: {
            location: 'header',
            name: 'x-amz-multipart-upload-id'
          }
        }
      }
    },
    listJobs: {
      name: 'ListJobs',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults/{vaultName}/jobs?marker={marker}&limit={limit}&completed={completed}&statuscode={statuscode}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          limit: {
            location: 'uri'
          },
          marker: {
            location: 'uri'
          },
          statuscode: {
            location: 'uri'
          },
          completed: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          JobList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                JobId: {
                },
                JobDescription: {
                },
                Action: {
                },
                ArchiveId: {
                },
                VaultARN: {
                },
                CreationDate: {
                },
                Completed: {
                  type: 'boolean'
                },
                StatusCode: {
                },
                StatusMessage: {
                },
                ArchiveSizeInBytes: {
                  type: 'integer'
                },
                InventorySizeInBytes: {
                  type: 'integer'
                },
                SNSTopic: {
                },
                CompletionDate: {
                },
                SHA256TreeHash: {
                },
                ArchiveSHA256TreeHash: {
                },
                RetrievalByteRange: {
                }
              }
            }
          },
          Marker: {
          }
        }
      }
    },
    listMultipartUploads: {
      name: 'ListMultipartUploads',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults/{vaultName}/multipart-uploads?marker={marker}&limit={limit}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          limit: {
            location: 'uri'
          },
          marker: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          UploadsList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                MultipartUploadId: {
                },
                VaultARN: {
                },
                ArchiveDescription: {
                },
                PartSizeInBytes: {
                  type: 'integer'
                },
                CreationDate: {
                }
              }
            }
          },
          Marker: {
          }
        }
      }
    },
    listParts: {
      name: 'ListParts',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}?marker={marker}&limit={limit}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          uploadId: {
            location: 'uri'
          },
          marker: {
            location: 'uri'
          },
          limit: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          MultipartUploadId: {
          },
          VaultARN: {
          },
          ArchiveDescription: {
          },
          PartSizeInBytes: {
            type: 'integer'
          },
          CreationDate: {
          },
          Parts: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                RangeInBytes: {
                },
                SHA256TreeHash: {
                }
              }
            }
          },
          Marker: {
          }
        }
      }
    },
    listVaults: {
      name: 'ListVaults',
      http: {
        method: 'GET',
        uri: '/{accountId}/vaults?marker={marker}&limit={limit}'
      },
      input: {
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          marker: {
            location: 'uri'
          },
          limit: {
            location: 'uri'
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          VaultList: {
            type: 'list',
            members: {
              type: 'structure',
              members: {
                VaultARN: {
                },
                VaultName: {
                },
                CreationDate: {
                },
                LastInventoryDate: {
                },
                NumberOfArchives: {
                  type: 'integer'
                },
                SizeInBytes: {
                  type: 'integer'
                }
              }
            }
          },
          Marker: {
          }
        }
      }
    },
    setVaultNotifications: {
      name: 'SetVaultNotifications',
      http: {
        method: 'PUT',
        uri: '/{accountId}/vaults/{vaultName}/notification-configuration'
      },
      input: {
        payload: 'vaultNotificationConfig',
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          vaultNotificationConfig: {
            type: 'structure',
            members: {
              SNSTopic: {
              },
              Events: {
                type: 'list'
              }
            }
          }
        }
      },
      output: {
        type: 'structure',
        members: {
        }
      }
    },
    uploadArchive: {
      name: 'UploadArchive',
      http: {
        method: 'POST',
        uri: '/{accountId}/vaults/{vaultName}/archives'
      },
      input: {
        payload: 'body',
        type: 'structure',
        members: {
          vaultName: {
            location: 'uri'
          },
          accountId: {
            location: 'uri'
          },
          archiveDescription: {
            location: 'header',
            name: 'x-amz-archive-description'
          },
          checksum: {
            location: 'header',
            name: 'x-amz-sha256-tree-hash'
          },
          body: {
            type: 'binary',
            streaming: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          location: {
            location: 'header',
            name: 'Location'
          },
          checksum: {
            location: 'header',
            name: 'x-amz-sha256-tree-hash'
          },
          archiveId: {
            location: 'header',
            name: 'x-amz-archive-id'
          }
        }
      }
    },
    uploadMultipartPart: {
      name: 'UploadMultipartPart',
      http: {
        method: 'PUT',
        uri: '/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}'
      },
      input: {
        payload: 'body',
        type: 'structure',
        members: {
          accountId: {
            location: 'uri'
          },
          vaultName: {
            location: 'uri'
          },
          uploadId: {
            location: 'uri'
          },
          checksum: {
            location: 'header',
            name: 'x-amz-sha256-tree-hash'
          },
          range: {
            location: 'header',
            name: 'Content-Range'
          },
          body: {
            type: 'binary',
            streaming: true
          }
        }
      },
      output: {
        type: 'structure',
        members: {
          checksum: {
            location: 'header',
            name: 'x-amz-sha256-tree-hash'
          }
        }
      }
    }
  }
};
