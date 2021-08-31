import config from './config';

class ConfigHandler {

    constructor() {
        this.config = config["development"]
    }

    fetchDetailsAPI() {
        return {
            baseURL: this.config.host,
            url: this.config.FetchAllData
        }      
    }


    insertCommentAPI(query) {
        return {
            baseURL: this.config.host,
            url: this.config.InserComment,
            params: query
        }
    }

    deleteCommentAPI(query) {
        return {
            baseURL: this.config.host,
            url: this.config.DeleteComment,
            params: query
        }
    }
}


const configHandler = new ConfigHandler()
export default configHandler;