let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 5000)
})

promise1.then(value => {
  console.log(value)
  
//output's 'success' after 5 seconds
}).catch(err => {
  console.log(err)
  
//outputs the exception just in case one occurs and reject is returned instead.
})

console.log(promise1)
//outputs [object Promise]
