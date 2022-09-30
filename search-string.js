const products =[
    'Dell Laptop Corei3',
    'HP Laptop Corei3',
    'Asus Laptop Corei3',
    'Dell Laptop Corei5',
    'HP Laptop Corei7',

];
const search = 'hp';
const output =[];
for(const product of products){
    if(product.toLowerCase().indexOf(search.toLowerCase()) != -1){
        output.push(product);

    }
}

console.log(output);