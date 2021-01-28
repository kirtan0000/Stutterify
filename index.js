module.exports = function stutterify(string, prob_stutter = 0.7, prob_length = 0.37) {
    var sent = "";
    var str = "";

    const stutter_word = (word, count) => {
        const stutter_str = Math.max(1, word.match(/[aiueo]/i));
        if (stutter_str.index) {
            const stutter_length = stutter_str.index;
            const stutter_part = word.substr(0, stutter_length);
            var result = "";
            for (var i = 0; i < count; i++) {
                result += stutter_part + "-";
            }
        } else {
            const stutter_part = word.substr(0, 2);
            var result = "";
            for (var i = 0; i < count; i++) {
                result += stutter_part + "-";
            }

        }
        result += word;
        return result;
    }

    string.split(" ")
        .forEach(item => {
            if (item.match(/[a-z]/i)) {
                if (Math.random() < prob_stutter) {
                    if (Math.random() < prob_length) str = stutter_word(item, 2) + " ";
                    else str = stutter_word(item, 1) + " ";
                    sent += str;
                } else {
                    if (item != string.split(" ")[string.length]) {
                        str = item + " ";
                    } else {
                        str = item;
                    }
                    sent += str;
                }
            } else {
                sent += item;
            }
        })

    return sent.replace(/\s*$/, "");;
};