const array = [25, 0, 25, 84, 2];
const target = 2;

console.log(array_finder(array, target));

function array_finder(array, target)
{
    for (let i = 0; i < array.length; i ++)
        if (array[i] === target)
            return i;
}