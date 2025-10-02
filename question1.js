function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            return reject("Input should be an array.");
        }
        try {
            const result = mixedArray
                .filter(item => typeof item === "string")
                .map(str => str.toLowerCase());
            resolve(result);
        } catch (error) {
            reject("An error occurred: " + error);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

console.log("Running Question 1...");

lowerCaseWords(mixedArray)
    .then(res => console.log("Output:", res))
    .catch(err => console.error(err));
