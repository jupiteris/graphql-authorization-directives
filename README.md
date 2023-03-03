This is an example repository accompanying a tutorial about access-control with GraphQL and directives.

## How to install and run the project

To install and start the app run following commands.

```
npm install
npm start
```

Visit [http://localhost:4000](http://localhost:4000). You will see the Apollo playground. To have access to the authenticated fields `currentUser`, `currentUser.role` and `currentUser.message` you need to set one of the tokens inside `api/User.js` to the headers. This can be done in the playground bottom left.

```json
{
  "authorization": "token-for-maurice-moss"
}
```

You can now run following query.

```graphql
{
  currentUser {
    id
    firstName
    lastName
    role
    message(id: "1") {
      senderId
      receiverId
      text
    }
  }
}
```
