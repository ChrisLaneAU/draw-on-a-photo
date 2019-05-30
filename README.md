## Draw On A Photo

A to-do app with integrated photo editing. Designed for contractors, the app allows managers to clearly define tasks for staff by drawing instructions right onto a photo. E.g. an arrow pointing to exactly where a tree-lopper should cut a branch.

### Demo

[Demo](https://chrislane.com.au/#work)

### Stack

React (CRA) + Redux + Fabric + Firebase + scss + lodash

### Installation

1. Clone or download repo
2. Run `npm install`
3. Run `npm start`

### Tests

1. Run `npm run test`

### Screenshots - List

![To-do list](https://github.com/ChrisLaneAU/draw-on-a-photo/tree/master/public/Draw-List.png?raw=true "To-do List")

### Screenshots - Drawing on the Photo

![Drawing on the photo](https://github.com/ChrisLaneAU/draw-on-a-photo/tree/master/public/Draw-Edit-Photo.png?raw=true "Drawing on teh photo")

### TODO:

- Finish unit and integration tests
- Refactor `<CanvasContainer />` methods into reducers
- Refactor store variable names and consolidate
- Refactor actions and reducers to [Ducks](https://github.com/erikras/ducks-modular-redux)
- Refactor css selector names
- Build `<ConfirmBox />` and connect to delete/cancel buttons
- Build Add/Delete todo item functionality
- Build data refresh cloud function

`
