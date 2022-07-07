it('nada agora', function() {})

// function soma(a, b) {
//   return a + b;
// }

// const soma = function(a, b) {
//   return a + b
// }

// const soma = (a, b) => {
//   return a + b;
// }

// const soma = (a, b) => a + b;

// const soma = (a) => a + a;

const soma = a => a + a;

console.log(soma(1, 4))

it('a function teste...', function() {
  console.log('Function1', this)
})

it('a function teste...', () => {
  console.log('Function2', this)
})