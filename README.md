Certainly! Here's a comprehensive documentation for your Angular project:

# Angular GitHub Users Grid

This Angular project displays a grid of users fetched from the GitHub API. The grid can be filtered using three different inputs.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)
- [HTML](#html)
- [TypeScript](#typescript)

## Prerequisites

Make sure you have the following software installed on your system:

- Node.js (version 12 or higher)
- Angular CLI (version 12 or higher)

## Installation

Follow the steps below to set up and run the project:

1. Clone the project repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd angular-github-users-grid
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

To run the project, use the following command:

```bash
ng serve
```

By default, the application will be served at `http://localhost:4200/`. Open this URL in your browser to view the application.

## Components

### MainScreenComponent

This component represents the main screen of the application. It displays the user grid and filters.

#### Properties

- `users`: A BehaviorSubject that stores the list of users fetched from the GitHub API.
- `filterId`: The ID filter value entered by the user.
- `filterLogin`: The Login filter value entered by the user.
- `filterType`: The Type filter value entered by the user.

#### Methods

- `ngOnInit()`: Lifecycle hook method that is called after the component is initialized. It calls the `fetchUsers()` method to fetch the users from the GitHub API.
- `fetchUsers()`: Fetches the list of users from the GitHub API and updates the `users` BehaviorSubject.
- `filterTable()`: Filters the user grid based on the filter values entered by the user.

## Services

### HttpClient

The `HttpClient` service provided by Angular's `@angular/common/http` module is used to make HTTP requests to the GitHub API and retrieve the user data.

## HTML

The HTML template of the `MainScreenComponent` displays the user grid and filters.

The grid is rendered using an HTML table (`<table>`) with columns for ID, Username, Avatar, and Profile. Each user is displayed in a row (`<tr>`) within the table.

The filter inputs are displayed above the grid and include the following:

- Filter ID: An `<input>` element of type "number" bound to the `filterId` property.
- Filter Login: An `<input>` element of type "text" bound to the `filterLogin` property.
- Filter Type: An `<input>` element of type "text" bound to the `filterType` property.

A "Filter" button is provided to trigger the filtering operation by calling the `filterTable()` method.

## TypeScript

The TypeScript code in the `MainScreenComponent` file handles the logic for fetching the user data, filtering the grid, and updating the `users` BehaviorSubject.

The component uses the `HttpClient` service to make an HTTP GET request to the GitHub API and retrieve the list of users. The fetched data is stored in the `users` BehaviorSubject.

The `fetchUsers()` method is called in the `ngOnInit()` lifecycle hook to fetch the initial set of users when the component is initialized.

The `filterTable()` method filters the user grid based on the filter values entered by the user. It uses the `Array.filter()` method to iterate over

 the original list of users and apply the filter conditions. The filtered users are then stored in the `users` BehaviorSubject.

When all filter values are null, the `filterTable()` method resets the `users` BehaviorSubject to the original list of users, effectively removing all filters and displaying the entire list again.

## Conclusion

This documentation provides an overview of the Angular GitHub Users Grid project, including the installation instructions, usage guide, component details, and code explanations.

Feel free to explore and modify the project code to suit your requirements. If you have any further questions or need assistance, please don't hesitate to ask.

Happy coding!
