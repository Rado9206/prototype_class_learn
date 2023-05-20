function Dog(name, age) {
	this.name = name
	this.age = age
}

Dog.prototype.sayHi = function () {
	console.log(`Cześć ${this.name}!`)
}

Dog.prototype.sayAge = function () {
	console.log(`Masz ${this.age} lat(a)`)
}

const dog01 = new Dog('Luna', 3)
const dog02 = new Dog('Trufel', 5)

dog01.sayHi()
dog01.sayAge()
dog02.sayHi()
dog02.sayAge()

console.log('================')

class Dog2 {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	sayHi() {
		console.log(`Cześć ${this.name}!`)
	}
	sayAge() {
		console.log(`Masz ${this.age} lat(a)`)
	}
}

const dog03 = new Dog('Luna', 3)
const dog04 = new Dog('Trufel', 5)

dog03.sayHi()
dog03.sayAge()
dog04.sayHi()
dog04.sayAge()
