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
}