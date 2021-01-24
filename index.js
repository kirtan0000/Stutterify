module.exports = function stutterify(string, prob_stutter = 0.7, prob_length = 0.37) {
    var sent = "";
    var str = "";

    const stutter_initial = (word, count) => {
        var first_char = word.substr(0, 1);
        var stutter_char = "";

        for (var i = 0; i < count; i++) 
            stutter_char += first_char + "-";

        return stutter_char + word;
    }

    string.split(" ").forEach(item => {

    if (item.match(/[a-z]/i)) {
        if (Math.random() < prob_stutter) {

            if (Math.random() < prob_length) {

                str = stutter_initial(item, 2) + " ";

            } else {

                str = stutter_initial(item, 1) + " ";

            }
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
    return sent.replace(/\s*$/,"");;
};
