class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your fullname is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    addScore(scores) {
        this.scores.push(scores);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b });
        return sum / this.scores.length;
    }
}


let firstStudent = new Student("Debabrata", "Das");
let secondStudent = new Student("Ram", "Das");