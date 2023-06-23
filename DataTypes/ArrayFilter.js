const ages = [12, 24, 15, 17, 35];
console.log("ages", ages);

function checkAdult(age)
{
    console.log(age);
    if(age >= 18){
        return true;
    }
    else {
        return false;
    }
}

const adultAges = ages.filter(checkAdult);
console.log("adultAges", adultAges);

const myClassMates = ["ashish", "salman", "aishwarya", "shahrukh"];
const myClassMatesWithLengthGreaterThan6 =  myClassMates.filter((nameString) => {
    if(nameString.length > 6)
    {
        return true;
    }
    else{
        return false;
    }

});
console.log("myClassMatesWithLengthGreaterThan6", myClassMatesWithLengthGreaterThan6);

const products = [
    { name: 'Shirt', price: 20 },
    { name: 'Shirt', price: 80 },
    { name: 'Jeans', price: 30 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 10 },
  ];

 const productsLessThan40 = products.filter((product) => { 
    console.log(product);
    return product.price < 40;
  });
  console.log("productsLessThan40", productsLessThan40);

  const productsLessThan40AndShirt = products.filter((product) => { 
    console.log(product);
    return product.price < 40 && product.name === "Shirt";
  });
  console.log("productsLessThan40AndShirt", productsLessThan40AndShirt);