import axios from "axios";

export default {
    deploybot: {
        deployBots: data_obj => axios.post("/api/bots/deploy-bots", { data_obj }),
        getBotlist: () => axios.get("api/bots/get-bots-list")
    }
};