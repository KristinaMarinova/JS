const Request = async (id, method, requestObject = {}) => {
    let url = id
      ? `https://fisher-game.firebaseio.com/catches/${id}.json`
      : `https://fisher-game.firebaseio.com/catches.json`;
    let reqObj = {};
    if (method !== 'GET') {
      reqObj.body = JSON.stringify(requestObject);
      reqObj.method = method;
    }
  
    try {
      let res = await fetch(url, reqObj);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  export default Request;