# bwitt19.github.io/me

This is the repository for my [personal website](https://bwitt19.github.io/me) that I use, built with ReactJS and react-bootstrap, and deployed on GitHub Pages.   

My focus for this site is to keep it as light as humanly possible, and to have it be responsive depending on the device using it. (mobile, desktop, etc.) Hence, the simple and fast design.  

The `master` branch contains the current working React code for the site, `develop` is where I make little tweaks and fix up little loose ends, and the `gh-pages` branch is where the currently deployed version of the website sits, built by React and deployed with the gh-pages package.

---

## To build, test, and all of the rest

- Testing: `npm start` will, like usual, start up a localhost development server to work on changes locally.
- Deployment: `npm run deploy` will build the app with React and use gh-pages to publish the site. To see what the script does in particular, check "scripts" in `package.json`.