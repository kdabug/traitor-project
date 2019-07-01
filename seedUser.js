const { Users } = require("./models");

async function seed() {
  try {
    await Users.destroy({ where: {} });

    const users = await Users.bulkCreate([
      {
        first_name: "Mikayda",
        last_name: "Mills",
        email: "mills.ma12@gmail.com",
        username: "kdabug",
        password_digest: "scooby",
        bank: 500
      }
    ]);
  } catch (e) {
    console.error(e);
  }
  process.exit();
}

seed();
