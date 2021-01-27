import axios from "axios";

const baseUrl = "http://localhost:5000/api"
// function signature
const config = {};
const instance = axios.create(config)

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    aNewsFeeds(url = baseUrl + '/newsFeeds') {
        instance.defaults.headers.common = {};
        instance.defaults.headers.common.accept = 'application/json';
        instance.defaults.headers['Content-Type'] = 'application/json';
        return {
            fetchAll: () => instance.get(url),
            fetchById: id => instance.get(url + id),
            create: (newRecord) => instance.post(url, newRecord),
            update: (id, updateRecord) => instance.put(url + '/' + id, updateRecord),
            delete: id => instance.delete(url + id)
        }
    }
}