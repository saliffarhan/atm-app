#! usr/bin/env node
import inquirer from "inquirer";
let myPin = 59290;
console.log(`My pin code is : ${myPin}`);
let myBalance = 50000;
let pinAns = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter your pin code: "
    }]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code");
    let operationChoice = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What do you want to do?",
            choices: ["withdraw", "checkBalance"],
        },
    ]);
    if (operationChoice.operation === "checkBalance") {
        console.log(` Your current balance is ${myBalance}`);
    }
    else if (operationChoice.operation === "withdraw") {
        let withdrawType = await inquirer.prompt([
            {
                name: "withdrawOption",
                message: "Please! Select one of the method of Withdraw",
                type: "list",
                choices: ["Manual Withdraw", "Fast Cash"],
            },
        ]);
        if (withdrawType.withdrawOption === "Manual Withdraw") {
            let selectAmount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Please!! Select your amount: ",
                },
            ]);
            if (selectAmount.amount > myBalance) {
                console.log(" Alert!! Insuffiecient Balance");
            }
            else {
                myBalance -= selectAmount.amount;
                console.log(`you remaining balance is ${myBalance}`);
            }
            ;
        }
        else if (withdrawType.withdrawOption === "Fast Cash") {
            let askFiXedAmount = await inquirer.prompt([
                {
                    name: "fixedAmount",
                    message: "Please! Select one one pakage of amount...",
                    type: "list",
                    choices: [1000, 5000, 10000, 15000, 20000],
                },
            ]);
            myBalance -= askFiXedAmount.fixedAmount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        ;
    }
    ;
}
else {
    console.log("Incorrect pin code...");
}
;
