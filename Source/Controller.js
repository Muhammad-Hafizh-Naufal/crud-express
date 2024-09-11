import User from "../Database/Models.js";

// menampilkan seluruh User
export const getAllUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

// menampilkan User berdasarkan npm
export const getUserByNpm = async (req, res) => {
  try {
    const npm = parseInt(req.params.Npm);
    const response = await User.findByPk(npm);
    res.json({
      data: response,
      message: "Success get user",
    });
  } catch (error) {
    console.log(error);
  }
};

// menambahkan User baru
export const createUser = async (req, res) => {
  try {
    // cek apakah User sudah ada
    const checkUser = await User.findOne({
      where: {
        UserName: req.body.UserName,
      },
    });
    if (req.body.UserName === checkUser.UserName) {
      return res.json({ message: "User already exists" });
    }

    await User.create(req.body);
    res.json({ data: req.body, message: "User Created" });
  } catch (error) {
    res.json({ message: "An error occurred", error: error.message });
  }
};

// memperbarui User
export const updateUser = async (req, res) => {
  try {
    const npm = parseInt(req.params.Npm);

    await User.update(req.body, {
      where: {
        npm: npm,
      },
    });

    res.json({ data: req.body, message: "User Updated" });
  } catch (error) {
    res.json({ message: "An error occurred", error: error.message });
  }
};

// menghapus User
export const deleteUser = async (req, res) => {
  try {
    const npm = parseInt(req.params.Npm);
    await User.destroy({
      where: {
        npm: npm,
      },
    });

    res.json({
      data: req.body,
      message: "User Deleted",
    });
  } catch (error) {
    res.json({ message: "An error occurred", error: error.message });
  }
};
