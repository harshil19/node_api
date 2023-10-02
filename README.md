# node_crud_api

## Installation

Use the package manager [express](https://www.npmjs.com/) to install express.

Need to package install

```bash
yarn add express
yarn add helmet
yarn add yup
yarn add http-status-codes
yarn add express-yup-middleware
```

## Usage

```node
yarn install

# returns 'add user'
localhost:3000/v1/user/add-user

# returns 'update user'
localhost:3000/v1/user/update-user/id

# returns 'delete user'
localhost:3000/v1/user/delete-user/id

# returns 'get user'
localhost:3000/v1/user/get-user/id

# returns 'get all users'
localhost:3000/v1/user/get-all-users
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/harshil19/node_crud_api/blob/main/LICENSE)