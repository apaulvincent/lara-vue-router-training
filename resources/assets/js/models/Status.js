class Status {

    static find(id) {
        return axios.get('/statuses/' + id)
    }

    static delete(id) {
        return axios.delete('/statuses/' + id)
    }

    static all(callback) {
       return axios.get('/statuses')
                   .then(response => callback(response.data))
                   .catch(error => console.log(error) )
    }
}


export default Status; 