class AlarmClock {
   constructor() {
      this.alarmCollection = [],
         this.timerId = null
   }
   addClock(time, callback, id) {
      if (typeof id === 'undefined') {
         throw new Error('error text');
      }
      else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
         return console.error('The Alert already exist.');
      }
      return this.alarmCollection.push({ id, time, callback });
   }
   removeClock(id) {
      let inputArrLength = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
      let outputArrLength = this.alarmCollection.length;
      return outputArrLength < inputArrLength;
   }
   getCurrentFormattedTime() {
      let actualTime = new Date();
      let minutes = actualTime.getMinutes();
      let hours = actualTime.getHours();
      return hours + ':' + minutes;
   }
   start() {
      let checkClock = (clock) => {
         let alarm = this.getCurrentFormattedTime();
         if (clock.time === alarm) {
            return clock.callback();
         }
      }
      if (this.timerId === null) {
         this.timerId = setInterval(() => {
            this.alarmCollection.forEach(clock => checkClock(clock));
         });
      }
      return;
   }
   stop() {
      if (this.timerId !== null) {
         clearInterval(this.timerId);
         return this.timerId = null;
      }
   }
   printAlarms() {
      return this.alarmCollection.forEach(({ id, time }) => console.log(`${id} : ${time}`));
   }
   clearAlarms() {
      this.stop();
      return this.alarmCollection = [];
   }
}