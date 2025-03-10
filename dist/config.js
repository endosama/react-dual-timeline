'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  // global
  paddingTop: 50,
  mediaWidthMed: 900,
  mediaWidthSmall: 700,
  activeColor: '#F45B69',
  lineStepColor: '#F45B69',
  lineStepShape: 'romboid',
  color: 'black',
  twoSidedOverlap: 80, // negative overlap between items if two-sided
  animations: true,
  addEvenPropToChildren: false,

  // line
  lineColor: '#FFF',
  circleWidth: 30,
  paddingToItem: 30,
  paddingToItemSmall: 20,
  lineWidth: 5,

  // triangle
  triangleWidth: 16,
  triangleHeight: 8,

  // list item content
  itemWidth: 350,
  itemWidthMed: 250,
  offsetHidden: 200,
  triangleOffset: 7,
  smallItemWidthPadding: 50,
  itemPadding: 16,
  evenItemOffset: 0 // important when using bootstrap.css
};

exports.default = config;