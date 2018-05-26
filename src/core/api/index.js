import axios from "axios";

export default {
    deploybot: {
        deployBots: data_obj => axios.post("/api/bots/deploy-bots", { data_obj }),
    }
};