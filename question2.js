const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved: delayed success!"), 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Rejected: delayed exception!"), 500);
    });
};

console.log("Running Question 2...");

resolvedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.error(err));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
