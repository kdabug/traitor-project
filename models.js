const Sequelize = require("sequelize");
let sequelize;
if (process.env.DATABASE_URL) {
  console.log("called");
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: true,
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: "traitor_db",
    dialect: "postgresql",
    operatorAliases: false,
    define: {
      underscored: true
    }
  });
}

//TABLES
const User = sequelize.define("user", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true, // checks if email is already being used
    allowNull: false,
    validate: {
      isEmail: {
        // checks if input is in email form
        msg: "please enter a valid email address"
      },
      notNull: {
        // message given if null
        msg: "please enter an email address"
      }
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true, // checks if username is already being used
    allowNull: false,
    validate: {
      notNull: {
        // message given if null
        msg: "please enter a username"
      }
    }
  },
  password_digest: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        // message given if null
        msg: "please enter a password"
      }
    }
  },
  bank: Sequelize.INTEGER
});

const Ticker = sequelize.define("ticker", {
  symbol: Sequelize.STRING,
  amount_in_circulation: Sequelize.INTEGER
});

const Transaction = sequelize.define("transaction", {
  number: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  action: Sequelize.STRING,
  total: Sequelize.INTEGER
});

// one to many
Transaction.belongsTo(User);
Transaction.belongsTo(Ticker);
User.hasMany(Transaction);
Ticker.hasMany(Transaction);

// many to many
User.belongsToMany(Ticker, { through: "user_tickers" });
Ticker.belongsToMany(User, { through: "user_tickers" });

module.exports = {
  User,
  Transaction,
  Ticker,
  sequelize
};
