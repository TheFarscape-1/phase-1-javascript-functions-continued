function saturdayFun(hip = "roller-skate"){
    return (`This Saturday, I want to ${hip}!`)
     }
saturdayFun();
saturdayFun("bathe my dog")

  function mondayWork(kip = "go to the office"){
    return (`This Monday, I will ${kip}.`)
 };
  mondayWork("work from home");

  function wrapAdjective(str = "*") {
    return function(pip = "special") {
      return `You are ${str}${pip}${str}!`
    }
  }
const innerFunction = wrapAdjective()
innerFunction()