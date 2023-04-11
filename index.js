function receivesAFunction(callback) {
    callback()
  }

  function returnsANamedFunction() {
    return function named() {
      console.log("Hello named function!")
    }
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Hello anonymous function!')
    }
  }
  