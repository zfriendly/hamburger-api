# Hamburger-Modal-API

Building a hamburger menu to display photos of dog breeds using an API.

# Modal Project Requirements

Each developer must choose a modal type (I chose the hamburger drop-down menu) and populate the site with data using an API of our choice. I chose to use [TheDogAPI](https://thedogapi.com/). From there, site users can click on the links in the hamburger menu to view data fetched from the API.

## Prerequisites

- GitHub account
- Knowledge of:
  - JavaScript
  - DOM
  - APIs
  - CSS

## My Process

1. Wireframed and built out the HTML and some basic CSS.
2. Built a function to format the links to fetch data of 10 dogs from the Dog Api.
3. Built hamburger menu, including transition.
4. Built out fetch request, which required a bunch of back-and-forth
   - The other functions I had created to manipulate the fetched data were running before the fetch requests were completed, so the objects were coming back empty, which required a bunch of rubberducking and troubleshooting, only to realize that I could put my event listeners INTO the fetch request so they ran simultaneously. This was easily the hardest step.
5. Formatted the HTML through JS to correctly display the populated data from the fetch.
6. Custom styling for each element to make the site responsive and attractive.

## Deployed with:

I used GitHub to host my site, which can be found [**HERE**](https://zfriendly.github.io/hamburger-api/).

## Attributions

All API data came from [TheDogApi](https://thedogapi.com/).

## Contributing/Future Additions

Feel free to find me on [GitHub](https://github.com/zfriendly) if you're interested in contributing! I want to reformat the site to pull all ~300 breeds rather than the 10 I hand-selected.

## Screenshots

Hamburger Menu functionality:
![Functionality](https://i.imgur.com/dzPer28.png)

API data after fetch request:
![Dog breed info](https://i.imgur.com/RsXhfvJ.png)

## Author

- [Zack Friendly](https://github.com/zfriendly)
