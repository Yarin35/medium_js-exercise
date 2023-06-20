const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readl.question("Enter a string: ", (string) => {
    if (string) {
        for (let i = 0; i < string.length; i ++) {
            if (isNew(string[i], string, i)) {
                calcul_percentage(string[i], string);
            };
        };
        readl.close();
    } else
        readl.close();
});



function isNew(char, string, index)
{
    index --;
    for (let i = index; i >= 0; i --)
        if (string[i] === char)
            return false;
    return true;
};

function calcul_percentage(char, string)
{
    let count = 0;

    for (let i = 0; i < string.length; i ++)
        if (string[i] === char)
            count ++;

    let percentage = ((count / string.length) * 100);
    console.log (`[${char}]: ${percentage.toFixed(2)}%`);
};