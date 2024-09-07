class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.result = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        console.log('min: '+ this.min + ' max: ' + this.max);
    }

     guess() {  //Возвращает число, которое является предположением
        this.result = Math.round(this.max - (this.max - this.min) / 2);
        return this.result;
    }

    lower() {   //Вызывается, если предположенное число оказалось больше загаданного
        this.max = this.result;
        this.guess();
    }

    greater() {  //Вызывается, если предположенное число оказалось меньше загаданного
        this.min = this.result;
        this.guess();
    }
}

module.exports = GuessingGame;
