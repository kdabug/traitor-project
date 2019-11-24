const { User } = require("./models");

const seedDb = async () => {
  console.log(User);
  try {
    await User.destroy({ where: {} });

    await User.bulkCreate([
      {
        first_name: "Mikayda",
        last_name: "Mills",
        email: "mills.ma12@gmail.com",
        username: "kdabug",
        password_digest: "scooby",
        bank: 500
      },
      {
        first_name: "Dallin",
        last_name: "Parker",
        email: "dallin.hi@gmail.com",
        username: "dpark",
        password_digest: "scooby",
        bank: 500
      }
    ]);
  } catch (err) {
    console.error(err);
  }
};

const run = async () => {
  try {
    await seedDb();
  } catch (err) {
    console.error(err);
  } finally {
    await process.exit();
  }
};

run();
