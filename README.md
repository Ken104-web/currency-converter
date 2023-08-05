 # Currency Converter

A web Application that allows users to convert between different currencies based on the latest exchange rates. It also provides information about the strongest and weakest rates among the available currencies.

# How it works
1.  Home Page: The application starts with a "Home" page where users can select the source currency from a dropdown and enter the amount they want to convert.

2. Currency Options: The available currency options are fetched from the server and displayed in the source currency dropdown.

3. Conversion: After selecting the source currency and entering the amount, the user can select the target currency from another dropdown. The equivalent amount in the target currency is automatically calculated and displayed.

4. Displayed Rates: The "Displayed Rates" page shows the latest exchange rates for all available currencies. Users can explore the rates for different currencies.

5. Strongest and Weakest Rates: The "Displayed Rates" page also highlights the strongest and weakest exchange rates among the available currencies.

6. Update Rate: The application provides an option to update the exchange rate for a specific currency. Users can enter a new rate for the currency and update it using the "Update Rate" feature.



# Features

- Convert between between currencies using latest exchange rates.

- Display the strongest and weakest exchange rates among the available currencies.

- Update the exchange rate for a specific currency.

# Getting Started

Clone the repository

`git@github.com:Ken104-web/currency-converter.git`

1. install dependencies:

`cd currency-converter`

`npm install`

2. start the development server

`npm start`

To update the exchange rate for a specific currency, the application uses the following API endpoint:

`POST / rates`

To obtain it first run the json server

`json-server --watch db.json`

# Technologies Used

- React: Front-end JavaScript library for building user interfaces.


- React Router: Library for handling client-side routing in a React application.


- React Bootstrap: Library for styling the user interface using Bootstrap styles.

# License 

MIT license

# Author

Kenneth Mwangi