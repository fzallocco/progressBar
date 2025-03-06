console.log("Progress bar program:\n");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function executeWithDelay() {
    await sleep(300); // 2000 milliseconds = 2 seconds
}

async function calculateProgress(num)
{
    const progressBar = Array.from({ length: 11 }, () => []); // Initialize a 2D array with 11 rows
    for(let rows = 1; rows<=10; rows++)
    {
        for(let columns = 1; columns<=rows; columns++)
        {
            /*while on the same row...*/
            process.stdout.write("#"); // Print '#' on the same line
            progressBar[rows].push("#");
            /*putting threads to sleep to simulate gradual progression*/
            try{
                await executeWithDelay(); 
            }catch(event){
                console.log(`event: `, event);
            }
        }
        /*before moving on to the next row*/
        num += 1;
        progressBar[rows].push(": " + rows * 10 + "%\n"); // Append the percentage value
        console.log(": " + rows*10 + "%\n");
        console.log("");
        
        /*if(num == 10)
        {
            num = 0;
            await calculateProgress(num); //call back function through recursion
        }*/      
    }

    console.log("Progress Bar Array:", progressBar);
    return progressBar; 
}
let userInput = 1;
calculateProgress(userInput).then((progressBar) => {
    console.log("End program:\n");
    module.exports = progressBar; // Export the progressBar array
});
/*calculateProgress(userInput);
console.log("End program:\n");*/