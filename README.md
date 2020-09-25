
## Features
      React / Redux Tooolkit
      Typescript
      Node Js / Express JS
      TypeORM as a Database
      REST Api
      Bootstrap 4

## Form configuration Scheme

as test tesk is realized with full stack approach
Scheme is stored in Database, and could ba replaced by specific endpoint described in Routes section
current scheme >> 

```json
{
      text: {
            label: "Name",
            name: "name",
            type: "text",
            required: true,
            errorMessage: "Name is required and must a valid string"
      },
      phone: {
            label: "Phone",
            name: "phone",
            type: "tel",
            required: true,
            errorMessage: "Phone is required and must a valid phone number"
      },
      date: {
            label: "Date",
            name: "date",
            type: "date",
            required: false,
            errorMessage: "Phone is required and must a valid date time"
      },
      submit: {
            label: "Submit",
            name: "submit",
            type: "submit",
            required: false,
            errorMessage: ""
      }
}
```


## Routes

Client side
      / - Main Route rendering list of contacts
      /add-contact - Route for adding contacts

Server side
      /contacts/get - getting list of contacts
            Method: get
      /contacts/add - adding list of contacts
            Method: post
            data: {
                  name,
                  phone,
                  date
            }
      /form/get - getting From configuration scheme
            method: get
      /form/post - changing Form configuration scheme
            method: post
            data: ... new configuration object to replace existing
      

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
