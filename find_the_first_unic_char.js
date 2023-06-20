const array = "thils is aa strringg with onlyy wone Ze";

console.log(first_unic_char(array));


function first_unic_char(array)
{
    for (let i = 0; i < array.length; i ++)
        if (isNew(array[i], array))
            return array[i];
};


function isNew(character, array)
{
    let count = 0;

    for (let i = 0; i < array.length; i ++)
        if (array[i] === character)
            count ++;
    
    if (count === 1)
        return true;
    else
        return false;
};