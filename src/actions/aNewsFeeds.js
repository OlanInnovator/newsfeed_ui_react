import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formateData = data => ({
    ...data,
    articleDetailId: parseInt(data.id ? data.id : 0)
})



function getDate(data) {
    const encoderJson = data => ({
        articleDetails : JSON.stringify(data).replace(/\\"/g, '"').replace(/([\{|:|,])(?:[\s]*)(")/g, "$1'")
        .replace(/(?:[\s]*)(?:")([\}|,|:])/g, "'$1")
        .replace(/([^\{|:|,])(?:')([^\}|,|:])/g, "$1\\'$2")
    })
    const articleDetails = encoderJson(formateData(data));

    return articleDetails["articleDetails"];
}

export const fetchAll = () => dispatch => {
    api.aNewsFeeds().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    data = getDate(data)
    api.aNewsFeeds().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (articleDetailId, data, onSuccess) => dispatch => {
    data = getDate(data)
    api.aNewsFeeds().update(articleDetailId, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { articleDetailId, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.aNewsFeeds().delete(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}