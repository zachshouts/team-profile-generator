const {Engineer} = require('../lib/Engineer')

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an engineer object containing their github username', () => {
            const obj = new Engineer('name', 1, 'email', 'github');

            expect(typeof obj.github).not.toMatch('undefined');
            expect(typeof obj.github).toMatch('string');
        });
    });

    describe('getGithub', () => {
        it('should return the engineers github username', () => {
            const obj = new Engineer('name', 1, 'email', 'github');

            expect(typeof obj.getGithub()).toMatch('string');
        });
    });

    describe('getRole', () => {
        it('should return the role of the engineer', () => {
            const obj = new Engineer('name', 1, 'email', 'github');

            expect(obj.getRole()).toBe('Engineer');
        });
    });
});