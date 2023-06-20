const string = "hello world";

for (let i = 0; i < string.length; i ++) {
    if (isNew(string[i], string, i)) {
        calcul_percentage(string[i], string);
    };
};

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