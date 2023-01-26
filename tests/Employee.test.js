const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return an employee object containing name, id, and email', () => {
            const testObj = { name: 'name', id: 1, email: 'email' };
            const obj = new Employee('name', 1, 'email');

            expect(obj).toMatchObject(testObj);
        });
    });

    describe('getName', () => {
        it('should return the name of the employee', () => {
            const obj = new Employee('name', 1, 'email');

            expect(typeof obj.getName()).toMatch('string');
        });
    });

    describe('getId', () => {
        it('should return the id of the employee', () => {
            const obj = new Employee('name', 1, 'email');

            expect(typeof obj.getId()).toMatch('number');
        });
    });
    
    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const obj = new Employee('name', 1, 'email');

            expect(typeof obj.getEmail()).toMatch('string');
        });
    });
    
    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const obj = new Employee('name', 1, 'email');

            expect(obj.getRole()).toBe('Employee');
        });
    });
})