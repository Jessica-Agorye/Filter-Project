# Search Filter Project

## About

This project shows how a simple filter function. It demonstrates how to filter data in Javascript using the filter() method, and also how to use state to handle the search.

## Features

- Search users by thier firstname
- case sensitive search
- Dynamic filtering using useState hook

## Technologies

-React
-Javascript
-CSS

## How Filtering Works

1. The user types into the search input.
2. The value from the input is stored in a state
3. The filter() goes through every item
4. The map() returns all or filtered data

## What I Learned

- How filter() works
- How the state controls the input instead of the browser which is why we set value in input to the current state e.g value={search}
- the importance of toLowerCase to eliminate case sensitivity, in other words if the user types in capital letter it wouldnt affct how data is being filtered.
