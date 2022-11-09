// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity2 = "go to the office") {
    return `This Monday, I will ${activity2}.`;
}

let wrapAdjective = function(flair = "*"){
    return function(singleP = "special"){
        return `You are ${flair}${singleP}${flair}!`
    }
}
