// setTimeout callback example:
setTimeout(() => {
  console.log('Delay#1...')
}, 3000);

// setTimeout promise version example
function mySetTimeout(delay){
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

console.log('start')
mySetTimeout(2000).then(() => console.log('Delay#2...'))
console.log('end')
