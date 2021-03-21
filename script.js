const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1989, end: 2020 },
  { name: "Company Three", category: "Auto", start: 1979, end: 2008 },
  { name: "Company Four", category: "Technology", start: 1990, end: 1998 },
  { name: "Company Five", category: "Home", start: 1986, end: 2016 },
];

const ages = [33, 12, 20, 16, 5, 54, 44, 61, 13, 15, 46, 103];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies);
// }

// forEach
// companies.forEach((company) => {
//   console.log(company.name);
// });

// filter will return items to an array using a boolean
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//         canDrink.push(ages[i]);
//     }
// }
// const canDrink = ages.filter((age) => {
//   if (age >= 21) {
//     return true;
//   }
// });
// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

const retailCompanies = companies.filter(company => company.category === "Retail");

console.log(retailCompanies);

// Get 1980s companies
const eightiesCompanies = companies.filter(company => company.start > 1979 && company.start < 1990 );

console.log(eightiesCompanies);
// Get companies that lasted 10 yrs+
const haulerCompanies = companies.filter(company => (company.end - company.start) >= 10);

console.log(haulerCompanies);

// map

// sort
// reduce
