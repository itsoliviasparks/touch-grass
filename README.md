# Touch Grass 🏕️
<a href="https://itsoliviasparks-touch-grass.netlify.app">Live Site</a>

## About
An app for those needing to get outside, Touch Grass is crafted with the <a href="https://www.nps.gov/subjects/developer/api-documentation.htm">U.S. National Park Service API</a>.
This app allows users to search all National Parks by State & activity. Then, the user can add their activity to their Field Notes to-do list.

## Use
- On app mount, the user is presented with a drop-down list of U.S. States & checkboxes for various outdoor activities. The user can select as many activities as they like before clicking the "Your Adventure Awaits" button
- From there, the user is brought to the results screen, which displays a list of all National Parks (with hyper links to their respective info sites) per activity in their selected state
- The user can then click each park to add to their "Field Notes"
- The Field Notes section acts as a To-Do List, where the user can add, delete, and move activities from Planning to Visit & Visited

## Features
- React, Firebase, an API, & Sass, were used in the creation of this project

## Next Steps
- Currently all users share a singular Field Notes page
- I am working on implementing User Authentication via Firebase to allow each user to have an individualized & private Field Notes page
