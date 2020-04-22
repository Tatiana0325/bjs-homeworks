class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, func, id) {
        if (id == undefined) { 
            console.error('id не передан!');
        } else if(this.alarmCollection.find(arg => (arg.id == id)) != undefined) {
                console.error('id уже существует!');
            } else {        
                this.alarmCollection.push({
                id: id,
                time: time,
                callback: func
                });
            }
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
        function checkClock(bell, time) {
            if (time == bell.time) {
                return bell.callback();
            }
        };

        this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element, this.getCurrentFormattedTime())), 500);
    }

    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length} `)
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
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