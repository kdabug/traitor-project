const { Router } = require("express");
const { Ticker, Transaction, User } = require("../models");
const { restrict } = require("../auth");

const tickersRouter = Router();

// gets all tickers '/tickers'
tickersRouter.get("/", async (req, res) => {
  try {
    const tickers = await Ticker.findAll();
    res.json(tickers);
  } catch (err) {
    console.error({ error: e });
  }
});

// get a ticker by id '/tickers/:id'
tickersRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ticker = await Ticker.findByPk(id);
    res.json(ticker);
  } catch (e) {
    console.error({ error: e });
  }
});

// gets all transactions by ticker id '/tickers/:id/transactiosn'
tickersRouter.get("/:id/transactions", async (req, res) => {
  try {
    const { id } = req.params;
    const transactions = await Transaction.findAll({
      where: {
        ticker_id: id
      }
    });
    res.json(transactions);
  } catch (e) {
    console.error({ error: e });
  }
});

// post a transaction to a ticker
tickersRouter.post("/:id/transactions/new", async (req, res) => {
  try {
    const station = await Ticker.findByPk(req.params.id);
    const newComment = await station.createComment(req.body);
    res.json(newComment);
  } catch (e) {
    console.error({ error: e });
  }
});

tickersRouter.post("/:id/user/:user_id/add", async (req, res, next) => {
  try {
    const ticker = await Ticker.findByPk(req.params.id);
    const newUser = await User.findByPk(req.params.user_id);
    await ticker.addUser(newUser);
    res.json({ ...station.get(), users: newUser });
  } catch (e) {
    next(e);
  }
});
tickersRouter.delete("/:id/user/:user_id/delete", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.user_id);
    console.log(user.dataValues);
    const station = await Ticker.findByPk(req.params.id, {
      include: [
        {
          model: User
        }
      ]
    });
    await ticker.removeUser(user);
    await ticker.reload();
    res.json(ticker);
  } catch (e) {
    next(e);
  }
});

module.exports = stationsRouter;
