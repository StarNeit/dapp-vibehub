import axios from "axios";

export default {
    test: {
        getData1: data_obj => axios.post("/api/test_route/get-data1", { data_obj }),
        getData2: () => axios.get('/api/test_route/get-data2')
    },
    deploybot: {
        deployBots: data_obj => axios.post("/api/bots/deploy-bots", { data_obj }),
    }
};