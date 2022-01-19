
//UpdateContext to create Count and Name local variables
UpdateContext({Count:1,Name:'John'});

//Print local variables 
console.log(Count);
console.log(Name);

//Update the variables
UpdateContext({Count:Count + 1,Name:'John Doe'});

//Print the updated local variables 
console.log(Count);
console.log(Name);
