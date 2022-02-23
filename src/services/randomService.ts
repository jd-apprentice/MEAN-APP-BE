const axios = require("axios");

class RandomUserService {
  async getRandomUserData(size: number = 1) {
    try {
      const response = await axios.get(`https://random-data-api.com/api/users/random_user?size=${size}`);
      const dataUser = response.data;
      return dataUser;
    } catch (error: any) {
      return { message: error.message };
    }
  }
}

export default new RandomUserService();
