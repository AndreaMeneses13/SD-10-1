export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    
    returnAge() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();
        
        let age = currentYear - this.year;
        
        if (currentMonth < this.month || (currentMonth === this.month && currentDay < this.day)) {
            age--;
        }
        
        return `${this.name} tiene ${age} hoy!`;
    }
}