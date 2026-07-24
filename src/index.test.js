import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./index.js";

test('capitalize first letter of string', ()=>{
    expect(capitalize("amazing day today")).toMatch("Amazing day today");
});

test('capitalize string starting with a number', ()=>{
    expect(capitalize("2hello")).toMatch("2hello");
});

test('take string and return it reversed', ()=>{
    expect(reverseString("Good morning")).toMatch("gninrom dooG");
});

test('take string and return it reversed', ()=>{
    expect(reverseString("dog")).toMatch("god");
});

test('takes two numbers and adds them together', ()=>{
    expect(calculator.add(1, 2)).toBe(3);
});

test('takes two numbers and substracts them', ()=>{
    expect(calculator.substract(5, 6)).toBe(-1);
});

test('takes two numbers and divdes them', ()=>{
    expect(calculator.divide(12, 3)).toBe(4);
});

test('divide supports decimals', ()=>{
    expect(calculator.divide(5.5, 2)).toBe(11/4);
});

test('takes two numbers and multiplies them', ()=>{
    expect(calculator.multiply(5, 6)).toBe(30);
});

test('returns character shifted by the factor using Caesar cipher', ()=>{
    expect(caesarCipher("abc", 3)).toMatch("def");
});

test('caesar function wraps around', ()=>{
    expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test('caesar function preserves uppercase', ()=>{
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test('caesar uppercase wraps around', ()=>{
    expect(caesarCipher("xYz", 3)).toMatch("aBc");
});

test('unalphabetical characters remain unchanged', ()=>{
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test('analyzeArray takes array of numbers and returns average', ()=>{
    expect(analyzeArray([2,2,4,8]).average).toBe(4);
});

test('analyzeArray takes array of numbers and returns average', ()=>{
    expect(analyzeArray([2,2,4,8]).min).toBe(2);
});
test('analyzeArray takes array of numbers and returns average', ()=>{
    expect(analyzeArray([2,2,4,8]).max).toBe(8);
});
test('analyzeArray takes array of numbers and returns average', ()=>{
    expect(analyzeArray([2,2,4,8]).length).toBe(4);
});



