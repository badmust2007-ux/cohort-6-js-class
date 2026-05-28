const msg = "  Hello, WORLD!  ";

// 1. Remove extra spaces
console.log("Trimmed:", trimmed);

// 2. Check if it starts with "Hello"
console.log("Starts with Hello:", trimmed.startsWith("Hello"));

// 3. Check if it ends with "WORLD!"
console.log("Ends with WORLD!:", trimmed.endsWith("WORLD!"));

// 4. Convert to lowercase
const lower = trimmed.toLowerCase();
console.log("Lowercase:", lower);

// 5. Find position of "WORLD"
const position = trimmed.indexOf("WORLD");
console.log("Position of WORLD:", position);

// 6. Replace "WORLD" with "Nigeria"
const replaced = trimmed.replace("WORLD", "Nigeria");
console.log("Replace WORLD:", replaced);

// 7. Replace all "L" with "1"
const replaceAllL = trimmed.replaceAll("L", "1");
console.log("Replace all L:", replaceAllL);

// 8. Get characters from position 3 to 8
const substring = trimmed.substring(3, 9); // 9 because end index is not included
console.log("Substring (3 to 8):", substring);