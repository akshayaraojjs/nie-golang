async function checkExamResults() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const passed = Math.random() > 0.35;
            if(passed){
                resolve("Congratulations!, You've Passed your exam.");
            }
            else{
                reject("Better Luck Next Time!, You've Failed");
            }
        },2000);
    }) 
}

async function getExamResults() {
    try{
        const result = await checkExamResults();
        console.log(result);
    }
    catch(error){
        console.error(error);
    }
}

getExamResults();