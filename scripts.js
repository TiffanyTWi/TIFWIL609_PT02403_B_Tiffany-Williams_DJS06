// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// ForEach Basics
provinces.forEach((province) => console.log(province));
names.forEach((name) => console.log(name));

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Name Lenghts
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Finding S
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exsercises
// Log Products
// Use forEach to iterate over products array and log product names to the console
products.forEach(product => console.log(product.product));

// Filter by name length
// Filter out products whose name length is greater than 5
products.filter(product => product.product.length > 5);

// Price Manipulation
// Filter out products with invalid prices
// Convert prices to numbers
// Calculate the total price using reduce
products
.filter(product => product.price && product.price.trim()!=='')
.map(product => ({...product, price: parseFloat(product.price)}))
.reduce((total,product) => total + product.price, 0);


// Concatenate Product Names
// Use reduce to concatenate product names into a string
products.reduce((acc,product) => acc + product.product,'');

// Find Extremes in Prices
// Filter products only including valid prices
// Convert prices to numbers
// Find the highest and lowest prices
(() => {
  const validPrices = products
  .filter(product => product.price && product.price.trim()!=='')
  .map(product => parseFloat(product.price));
  if (validPrices.length === 0) return 'No valid prices available.';
  const highest = Math.max(...validPrices);
  const lowest = Math.min(...validPrices);
  return `Highest:${highest}. Lowest:${lowest}.`;
})();

// Object Transformation
// Use reduce to transform the products array into an object where each key is the product name, 
// and the corresponding value is an object containing the products name and cost.
products.reduce((acc, product)=>{
  acc[product.product]={name:product.product,cost:product.price};
  return acc;
},{});