module.exports = function stutterify(string) {
    var sent = "";
    var str = "";

    string.split(" ").forEach(item => {

        if (Math.random() < 0.73) {

            str = item.substr(0, 1).toUpperCase() + "-" + item.substr(0, 1).toUpperCase() + item.substr(1, item.length) + " ";
            sent += str;

        } else {

            if (item != string.split(",")[string.length]) {

                str = item + " ";

            } else {

                str = item;


            }
            sent += str;


        }



    })
    return sent;
};