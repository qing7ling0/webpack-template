'use strict';

class NetUtils {
  static request(url, options) {
    return fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
    };

  /**
  *url :请求地址
  *data:参数(Json对象)
  */
  static postJson(url, data) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    return NetRequest.request(url, fetchOptions);
  }

  //get请求
  /**
  *url :请求地址
  */
  static get(url) {
    return NetRequest.request(url, null);
  }
}

module.exports = NetUtils;