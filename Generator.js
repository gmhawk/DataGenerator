const faker =  require('faker/locale/en_US');
const fs = require('fs');

console.time('Task completed in'); // Timer starts

var looped = 1;
var currentIteration = 1;
var maxChucks = 40; // Change to set Chunks
var chunkSize = 250000; // Change to set ChunkSize
// Retain and Release
function retainer(currentLoop) {
  if (currentLoop > maxChucks) {
    console.timeEnd('Task completed in'); // Timer stops
  }
  if (currentLoop <= maxChucks) {
    let collectedWater = ""; // Water is drained
    for (var i = 0; i < chunkSize; i++) {
      let productName = `Clean-O-Bot ${currentIteration}`;
      let price = faker.commerce.price();
      let rating = Math.floor(Math.random() * Math.floor(6)); // Random 0 to 5
      // images go here
      let reviews = faker.random.number();
      let isPrime = faker.random.boolean();
      let data =  `${currentIteration},` +
                  `${productName},` +
                  `${price},` +
                  `https://loremflickr.com/320/240?random=1,` +
                  `${faker.commerce.product()},` +
                  `https://loremflickr.com/320/240?random=2,` +
                  `${faker.commerce.product()},` +
                  `https://loremflickr.com/320/240?random=3,` +
                  `${faker.commerce.product()},` +
                  `https://loremflickr.com/320/240?random=4,` +
                  `${faker.commerce.product()},` +
                  `https://loremflickr.com/320/240?random=5,` +
                  `${faker.commerce.product()},` +
                  `https://loremflickr.com/320/240?random=6,` +
                  `${faker.commerce.product()},` +
                  `${rating},` +
                  `${reviews},` +
                  `${isPrime}`;
      currentIteration++;
      // data = JSON.stringify(data);
      collectedWater += data + "\n";
    }
    fs.appendFile('./DO_NOT_OPEN/sdc_data.csv', collectedWater, (err) => {
      if (err) {console.error(err)}
      console.log(`Currently at loop ${currentLoop} of ${maxChucks}`);
      looped++;
      retainer(looped);
    });
  }
}

retainer(looped);
















// let data = {
//   id: currentIteration,
//   productName: productName,
//   price: price,
//   imageURL1: "https://loremflickr.com/320/240?random=1",
//   imageURL2: "https://loremflickr.com/320/240?random=2",
//   imageURL3: "https://loremflickr.com/320/240?random=3",
//   imageURL4: "https://loremflickr.com/320/240?random=4",
//   imageURL5: "https://loremflickr.com/320/240?random=5",
//   imageURL6: "https://loremflickr.com/320/240?random=6",
//   rating: rating,
//   reviews: reviews,
//   isPrime: isPrime,
// }
