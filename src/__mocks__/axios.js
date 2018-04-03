const axios = jest.genMockFromModule("axios");

axios.__response = null;
axios.create = () => {
  return {
    get: () => {
      return new Promise((resolve, reject) => {
        process.nextTick(() => resolve(axios.__response));
      });
    },
    post: () => {
      return new Promise((resolve, reject) => {
        process.nextTick(() => resolve(axios.__response));
      });
    }
  };
};

export default axios;
