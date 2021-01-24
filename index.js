module.exports = function stutterify(string) {
    var sent = "";
    var str = "";

    string.split(" ").forEach(item => {

    if(item.match(/[a-z]/i)) {
        if (Math.random() < 0.7) {

            if (Math.random() < 0.37) {

                str = item.substr(0, 1).toUpperCase() + "-" + item.substr(0, 1).toUpperCase() + "-" + item.substr(0, 1).toUpperCase() + item.substr(1, item.length) + " ";

            } else {
                str = item.substr(0, 1).toUpperCase() + "-" + item.substr(0, 1).toUpperCase() + item.substr(1, item.length) + " ";

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