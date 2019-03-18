var test = require('tape');
var logic = require('./sendHelp');


// Test trypeof String
test('123', function(t) {
 
       var string = logic.sendHelp(123);
       var expected = "Input must be a string"

     t.deepEquals(string, expected, string);
     t.end();
});


// Test Length
test('SO', function(t) {
 
       var string = logic.sendHelp("SO");
       var expected = "String must be at least 3 chars long and up to 99 chars long"

     t.deepEquals(string, expected, string);
     t.end();
});

// Test Uppercase
test('SosSos', function(t) {
 
       var string = logic.sendHelp("SosSos");
       var expected = "String will contains only uppercase letters"

     t.deepEquals(string, expected, string);
     t.end();
});

// Test Multiple of 3
test('SOSO', function(t) {
 
       var string = logic.sendHelp("SOSO");
       var expected = "String length must be a multiple of 3"

     t.deepEquals(string, expected, string);
     t.end();
});

// Test Functions
test('SOS', function(t) {
 
       var string = logic.sendHelp("SOS");
       var expected = 0

     t.deepEquals(string, expected, "0");
     t.end();
});

// Test Functions
test('MOS', function(t) {
 
       var string = logic.sendHelp("MOS");
       var expected = 1

     t.deepEquals(string, expected, 1);
     t.end();
});

// Test Functions
test('SOSSOSSOS', function(t) {
 
       var string = logic.sendHelp("SOSSOSSOS");
       var expected = 0

     t.deepEquals(string, expected, "0");
     t.end();
});

// Test Functions
test('SOPSLSHOS', function(t) {
 
       var string = logic.sendHelp("SOPSLSHOS");
       var expected = 3

     t.deepEquals(string, expected, 3);
     t.end();
});

// Test Functions
test('OGS', function(t) {
 
       var string = logic.sendHelp("OGS");
       var expected = 2

     t.deepEquals(string, expected, 2);
     t.end();
});

// Test Functions
test('OSSSOSSPLMOSOOOSOSSOTSOSSOSSLS', function(t) {
 
       var string = logic.sendHelp("OSSSOSSPLMOSOOOSOSSOTSOSSOSSLS");
       var expected = 9

     t.deepEquals(string, expected, 9);
     t.end();
});

// Test Functions
test('SOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOS', function(t) {
 
       var string = logic.sendHelp("SOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOS");
       var expected = 0

     t.deepEquals(string, expected, "0");
     t.end();
});

// Test Functions
test('SOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOM', function(t) {
 
       var string = logic.sendHelp("SOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOSSOM");
       var expected = 1

     t.deepEquals(string, expected, "1");
     t.end();
});