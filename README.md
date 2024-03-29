Carousel component built with React.
- Supports touch events.
- Works on mobile, tablet and desktop.


### Installation

To install this app, clone this repo:
```bash
git clone git@github.com:cactusjam/carousel.git
```
Install dependencies:
```bash
npm i
```
And then run bundling script:
```bash
npm run build
```

### Dev Workflow

To start a local development server, run:
```bash
npm start
```
It starts a server, opens the dev page in your default browser and watches for changes in code via livereload.

### Additional changes

For adding new pictures add pic to folder
```bash
\public\img
```
and change file 
```bash
src\mocks\slides.js
```
based on this example
```bash
 {
    id: 1,
    content: '<img src="/img/1.jpg" alt="person walks towards trees and mountains" style="width:100%;height:100%"/>',
  }
```  
