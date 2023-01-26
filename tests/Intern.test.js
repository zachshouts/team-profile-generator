const {Intern} = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should return an intern object containing school', () => {
            const obj = new Intern('name', 1, 'email', 'school');

            expect(typeof obj.school).not.toMatch('undefined');
        })
    });
});