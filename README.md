# PROJECT TRAITOR README

**name**
traitor
note: post-mvp items are indicated with an (\*) and might not be available at launch

**link**
https://gallant-haibt-6c9b60.netlify.com/

**images**
see proposal images for wireframe and component heirarchy

**description and userstory**

Traitor shows the user information about the stock market, focusing on specific, current stock prices.

USER: Georgette is a pirate..in her mind as she is falling asleep each night. By day, she is craft store clerk - paying minor attention to the market. She's a millenial, she doesn't trust the market. But she took some econ classes in college, she kinda knows what's up. A friend told her about the web app 'project traitor'. It's a slow day, she pulls out her laptop (a very lax personal devices policy at this ma and pop shop).

SHE SEES: A welcome page. It tells her 'we send pirates and traitors of this country...to the stocks...' and there is a button 'start trading'. A modal (is this the right word - look this up) pops up, asks her if she is a new or returning user. She signs up. is given an initial sum of booty (all pirates have at least some booty). later she will be asked if she wants to join a ship, but not right now. She is sent to another page...

HER TREASURE CHEST\*: Shows her the current inventory (stocks she owns) and current booty (which she can use to buy more stock). She can buy, sell, or watch the stock she currently owns. Sales increase current booty, but buying stocks decreases booty. But what if she wants different stocks?..

THE PLANK: where users can see/search for different stocks to buy. Bought stocks are added to inventory. Georgette is a little unsure of what to buy, she isn't a stock trader....

THE COMPASS: Allows you to see the past trends of certain stock (or of the market). So, Georgette looks some things up, makes a few small purchases. She logs off and comes back at the end of the day. She's forgotten already what she bought earlier in the day.

THE ARREST RECORDS\*: Georgette heads here to see her past transactions. She sees that she bough a stock earlier that she is already tired of. She sells it. She sees in her record that she earned a profit or took a loss on that sale.

**code snippet**
code that handles updating and getting to compass(charts) from other components

```
handleCompassSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("target", name);
    this.setState((prevState, newState) => ({
      [name]: value
    }));
    const { userInput, stockInfo } = this.props.state.appReducer;
    const tickerIndex = stockInfo.filter(
      stock =>
        stock.name.toLowerCase() === userInput.toLowerCase() ||
        stock.symbol.toLowerCase() === userInput.toLowerCase()
    );
    const newTicker = tickerIndex[0].symbol;
    this.setState((prevState, newState) => ({
      ticker: newTicker,
      userInput: ""
    }));
    this.props.history.push(`/compass/${newTicker}`);
  }
```

and code that handles rendering the compass page if it is updated

```
constructor(props) {
    super(props);

    this.props.state.appReducer = {
      historicalPrices: [],
      chartData: []
    };
    this.compileChartData = this.compileChartData.bind(this);
    this.fetchHistoryData = this.fetchHistoryData.bind(this);
    this.createTickerVal = this.createTickerVal.bind(this);
  }
  createTickerVal() {
    const path = this.props.location.pathname.split("/")[2];
    return this.props.ticker || path || "AAPL";
  }

  async fetchHistoryData() {
    const tickerVal = this.createTickerVal();
    // tickerVal = tickerVal ? this.props.ticker : "AAPL";
    const historicalPrices = await fetchHistoricalPrices(tickerVal, "1d");
    this.setState((prevState, newState) => ({
      historicalPrices: historicalPrices
    }));
    if (this.props.state.appReducer.historicalPrices.length) {
      this.compileChartData();
    }
  }

  async componentDidMount() {
    this.fetchHistoryData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ticker !== this.props.ticker) {
      console.log("FETCHING HISTORY DATA!", this.props.ticker);
      this.fetchHistoryData();
    }
  }

  compileChartData() {
    const chartData = this.props.state.appReducer.historicalPrices.map((timeStamp, el) => [
      timeStamp.label,
      timeStamp.average
    ]);
    this.setState((prevState, newState) => ({
      chartData: chartData
    }));
    console.log("chartData", chartData);
  }
```

**lessons learned**
This project relied on router and helped me gain a better understanding of app heirarchy. It was important to pass the correct props and match the correct params in any given component. In the end, I would re-structure this app and hone in on which props I could take out of app state and move into the state of relevant components.

Two other lessons learned in this project include: handling more advanced styling with web modals/imported style-sheets and understanding lifecycle methods. Some of my components needed to rerender with ticker changes, and I needed to learn how to utilize withRouter from react-dom and componentDid/Should/WillMount in order to navigate my cite and history correctly.

**major problems & solutions**
-Legally: this can't be a secondary market. no real money. no betting against the stocks to fail. Solution: this needs to focus on skill. You recruit and are rewarded for crafting a team of good players. People can be good at many things, reading the stock market included.
-storage: how to store current user data (transaction history) through refreshing and reloading a single page app.
-server: this would be nice if I could have more users now, but post-mvp.
-components passed through and up multiple levels, using the same component in different places?

**MVP**
A simple app that allows you to see general information and the daily chart of any given stock.

**component library**
List of Components and their functions:

- Welcome: Class - mainscreen - configures starting screen. has instructions and start trading [button] button
- Chest: Class - mainscreen - Displays Current Cash [currentBooty] and Current Inventory [currentInventory]
- Plank: Class - mainscreen - Displays available stocks to buy [RenderStock] and displays that stock as a list [DisplayStock]
- Details: Class - mainscreen - when clicking on a certain stock, takes to a screen that gives more details about the stock and has buttons [button] for buying, selling and watching\* stocks.
- Button: functional - has options of buying/selling/watching\* stocks
- Form: functional - querying for specific stocks
- Footer: class but it's at the bottom of the page for attribution
- PersonalForm\*: functional - for gathering personal information on the profile page
- RenderStock: functional - for gathering the list of stocks specified
- DisplayStock: functional - for displaying rendered list of stocks in the best looking cards
- DisplayInventoryList: functional - for displaying the current inventory list and linked to details [Details] and quick links to buying or selling more of current inventory\*
- RecordsHistory\*: history of prior transactions (plus gains and losses on the stocks at time of sale)
- PirateProfile\*: shows current ship, current captain, gives option to become a traitor (join another ship) or create own ship. Captains can use personal and ship resources to attract other pirates - attack other ships.
- PirateBoard\*: highest weekly, monthly, daily earning pirates (and contact info)
- Compass: Class - mainscreen - uses api and graph [graph] component to show the details of past trends for a specific stock (or the market in general\*)

**API**
IEX Api - for stock data;
Pirate translation\* api (for game instructions....we sent pirates and traitors of the country....to the stocks...get it... get it...)

(\*) = Post MVP

# BOILERPLATE REACT INFORMATION

This project was bootstrapped with [Create React App]

(https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
