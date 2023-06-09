// setTimeout callback example:
setTimeout(() => {
  console.log('Delay...')
}, 2000);

// setTimeout promise version example
function mySetTimeout(delay){
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  })
}

console.log('start');
mySetTimeout(3000).then(() => console.log('Delay Again...'));
console.log('end');

  function makeToys(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(Math.random() > 0.1){
            resolve('Undefected');
          } else {
            reject('Defected');
          }
        }, 3000)
      })
  }
function deliverToys(del){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(del === 'Undefected'){
        if(Math.random() > 0.5){
          resolve('Toy has been delivered');
        } else {
          reject('Toy has not been delivered');
        }
      }
    }, 2000);
  })
}

function sellToys(status){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(status === 'Toy has been delivered'){
        if(Math.random() > 0.7){
          resolve('Toy has been sold');
        } else {
          reject('Toy was shit');
        }
      }
    }, 1000);
  })
}
makeToys()
.then((del) => deliverToys(del))
.then((res) => console.log(res))
.then((status) => sellToys(status))
.catch((err) => console.log(err))

Async - Await

async function makeToysAsync(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.1){
        resolve('Undefected');
      } else {
        reject('Defected');
      }
    }, 3000);
  })
}
async function deliverToysAsync(del){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(del === 'Undefected'){
        if(Math.random() > 0.5){
          resolve('Toy has been delivered');
        } else {
          reject('Toy has not been delivered');
        }
      }
    }, 2000);
  })
}

async function sellToysAsync(status){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(status === 'Toy has been delivered'){
        if(Math.random() > 0.7){
          resolve('Toy has been sold');
        } else {
          reject('The toy was broken. Apologies for the inconvenience, a new toy is on your way! :)');
        }
      }
    }, 1000);
  })
}

async function promisify(){
  try {
    const status = await makeToysAsync();
    console.log(status)
    const delivery = await deliverToysAsync(status);
    console.log(delivery)
    const sellStat = await sellToysAsync(delivery);
    console.log(sellStat);
  } catch (error) {
    console.log(error)
  }
}
promisify();
