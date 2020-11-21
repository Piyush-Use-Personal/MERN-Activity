import axios from 'axios';

export function makeRequest({method, url, data} ) {
    return new Promise(function (resolve, reject) {
        try {
            axios({
                method : method,
                url: url, 
                data: data  
              }).then(function (res) {
                  resolve(res);
              }).catch(function(err){
                  reject(err);
              });
        } catch (error) {
            reject(error)
        }
    })
}
// module.exports = {
//     makeRequest : makeRequest
// }