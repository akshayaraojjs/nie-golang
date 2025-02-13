async function fetchBalance() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const balance = Math.random() > 0.3 ? 1000 : 0;
            if(balance > 0){
                resolve("Account Balance: Rs. " + balance);
            }
            else{
                reject("Insufficient Balance, You can't withdraw amount.");
            }
        },2000);
    }) 
};

const withdrawMoney = async (amount) => {
    try{
        console.log("Checking account balance, please wait......");
        const balance = await fetchBalance();
        console.log(balance);
    }
    catch(error){
        console.error(error);
    }
}

withdrawMoney(500);