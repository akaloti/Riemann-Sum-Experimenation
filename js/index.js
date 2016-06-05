"use strict";

// I treat OptionData like a C++ struct
function OptionData(displayHeader, func, rangeLow, rangeHigh)
{
  this.displayHeader = displayHeader;
  this.func = func;
  this.rangeLow = rangeLow;
  this.rangeHigh = rangeHigh;
  
  var rg = new RiemannGenerator(func, 500000);
  this.leftSum = rg.getLeftRiemannSum(rangeLow, rangeHigh);
  this.rightSum = rg.getRightRiemannSum(rangeLow, rangeHigh);
} // custom type OptionData

// "Static" OptionData variables
OptionData.NUM_RECTANGLES = 500000;

function setUpOptionEventHandlers()
{
  $("#lin-button").click(function() {
    alert($(this).html());
  });
  $("#quad-button").click(function() {
    alert($(this).html());
  });
  $("#para-button").click(function() {
    alert($(this).html());
  });
  $("#btwn-button").click(function() {
    alert($(this).html());
  });
}

function display(optionData)
{
  $("#display-header").html(optionData.displayHeaer);
  $("#function").html(optionData.func.toString());
  $("#range-lower").html(optionData.rangeLow);
  $("#range-higher").html(optionData.rangeHigh);
  $("#left-sum").html(optionData.leftSum);
  $("#right-sum").html(optionData.rightSum);
}

$(document).ready(function()
{
  // Menu option data instances
  var linFuncOption = new OptionData("Linear Function", function(x)
    { return 2 * x + 3; }, -5, 5);
  var quadFuncOption = new OptionData("Quadratic Function", function(x)
    { return 5 * x * x - 3 * x - 3; }, -8, 11);
  
  setUpOptionEventHandlers();
  
  // By default, display linear function's data
  display(linFuncOption);
});