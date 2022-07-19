class SearchService {
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

                console.log("searchOnPlatON response = " + JSON.stringify(response));

                return response.data
            })
            .catch(function (error) {
                console.log("searchOnPlatON error = " + error);
            })
            .then(function (result) {
                // always executed
                // console.log("getTxListByAddress result = " + JSON.stringify(result));
                return result;
            });
    }


    //反馈
    async feedBack(params) {        
        const axios = require('axios').default;
        return axios.post('http://api.inferer.xyz/api/feedback', params)
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

}

module.exports = SearchService;