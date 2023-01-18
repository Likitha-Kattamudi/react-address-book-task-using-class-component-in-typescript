# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## react-typescript-address-book-task

This task is based on react typescript.
The type of component used in this task is Functional Component.
useState and useEffect hooks are used to mainain the state of variables and arrays.

In the project directory,
step-1:install npm using below command:

### `npm i`

step-2:install sweetalert2 module using below command:

### `npm install --save sweetalert2`

step-3:you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Folder Structure

- Under src folder there is a subfolder with name `components`
- In this folder, all the component files are present.
- In 'App.tsx' there are two main components which are `Top` Component i.e, Top.tsx file and `Bottom` Component i.e, Bottom.tsx file.
- Top.tsx returns a basic JSX element.
- Bottom.tsx contains two components, Contacts.tsx and FlexItem4_1.tsx and also a form to take input from the user.
- Contacts.tsx returns a basic JSX element.
- FlexItem4_1 is placed in a ternary operator which depends on the value of a variable.
- In FlexItem4_1 ,DisplayDataInAddressBook.tsx is another component.
- Depending on the validations, the control is redirected to this component and the values are displayed in FlexItem4_1.
- Edit amnd Delete buttons are available to edit or delete the content from the flexItem4_1 div.
- IDataInput.tsx is a component where IDataInput interface is defined.

## Libraries Used additionally

sweetalert2 : customized alert boxes to show error messages or success messages to the user.
