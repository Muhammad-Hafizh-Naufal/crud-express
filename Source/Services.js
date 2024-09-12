// tempat menyimpan fungsi yang digunakan kembali
// file belum bisa di pakai

import User from "../Database/Models";

export const getNpm = async (npm) => {
  return parseInt(npm);
};

export const checkUser = async (req) =>
  await User.findOne({
    where: {
      UserName: req.body.UserName,
    },
  });
if (req.body.UserName === checkUser.UserName) {
  return res.json({ message: "User already exists" });
}
