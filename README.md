
## Features
      React / Redux Tooolkit
      Typescript
      Node Js / Express JS
      PostgreSQL as a SQL Database
      TypeORM as a ORM for PostgreSQL with power of typescript
      REST Api
      Bootstrap 4

## Client side state management

Project is using both Redux global state and component based state management
as application is too small main staff is handled by component level state, 
redux is implement just for a showcase

## Deployment

Project is deployed to heroku to test UI and UX as well<br />
Front end URL:  [https://preezma-front.herokuapp.com/](https://preezma-front.herokuapp.com/)<br /> 
API URL:  [https://preezma-api.herokuapp.com/](https://preezma-api.herokuapp.com/)

## Repositories
Front [https://github.com/hrachocode/preezma](https://github.com/hrachocode/preezma)

## Form configuration Scheme

as test tesk is realised with full stack approach
Form Scheme is stored in Database, and could ba replaced by specific endpoint described in Routes section
current scheme >>
to 
```json
{
    "fields": [
        {
            "name": "Fied2",
            "label": "Label2",
            "type": "number",
            "required": true,
            "errorMessage": "This field is required"
        }
    ]
}
```

      Current Form Setup
            1. Form fields
                  Name - accepts only Latin characters | Required | should not be empty
                  Phone - accepts only numbers | required | should not be empty
                  date - valid date time | required | should not be empty

            2. to update provided scheme you need to call to specific API which mentioned in Routes section 
                  providing new scheme wtih required fields

## Routes

      Postman routes import link: https://www.getpostman.com/collections/365895a18dd35203f8e2

      Client side
      / - Main Route rendering list of contacts
      /add-contact - Route for adding contacts

      Server side
      /contacts/get - getting list of contacts
            Method: get

      /contacts/add - adding list of contacts
            Method: post
            Data Example >
```json
      "data": {
            "name"
            "phone"
            "date"
      }
```
      /form/get - getting From configuration scheme
            method: get

      /form/post - changing Form configuration scheme
            method: post
            data: ... new configuration object to replace existing NOTE: must be provided the whole form object itselt and not the single field
      

## Vision
      Here is the points that are not required by test task but can make application better
            1. global Loader component to wrap children and provide loading state
            2. custom UI to update Form Configuration fields via API
            3. CRUD to work with form configuration
            4. Microservices architecture implementation
            5. Bulk delete each contact separately
            6. setup tests both for front end and back end
            7. setup preprocessor like SCSS or use CSS modules system

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
