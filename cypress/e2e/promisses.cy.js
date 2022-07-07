it('sem testes', () => {})

const getSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12);
    }, 1000)
  })
};

// const system = () => {
//   console.log('init');
//   getSomething().then(sum => {
//     console.log('Something is ' + sum)
//   })
//   console.log('end');
// }

const system = async () => {
  console.log('init');
  const sum = await getSomething();
  console.log('Something is ' + sum)
  console.log('end');
}

system();