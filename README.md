<no pushear directo a main>
# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

Loader component:

In order to use the component, the developer has to pass on a prop in the Loader component --> loading={false}
Then, in its component, the developer has to set a conditional rendering --> loading ? : <some code>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `User Alerts`

Implemented in 'src/features/alerts/alerts.js', these alerts give three standarized types of alert (success, erorr and info).
For the correct use of them, they need to recieve three string parameters: 
- Notification title.
- Notification message.
- Notification button text.

Those three parameters are mandatory.

The alerts were develop with sweetAlert (https://sweetalert.js.org/docs/ for more information).

## `Progress View`

This component is implemented in 'src/Components/Utilities/Loading.js', its objective is to show feedback to the user when it is loading a resource.
For the correct use of its, it need to receive a bool parameter:
- Open

This parameter is mandatory.

The progress views were develop with MaterialUI (https://mui.com/components/progress/ for more information).