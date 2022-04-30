export const dummyDataForHoldings = () => {
  
    let data = {
      data:[
        {
            "chart_data_response": [
                {
                    "date": "2022-03-31",
                    "balance": 39.78711093
                },
                {
                    "date": "2022-04-01",
                    "balance": 39.6209617
                },
                {
                    "date": "2022-04-02",
                    "balance": 40.694088
                },
                {
                    "date": "2022-04-03",
                    "balance": 40.761248300000005
                },
                {
                    "date": "2022-04-04",
                    "balance": 41.08776836
                },
                {
                    "date": "2022-04-05",
                    "balance": 40.93326906
                },
                {
                    "date": "2022-04-06",
                    "balance": 39.2451262
                },
                {
                    "date": "2022-04-07",
                    "balance": 37.63336003
                },
                {
                    "date": "2022-04-08",
                    "balance": 38.34490093
                },
                {
                    "date": "2022-04-09",
                    "balance": 37.7386787
                },
                {
                    "date": "2022-04-10",
                    "balance": 38.0476779
                },
                {
                    "date": "2022-04-11",
                    "balance": 37.33319496
                },
                {
                    "date": "2022-04-12",
                    "balance": 34.8920281
                },
                {
                    "date": "2022-04-13",
                    "balance": 35.62608655
                },
                {
                    "date": "2022-04-14",
                    "balance": 36.3897208
                },
                {
                    "date": "2022-04-15",
                    "balance": 34.9488315
                },
                {
                    "date": "2022-04-16",
                    "balance": 36.010055030000004
                },
                {
                    "date": "2022-04-17",
                    "balance": 35.616626450000005
                },
                {
                    "date": "2022-04-18",
                    "balance": 34.84709957
                },
                {
                    "date": "2022-04-19",
                    "balance": 35.6910388
                },
                {
                    "date": "2022-04-20",
                    "balance": 36.121884539999996
                },
                {
                    "date": "2022-04-21",
                    "balance": 35.6764769
                },
                {
                    "date": "2022-04-22",
                    "balance": 35.30649507
                },
                {
                    "date": "2022-04-23",
                    "balance": 34.50422554
                },
                {
                    "date": "2022-04-24",
                    "balance": 34.27404056
                },
                {
                    "date": "2022-04-25",
                    "balance": 34.3136912
                },
                {
                    "date": "2022-04-26",
                    "balance": 34.73882164
                },
                {
                    "date": "2022-04-27",
                    "balance": 32.78818372
                },
                {
                    "date": "2022-04-28",
                    "balance": 33.564029
                },
                {
                    "date": "2022-04-29",
                    "balance": 33.0204994
                },
                {
                    "date": "2022-04-30",
                    "balance": 32.9695709
                }
            ],
            "token_data_response": [
                {
                    "user_address": "0x6f6699652d4733ad422a610780c43cfd919d9a86",
                    "chain_id": 137,
                    "contract_name": "Wrapped Ether",
                    "contract_decimals": 18,
                    "contract_address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
                    "contract_ticker_symbol": "WETH",
                    "quote_currency": "USD",
                    "logo_url": "https://logos.covalenthq.com/tokens/1/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
                    "balance": {
                        "$numberDecimal": "0.011513768293316106"
                    },
                    "priceUsd": {
                        "$numberDecimal": "2825.4592"
                    },
                    "valueUsd": {
                        "$numberDecimal": "32.53168"
                    },
                    "blockStatus": false
                },
                {
                    "user_address": "0x6f6699652d4733ad422a610780c43cfd919d9a86",
                    "chain_id": 137,
                    "contract_name": "Matic Token",
                    "contract_decimals": 18,
                    "contract_address": "0x0000000000000000000000000000000000001010",
                    "contract_ticker_symbol": "MATIC",
                    "quote_currency": "USD",
                    "logo_url": "https://logos.covalenthq.com/tokens/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
                    "balance": {
                        "$numberDecimal": "0.3792099703018116"
                    },
                    "priceUsd": {
                        "$numberDecimal": "1.1547451"
                    },
                    "valueUsd": {
                        "$numberDecimal": "0.4378909"
                    },
                    "blockStatus": false
                }
            ],
            "block_token_data_response": []
        }]
    }
    return data;
  }
  
export const dummyDataForPortfolio = () => {
    let data = { 
      data:[
      {
          "graph_token": [
              [
                  {
                      "_id": "626c95dcc7b87ae0ae7ff991",
                      "user_address": "0x6f6699652d4733ad422a610780c43cfd919d9a86",
                      "chain_id": 137,
                      "blockStatus": false,
                      "quote_currency": "USD",
                      "contract_decimals": 18,
                      "contract_name": "Wrapped Ether",
                      "contract_ticker_symbol": "WETH",
                      "contract_address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
                      "logo_url": "https://logos.covalenthq.com/tokens/1/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
                      "balance": {
                          "$numberDecimal": "0.011513768293316106"
                      },
                      "priceUsd": {
                          "$numberDecimal": "2825.4592"
                      },
                      "valueUsd": {
                          "$numberDecimal": "32.53168"
                      },
                      "chart_data": [
                          {
                              "timestamp": "2022-04-30T00:00:00Z",
                              "quote_rate": 2825.4592,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 32.53168
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 32.53168
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 32.53168
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 32.53168
                              }
                          },
                          {
                              "timestamp": "2022-04-29T00:00:00Z",
                              "quote_rate": 2830.1077,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 32.5852
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 32.5852
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 32.5852
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 32.5852
                              }
                          },
                          {
                              "timestamp": "2022-04-28T00:00:00Z",
                              "quote_rate": 2875.0981,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 33.10321
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 33.10321
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 33.10321
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 33.10321
                              }
                          },
                          {
                              "timestamp": "2022-04-27T00:00:00Z",
                              "quote_rate": 2807.483,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 32.324707
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 32.324707
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 32.324707
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 32.324707
                              }
                          },
                          {
                              "timestamp": "2022-04-26T00:00:00Z",
                              "quote_rate": 2973.7078,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 34.23858
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 34.23858
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 34.23858
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 34.23858
                              }
                          },
                          {
                              "timestamp": "2022-04-25T00:00:00Z",
                              "quote_rate": 2936.7808,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 33.81341
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 33.81341
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 33.81341
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 33.81341
                              }
                          },
                          {
                              "timestamp": "2022-04-24T00:00:00Z",
                              "quote_rate": 2932.4578,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 33.763638
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 33.763638
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 33.763638
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 33.763638
                              }
                          },
                          {
                              "timestamp": "2022-04-23T00:00:00Z",
                              "quote_rate": 2951.5117,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 33.98302
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 33.98302
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 33.98302
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 33.98302
                              }
                          },
                          {
                              "timestamp": "2022-04-22T00:00:00Z",
                              "quote_rate": 3019.4946,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 34.76576
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 34.76576
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 34.76576
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 34.76576
                              }
                          },
                          {
                              "timestamp": "2022-04-21T00:00:00Z",
                              "quote_rate": 3052.1262,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 35.14147
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 35.14147
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 35.14147
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 35.14147
                              }
                          },
                          {
                              "timestamp": "2022-04-20T00:00:00Z",
                              "quote_rate": 3090.4414,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 35.582626
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 35.582626
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 35.582626
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 35.582626
                              }
                          },
                          {
                              "timestamp": "2022-04-19T00:00:00Z",
                              "quote_rate": 3053.5847,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 35.158264
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 35.158264
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 35.158264
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 35.158264
                              }
                          },
                          {
                              "timestamp": "2022-04-18T00:00:00Z",
                              "quote_rate": 2980.9,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 34.32139
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 34.32139
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 34.32139
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 34.32139
                              }
                          },
                          {
                              "timestamp": "2022-04-17T00:00:00Z",
                              "quote_rate": 3048.4875,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 35.09958
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 35.09958
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 35.09958
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 35.09958
                              }
                          },
                          {
                              "timestamp": "2022-04-16T00:00:00Z",
                              "quote_rate": 3081.5784,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 35.48058
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 35.48058
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 35.48058
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 35.48058
                              }
                          },
                          {
                              "timestamp": "2022-04-15T00:00:00Z",
                              "quote_rate": 2990.112,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 34.427456
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 34.427456
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 34.427456
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 34.427456
                              }
                          },
                          {
                              "timestamp": "2022-04-14T00:00:00Z",
                              "quote_rate": 3113.884,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 35.85254
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 35.85254
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 35.85254
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 35.85254
                              }
                          },
                          {
                              "timestamp": "2022-04-13T00:00:00Z",
                              "quote_rate": 3048.481,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 35.099503
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 35.099503
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 35.099503
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 35.099503
                              }
                          },
                          {
                              "timestamp": "2022-04-12T00:00:00Z",
                              "quote_rate": 2985.1921,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 34.370808
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 34.370808
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 34.370808
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 34.370808
                              }
                          },
                          {
                              "timestamp": "2022-04-11T00:00:00Z",
                              "quote_rate": 3195.5144,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 36.79241
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 36.79241
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 36.79241
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 36.79241
                              }
                          },
                          {
                              "timestamp": "2022-04-10T00:00:00Z",
                              "quote_rate": 3256.7903,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 37.49793
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 37.49793
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 37.49793
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 37.49793
                              }
                          },
                          {
                              "timestamp": "2022-04-09T00:00:00Z",
                              "quote_rate": 3229.9456,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 37.188843
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 37.188843
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 37.188843
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 37.188843
                              }
                          },
                          {
                              "timestamp": "2022-04-08T00:00:00Z",
                              "quote_rate": 3281.6704,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 37.78439
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 37.78439
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 37.78439
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 37.78439
                              }
                          },
                          {
                              "timestamp": "2022-04-07T00:00:00Z",
                              "quote_rate": 3219.0635,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 37.06355
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 37.06355
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 37.06355
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 37.06355
                              }
                          },
                          {
                              "timestamp": "2022-04-06T00:00:00Z",
                              "quote_rate": 3357.824,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 38.661205
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 38.661205
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 38.661205
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 38.661205
                              }
                          },
                          {
                              "timestamp": "2022-04-05T00:00:00Z",
                              "quote_rate": 3501.5955,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 40.316555
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 40.316555
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 40.316555
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 40.316555
                              }
                          },
                          {
                              "timestamp": "2022-04-04T00:00:00Z",
                              "quote_rate": 3514.4644,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 40.464725
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 40.464725
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 40.464725
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 40.464725
                              }
                          },
                          {
                              "timestamp": "2022-04-03T00:00:00Z",
                              "quote_rate": 3485.239,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 40.12823
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 40.12823
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 40.12823
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 40.12823
                              }
                          },
                          {
                              "timestamp": "2022-04-02T00:00:00Z",
                              "quote_rate": 3479.451,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 40.06159
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 40.06159
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 40.06159
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 40.06159
                              }
                          },
                          {
                              "timestamp": "2022-04-01T00:00:00Z",
                              "quote_rate": 3386.2751,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 38.988785
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 38.988785
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 38.988785
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 38.988785
                              }
                          },
                          {
                              "timestamp": "2022-03-31T00:00:00Z",
                              "quote_rate": 3400.5295,
                              "open": {
                                  "balance": "11513768293316106",
                                  "quote": 39.15291
                              },
                              "high": {
                                  "balance": "11513768293316106",
                                  "quote": 39.15291
                              },
                              "low": {
                                  "balance": "11513768293316106",
                                  "quote": 39.15291
                              },
                              "close": {
                                  "balance": "11513768293316106",
                                  "quote": 39.15291
                              }
                          }
                      ],
                      "created_at": "2022-04-30T01:50:20.769Z",
                      "__v": 0
                  },
                  {
                      "_id": "626c95dcc7b87ae0ae7ff992",
                      "user_address": "0x6f6699652d4733ad422a610780c43cfd919d9a86",
                      "chain_id": 137,
                      "blockStatus": false,
                      "quote_currency": "USD",
                      "contract_decimals": 18,
                      "contract_name": "Matic Token",
                      "contract_ticker_symbol": "MATIC",
                      "contract_address": "0x0000000000000000000000000000000000001010",
                      "logo_url": "https://logos.covalenthq.com/tokens/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
                      "balance": {
                          "$numberDecimal": "0.3792099703018116"
                      },
                      "priceUsd": {
                          "$numberDecimal": "1.1547451"
                      },
                      "valueUsd": {
                          "$numberDecimal": "0.4378909"
                      },
                      "chart_data": [
                          {
                              "timestamp": "2022-04-30T00:00:00Z",
                              "quote_rate": 1.1547451,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4378909
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4378909
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4378909
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4378909
                              }
                          },
                          {
                              "timestamp": "2022-04-29T00:00:00Z",
                              "quote_rate": 1.1479112,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4352994
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4352994
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4352994
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.4352994
                              }
                          },
                          {
                              "timestamp": "2022-04-28T00:00:00Z",
                              "quote_rate": 1.2152079,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.460819
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.460819
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.460819
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.460819
                              }
                          },
                          {
                              "timestamp": "2022-04-27T00:00:00Z",
                              "quote_rate": 1.2222165,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.46347672
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.46347672
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.46347672
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.46347672
                              }
                          },
                          {
                              "timestamp": "2022-04-26T00:00:00Z",
                              "quote_rate": 1.3191679,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.50024164
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.50024164
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.50024164
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.50024164
                              }
                          },
                          {
                              "timestamp": "2022-04-25T00:00:00Z",
                              "quote_rate": 1.3192722,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5002812
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5002812
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5002812
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5002812
                              }
                          },
                          {
                              "timestamp": "2022-04-24T00:00:00Z",
                              "quote_rate": 1.3459629,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51040256
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51040256
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51040256
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51040256
                              }
                          },
                          {
                              "timestamp": "2022-04-23T00:00:00Z",
                              "quote_rate": 1.374451,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52120554
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52120554
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52120554
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52120554
                              }
                          },
                          {
                              "timestamp": "2022-04-22T00:00:00Z",
                              "quote_rate": 1.4259515,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54073507
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54073507
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54073507
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54073507
                              }
                          },
                          {
                              "timestamp": "2022-04-21T00:00:00Z",
                              "quote_rate": 1.4108459,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5350069
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5350069
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5350069
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5350069
                              }
                          },
                          {
                              "timestamp": "2022-04-20T00:00:00Z",
                              "quote_rate": 1.4220579,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.53925854
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.53925854
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.53925854
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.53925854
                              }
                          },
                          {
                              "timestamp": "2022-04-19T00:00:00Z",
                              "quote_rate": 1.4049598,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5327748
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5327748
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5327748
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5327748
                              }
                          },
                          {
                              "timestamp": "2022-04-18T00:00:00Z",
                              "quote_rate": 1.3863283,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52570957
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52570957
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52570957
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52570957
                              }
                          },
                          {
                              "timestamp": "2022-04-17T00:00:00Z",
                              "quote_rate": 1.3634832,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51704645
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51704645
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51704645
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.51704645
                              }
                          },
                          {
                              "timestamp": "2022-04-16T00:00:00Z",
                              "quote_rate": 1.3962581,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52947503
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52947503
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52947503
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52947503
                              }
                          },
                          {
                              "timestamp": "2022-04-15T00:00:00Z",
                              "quote_rate": 1.3748991,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5213755
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5213755
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5213755
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5213755
                              }
                          },
                          {
                              "timestamp": "2022-04-14T00:00:00Z",
                              "quote_rate": 1.4165787,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5371808
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5371808
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5371808
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5371808
                              }
                          },
                          {
                              "timestamp": "2022-04-13T00:00:00Z",
                              "quote_rate": 1.3886331,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52658355
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52658355
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52658355
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.52658355
                              }
                          },
                          {
                              "timestamp": "2022-04-12T00:00:00Z",
                              "quote_rate": 1.3744893,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5212201
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5212201
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5212201
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5212201
                              }
                          },
                          {
                              "timestamp": "2022-04-11T00:00:00Z",
                              "quote_rate": 1.4260831,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54078496
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54078496
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54078496
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.54078496
                              }
                          },
                          {
                              "timestamp": "2022-04-10T00:00:00Z",
                              "quote_rate": 1.4497188,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5497479
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5497479
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5497479
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5497479
                              }
                          },
                          {
                              "timestamp": "2022-04-09T00:00:00Z",
                              "quote_rate": 1.4499503,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5498357
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5498357
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5498357
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5498357
                              }
                          },
                          {
                              "timestamp": "2022-04-08T00:00:00Z",
                              "quote_rate": 1.4781017,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56051093
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56051093
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56051093
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56051093
                              }
                          },
                          {
                              "timestamp": "2022-04-07T00:00:00Z",
                              "quote_rate": 1.5026239,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56981003
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56981003
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56981003
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.56981003
                              }
                          },
                          {
                              "timestamp": "2022-04-06T00:00:00Z",
                              "quote_rate": 1.5398359,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5839212
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5839212
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5839212
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.5839212
                              }
                          },
                          {
                              "timestamp": "2022-04-05T00:00:00Z",
                              "quote_rate": 1.6263129,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.61671406
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.61671406
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.61671406
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.61671406
                              }
                          },
                          {
                              "timestamp": "2022-04-04T00:00:00Z",
                              "quote_rate": 1.6430035,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.62304336
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.62304336
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.62304336
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.62304336
                              }
                          },
                          {
                              "timestamp": "2022-04-03T00:00:00Z",
                              "quote_rate": 1.6693081,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6330183
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6330183
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6330183
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6330183
                              }
                          },
                          {
                              "timestamp": "2022-04-02T00:00:00Z",
                              "quote_rate": 1.6679361,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.632498
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.632498
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.632498
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.632498
                              }
                          },
                          {
                              "timestamp": "2022-04-01T00:00:00Z",
                              "quote_rate": 1.6670886,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6321767
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6321767
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6321767
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.6321767
                              }
                          },
                          {
                              "timestamp": "2022-03-31T00:00:00Z",
                              "quote_rate": 1.6724267,
                              "open": {
                                  "balance": "379209970301811599",
                                  "quote": 0.63420093
                              },
                              "high": {
                                  "balance": "379209970301811599",
                                  "quote": 0.63420093
                              },
                              "low": {
                                  "balance": "379209970301811599",
                                  "quote": 0.63420093
                              },
                              "close": {
                                  "balance": "379209970301811599",
                                  "quote": 0.63420093
                              }
                          }
                      ],
                      "created_at": "2022-04-30T01:50:20.770Z",
                      "__v": 0
                  }
              ]
          ],
          "graph_data": [
              32.53168,
              0.4378909
          ],
          "graph_token_colors": [
              "rgb(224,164,215)",
              "rgb(127,149,21)"
          ]
      }]
    }
    return data;
  }