/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));



*/

function calc(num, opr){
    if(!opr)
      return num;
    return opr(num);
  }
  function zero(op) {
    return calc(0,op);
  }
  function one(op) {
    return calc(1,op);
  }
  function two(op) {
    return calc(2,op);
  }
  function three(op) {
    return calc(3,op);
  }
  function four(op) {
    return calc(4,op);
  }
  function five(op) {
    return calc(5,op);
  }
  function six(op) {
     return calc(6,op);
  }
  function seven(op) {
     return calc(7,op);
  }
  function eight(op) { return calc(8,op);}
  function nine(op) { return calc(9,op);}
  
  function plus(x) {return function(y){
    return y+x;
  }}
  function minus(x) {return function(y){
    return y-x;
  }}
  function times(x) {return function(y){
    return y*x;
  }}
  function dividedBy(x) {return function(y){
    return (Math.floor(y/x));
    }
  }