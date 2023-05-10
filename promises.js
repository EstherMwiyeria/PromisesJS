// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

async function logMessage(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
}
console.log(logMessage("Expired Password", 1000));

// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. Write an asynchronous 
// function that fetches and logs the data for each user ID one by one, in sequence.
async function getUserDataIds(id){
    for(i = 0; i < id.length; i++){
        const dataIdValidation = await getUserData(id[i]);
        console.log(dataIdValidation);

    }

}
getUserDataIds([204,305,412,383])

// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's
// an error. Write a function that calls performTask() and logs 
// a custom success message if the task is successful, and a custom error message if there's an error.
function taskCompletion() {
    performTask();

    then(() => {
        console.log("Task is successful!");

    })
    .catch(() => {
        console.log("Occcurrence of an error while performing the task");

    });
    console.log(performTask());
    
}
taskCompletion()
