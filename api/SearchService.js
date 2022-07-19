class SearchService {
    async getTxListByAddress(address) {
        console.log("getTxListByAddress: address = " + address);

        let params = {
            module: "account",
            action: "txlist",
            address: address,
            startblock: 11565064,
            endblock: 99999999,
            page: 1,
            offset: 10000,
            sort: "asc",
            apikey: "KTR5BWCPZP434R2M5ZC2UCVXT4CKXY5PP8"
        };
        
        const axios = require('axios').default;
        return axios.get('https://api.etherscan.io/api', {params: params})
            .then(function (response) {
                if(response.data.status == '1') {
                    // console.log(response.data);
                    return response.data.result;
                } else {
                    console.log("getTxListByAddress error = " + JSON.stringify(response.data));
                    return null;
                }
            })
            .catch(function (error) {
                console.log("getTxListByAddress error = " + error);
            })
            .then(function (result) {
                // always executed
                // console.log("getTxListByAddress result = " + JSON.stringify(result));
                return result;
            });
    }

    async searchOnETH(address) {
        console.log("search: address = " + address);

        let params = {
            address: address
        };
        
        const axios = require('axios').default;
        return axios.get('http://api.inferer.xyz/api/infer', {params: params})
            .then(function (response) {
                // if(response.data.status == '1') {
                //     // console.log(response.data);
                //     return response.data.result;
                // } else {
                //     console.log("searchOnETH error = " + JSON.stringify(response.data));
                //     return null;
                // }

                console.log("searchOnETH response = " + JSON.stringify(response));

                return response.data
            })
            .catch(function (error) {
                console.log("searchOnETH error = " + error);
            })
            .then(function (result) {
                // always executed
                // console.log("getTxListByAddress result = " + JSON.stringify(result));
                return result;
            });
    }

    async searchOnPlatON(address) {
        console.log("search: address = " + address);

        let params = {
            address: address
        };
        
        const axios = require('axios').default;
        return axios.get('http://api.inferer.xyz/api/platon/infer', {params: params})
            .then(function (response) {
                // if(response.data.status == '1') {
                //     // console.log(response.data);
                //     return response.data.result;
                // } else {
                //     console.log("searchOnETH error = " + JSON.stringify(response.data));
                //     return null;
                // }

                console.log("searchOnETH response = " + JSON.stringify(response));

                return response.data
            })
            .catch(function (error) {
                console.log("searchOnETH error = " + error);
            })
            .then(function (result) {
                // always executed
                // console.log("getTxListByAddress result = " + JSON.stringify(result));
                return result;
            });
    }

    async getBalanceByAddress(address) {
        console.log("getBalanceByAddress: address = " + address);

        let params = {
            module: "account",
            action: "balance",
            address: address,
            tag: "latest",
            apikey: "KTR5BWCPZP434R2M5ZC2UCVXT4CKXY5PP8"
        };
        
        const axios = require('axios').default;
        return axios.get('https://api.etherscan.io/api', {params: params})
            .then(function (response) {
                if(response.data.status == '1') {
                    // console.log(response.data);
                    return response.data.result;
                } else {
                    console.log("getBalanceByAddress error = " + JSON.stringify(response.data));
                    return null;
                }
            })
            .catch(function (error) {
                console.log("getBalanceByAddress error = " + error);
            })
            .then(function (result) {
                // always executed
                console.log("getBalanceByAddress result = " + JSON.stringify(result));
                return result;
            });
    }

    //反馈
    async feedBack(params) {        
        const axios = require('axios').default;
        return axios.post('http://api.inferer.xyz/api/eth/feedback', {params: params})
            .then(function (response) {
                console.log("feedback response = " + JSON.stringify(response))
                return response.data
            })
            .catch(function (error) {
                console.log("searchOnETH error = " + error);
            })
            .then(function (result) {
                return result;
            });
    }

    async getNFTTxListByAddress(address) {
        console.log("getBalanceByAddress: address = " + address);

        let params = {
            module: "account",
            action: "tokennfttx",
            address: address,
            startblock: 11565064,
            endblock: 99999999,
            page: 1,
            offset: 10000,
            sort: "asc",
            apikey: "KTR5BWCPZP434R2M5ZC2UCVXT4CKXY5PP8"
        };
        
        const axios = require('axios').default;
        return axios.get('https://api.etherscan.io/api', {params: params})
            .then(function (response) {
                console.log(response.data);
                return response.data.result;
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function (result) {
                // always executed
                console.log("getBalanceByAddress result = " + JSON.stringify(result));
                return result;
            });
    }
}

module.exports = SearchService;