class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.id;
    };

    addClock(time, func, id) {
        if (id == undefined) { 
            throw new Error ('id не передан!');
        };

        if(this.alarmCollection.find(arg => (arg.id == id)) != undefined) {
            throw new Error ('id уже существует!');
        };
        
        this.alarmCollection.push({
            id: id,
            time: time,
            callback: func
        });
    };

    removeClock (id) {
        let result = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter(alarm => (alarm.id != id));

        return ((this.alarmCollection.length == result.length)? false : true);
    };

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    };

    start() {
        const checkClock = (bell) => {
            if (bell.time == this.getCurrentFormattedTime()) {
                bell.callback();
            }
        }

        if (this.id == undefined) {
            this.id = setInterval(() => {
                this.alarmCollection.forEach(element => checkClock(element)); 
            }, 500);
        };
    };

    stop() {
        if (this.id != undefined) {
            clearInterval(this.id);
            this.id = undefined;
        }  
    };

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length} `)
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
}

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock('21:00', () => console.log('Скоро спать'), 1);

    phoneAlarm.addClock('21:01', () => {console.log('Пора готовиться ко сну!'); phoneAlarm.removeClock(2)}, 2);

    phoneAlarm.addClock('21:01', () => console.log('Иди умываться!'));

    phoneAlarm.addClock('21:02', () => {
        console.log('Иди спать, завтра рано работать!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.addClock('21:05', () => console.log('Иди спать, завтра рано на работу!'), 1);

    phoneAlarm.printAlarms();

    phoneAlarm.start();
};