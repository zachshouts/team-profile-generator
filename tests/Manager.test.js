const {Manager} = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should return a manager object containing an office number', () => {
            const obj = new Manager('name', 1, 'email', 38);

            expect(typeof obj.officeNumber).not.toMatch('undefined');
            expect(typeof obj.officeNumber).toMatch('number');
        });
    });

    describe('getRole', () => {
        it('should return "Manager"', () => {
            const obj = new Manager('name', 1, 'email', 38);

            expect(obj.getRole()).toMatch('Manager');
        })
    })
});