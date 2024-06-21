const createVirusFamily = require('./virusFamily');

function main() {
    // Create the virus family
    const originalVirusFamily = createVirusFamily();

    // Clone the original virus family
    const clonedVirusFamily = originalVirusFamily.clone();

    // Display the original and cloned virus family to demonstrate they are separate instances
    console.log('Original Virus Family:');
    displayVirusFamily(originalVirusFamily);

    console.log('\nCloned Virus Family:');
    displayVirusFamily(clonedVirusFamily);

    // Verify the instances are different but with same structure
    console.log('\nAre original and cloned families the same instance?', originalVirusFamily === clonedVirusFamily);
}

function displayVirusFamily(virus, generation = 0) {
    const indent = ' '.repeat(generation * 2);
    console.log(`${indent}Name: ${virus.name}, Type: ${virus.type}, Weight: ${virus.weight}, Age: ${virus.age}`);
    virus.children.forEach(child => displayVirusFamily(child, generation + 1));
}

main();
