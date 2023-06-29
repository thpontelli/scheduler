# Interview Scheduler

The Interview Scheduler is a modern and user-friendly Single Page Application (SPA) designed to manage and monitor student interviews. It incorporates the latest tools and techniques to provide an optimized user experience. With this application, users can easily add, modify, and delete interview appointments in real time. It leverages React's built-in and custom hooks to handle data efficiently. The application's data is stored and persisted by a PostgreSQL database through an API server. Communication between the client application and the API server occurs over HTTP, utilizing the JSON format. To ensure high quality, the project adheres to the best practices of Test Driven Development (TDD). This includes conducting thorough testing of individual components in isolation, as well as performing comprehensive End-to-End testing.

## Main Features

* Display appointment days (Monday to Friday) showing the number of available slots for each day.
* Allow users to switch between days and view detailed information.
* Enable users to book interviews by entering a student name and selecting an interviewer from a list.
* Provide the option for users to modify the details of an existing interview by clicking the edit icon.
* Allow users to cancel existing interviews, with a pop-up message for confirmation before permanent deletion.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
