## Run the app

**Development mode** in _localhost:3000_

> npm install

> npm start

## Production mode

The project is published in [Netlify](https://ecstatic-goldstine-0e87f2.netlify.com/)

## Assumptions

- Pagination is not posible in server side, so all data must be **retrieved at once**. Initial load may be affected.

- **Update DOM is expensive and slow**, so we minimize the number of printed elements.

- **Search and Filter** actions must work with the **complete dataset**, so we work with two lists of data: _data_ and _filteredData_

- Default _.sort()_ method may be ineficient, so we need a custom compare function.

- Because of limit printed elements we must provide a way for the user to load more elements => Traditional pagination works well with search and filter.
