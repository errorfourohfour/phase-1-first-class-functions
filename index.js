const spy = function createSpy(){
    return `you got spied`;
}

function receivesAFunction(spy){
    return spy();
}

function iAmAFunction () {
    return receivesAFunction
}

function returnsANamedFunction () {
return iAmAFunction();
    
}

function returnsAnAnonymousFunction(iDontGetThisLesson){
return function(){
return iAmAFunction;
}
}