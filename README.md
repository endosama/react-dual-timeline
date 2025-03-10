[![Build Status](https://travis-ci.org/ftes/react-dual-timeline.svg?branch=master)](https://travis-ci.org/ftes/react-dual-timeline)
[![npm version](https://badge.fury.io/js/react-dual-timeline.svg)](https://www.npmjs.com/package/react-dual-timeline)

# React Timeline
A react component for animated timelines.

![screen capture](./doc/screencapture.gif)

Based on the [CSS and Javascript template](https://webdesign.tutsplus.com/tutorials/building-a-vertical-timeline-with-css-and-a-touch-of-javascript--cms-26528)
by George Martsoukos ([CodePen](http://codepen.io/tutsplus/full/QNeJgR/)).

## Usage
For a full example see [example/index.js](./example/index.js).

Requirements: `radium`

```
import Timeline from 'timeline'

render(
  <StyleRoot>
    <Timeline>
      <div>Arbitrary entry</div>
      <div icon='x'>Arbitrary entry</div>
    </Timeline>
  </StyleRoot>
)
```

A custom icon can (optionally) be provided for each entry.

## Configuration
[src/config.js](./src/config.js) holds the default configuration.

Alternative values can be passed to the `<Timeline>` component,
e.g. `<Timeline animations={false}` to disable animations (far more efficient,
as otherwise boundingRect of every entry is checked on every scroll event).

name                  | default value            | description
----------------------|--------------------------|-----------------------
paddingTop            | 50
mediaWidthMed         | 900
mediaWidthSmall       | 700
activeColor           | #F45B69
lineStepColor         | #F45B69
lineStepShape         | circle | square | romboid
color                 | black
twoSidedOverlap       | 80 | negative overlap between items if two-sided
animations            | true
addEvenPropToChildren | false
lineColor             | #FFF
circleWidth           | 30
paddingToItem         | 30
paddingToItemSmall    | 20
lineWidth             | 5
triangleWidth         | 16
triangleHeight        | 8
itemWidth             | 350
itemWidthMed          | 250
offsetHidden          | 200
triangleOffset        | 7
smallItemWidthPadding | 50
itemPadding           | 16
evenItemOffset        | 0 | important when using bootstrap.css
