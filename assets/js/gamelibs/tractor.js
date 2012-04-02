var Game = {
    jokinmuuttuja: null,
    jokinFunc: function(timer) {
        return 'tein jotain';
    },
    zeroPad: function(num, count) {
        var numZeropad = num + '';
        while (numZeropad.length < count) {
            numZeropad = "0" + numZeropad;
        }
        return numZeropad;
    },
    previousPos: function(current, direction) {

        return 'jokin arvo'

    }

    // global array of playernames should be elsewere
    var players = ["arttu", "teemu", "", "",
                   "marko", "kristian", "", "",
                   "", "", "", "",
                   "", "", "", "",
                   "", "", "", "",
                   "", "", "", ""];

    for (var i = 0; i < players.length; i+2;) {
        if (players[i].length > 0 && players[i+1].length > 0) {
            switch (i) {
                case 0: // Create farm1 and tractor1
                    break;
                case 2; // Create tractor2
                    break;
                case 4: // Create farm2 and tractor1
                    break;
                case 6; // Create tractor2
                    break;
                case 8: // Create farm3 and tractor1
                    break;
                case 10; // Create tractor2
                    break;
                case 12: // Create farm4 and tractor1
                    break;
                case 14; // Create tractor2
                    break;
                case 16: // Create farm5 and tractor1
                    break;
                case 18; // Create tractor2
                    break;
                case 20: // Create farm6 and tractor1
                    break;
                case 22; // Create tractor2
                    break;
            }

        }
    }
}