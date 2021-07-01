const Person = require('./Person')
const  Bag = require('./Bag')

 describe('Person Class', () => {

const person = new Person('Clarke')
const testPradaBag = new Bag(13)
 
  test('has a name', () => {
    expect(person.name).toBe('Clarke')
  })

  test('has a bag', () => {
		person.addBag(testPradaBag)
		expect(person.bags.length).toBe(1)
    })
 })