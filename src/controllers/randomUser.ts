import RandomUserService from "../services/randomService";

class RandomUserController {
  /**
   * @description Get x random users
   * @param {number} size
   **/

  async getRandomUserData(req: any, res: any) {
    try {
      const { size } = req.query;
      const dataUser = await RandomUserService.getRandomUserData(size);
      const values = dataUser.map((user: any) => {
        return {
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          avatar: user.avatar,
          username: user.username,
          password: user.password,
        };
      });
      return res.status(200).json(values);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}

export default new RandomUserController();
