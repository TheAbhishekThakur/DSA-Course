// Promise APIs

// Promise.all([]) in success/failure case

const pA1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const pA2 = new Promise((resolve, reject) => {
  // In Success
  // setTimeout(() => resolve("P2 Success"), 1000);

  // In Failure
  setTimeout(() => reject("P2 Failed"), 1000);
});

const pA3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 2000);
});

/* 
	  Success:- It will take 3 second and then it will return an fulfilled array.
	  Failure:- It will take 1 second and then it will return an error.
	*/

Promise.all([pA1, pA2, pA3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Promise.allSettledl([]) in success/failure case

const pB1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const pB2 = new Promise((resolve, reject) => {
  // In Success
  setTimeout(() => resolve("P2 Success"), 1000);

  // In Failure
  // setTimeout(() => reject("P2 Failed"), 1000);
});

const pB3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 2000);
});

/* 
	  Success:- It will take 3 second and then it will return an fulfilled array.
	  Failure:- It will take 3 second and then it will return an fulfilled/rejected array.
	*/

Promise.allSettled([pB1, pB2, pB3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Promise.race([]) in success/failure case

const pC1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const pC2 = new Promise((resolve, reject) => {
  // In Success
  // setTimeout(() => resolve("P2 Success"), 1000);

  // In Failure
  setTimeout(() => reject("P2 Failed"), 1000);
});

const pC3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 2000);
});

/* 
	  Success:- It will take 1 second and then it will return an 1st fulfilled value.
	  Failure:- It will take 1 second and then it will return an 1st rejected value.
	*/

Promise.race([pC1, pC2, pC3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Promise.all([]) in success/failure case

const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P1 Success"), 3000);

  // In Failure
  setTimeout(() => reject("P1 Failed"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  // In Success
  // setTimeout(() => resolve("P2 Success"), 1000);
  // In Failure
  setTimeout(() => reject("P2 Failed"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P2 Success"), 2000);

  // In Failure
  setTimeout(() => reject("P3 Failed"), 2000);
});

/* 
	  Success:- It will take 1 second and then it will return an 1st fulfilled value.
	  Failure:- It will take 3 second and then it will return AggregateError array.
	*/

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.error(err.errors); // ['P1 Failed', 'P2 Failed', 'P3 Failed']
  });
