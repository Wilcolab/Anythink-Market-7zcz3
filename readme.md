# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- From the project's root directory run:
```
docker-compose up
```

- Test if startup worked by navigating to - http://localhost:3000/api/ping.
- Check if the frontend is connected to the backend by navigating to http://localhost:3001/register.
- If everything is working correctly you should be able to create a user.












