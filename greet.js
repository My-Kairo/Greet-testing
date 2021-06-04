describe('Names input', function(){
it('Should be able to se the first character of the name as uppercase',function(){
let setUppercase = Greetings([])
setUppercase.setnames("thato")
assert.equal("Thato", setUppercase.getnames());
});

it('Should add the names into an array', function(){
let names = Greetings()
names.setnames('List')
assert.equal('List', names.getnames())
});

it('Should check if names are not duplicates', function(){
let naming = Greetings()
naming.setnames('Thato')
naming.setnames('Kairo')
naming.setnames('Sane')
naming.setnames('Kairo')
assert.equal(naming.theCounter(), 3);
});

it('should check the first character of the name to be uppercae', function(){
let names = Greetings()
names.setnames("boikano")
assert.equal("Boikano", names.getnames())

});
});




describe('Greeting', function(){
it('Should greet a name with English', function(){
let language = Greetings()
assert.equal(language.greet("English", "Thato"), "Hello, Thato")
});

it('Should greet a name with Sesotho', function(){
let language = Greetings()
assert.equal(language.greet("Sesotho", "Melo"), "Dumela, Melo")
});

it('Should greet a name with Isixhosa', function(){
let language = Greetings()
assert.equal(language.greet("Isixhosa", "Kano"), "Molo, Kano")
});

})