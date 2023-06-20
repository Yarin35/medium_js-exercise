const sentence = "This is a sentences wich the objective is to have long words like hbfghoguhrbdghdj which isn't an existing word";

console.log(find_longest_word(sentence));


function find_longest_word(sentence)
{
    const words = sentence.split(' ');
    let index = 0;
    let len = 0;

    for (let i = 0; i < words.length; i ++) {
        if (len < words[i].length) {
            len = words[i].length;
            index = i;
        };
    };

    return words[index];
};