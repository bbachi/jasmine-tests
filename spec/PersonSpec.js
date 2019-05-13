var personCustomValidators = {
        toBeOlderThan: function(){
            return {
                compare: function(actualAge, expectAge) {
                    var result = {pass:false,message:''};
                    if (actualAge > expectAge){
                        result.pass = true;
                        result.message = "test is passed"
                    } else {
                        result.pass = false;
                        result.message = "test fails"
                    }
                    return result;
                }
            }
        },
        toBeFirstNameEqualTo: function() {
            return {
                compare: function(actual, expected) {
                    var result = {pass:false,message:''};
                    var firstName = actual.split(' ')[0];
                    if (firstName == expected){
                        result.pass = true;
                        result.message = "test is passed"
                    } else {
                        result.pass = false;
                        result.message = "test fails"
                    }
                    return result;
                }
            }
        },
        toBeLastNameEqualTo: function() {
            return {
                compare: function(actual, expected) {
                    var result = {pass:false,message:''};
                    var firstName = actual.split(' ')[1];
                    if (firstName == expected){
                        result.pass = true;
                        result.message = "test is passed"
                    } else {
                        result.pass = false;
                        result.message = "test fails"
                    }
                    return result;
                }
            }
        }
}

describe('Calculator', function(){
    var person = require('../src/person');

    beforeEach(function(){
        jasmine.addMatchers(personCustomValidators);
    })

    it('Should match first name', function(){
        person.setName("first last");

        var result = person.getName();

        expect(result).toBeFirstNameEqualTo("first");
    })

    it('Should match last name', function(){
        person.setName("first last");

        var result = person.getName();

        expect(result).toBeLastNameEqualTo("last");
    })

    it('Should match age', function(){
        person.setAge(106);

        var result = person.getAge();

        expect(result).toBe(106);
    })

    it('should older than 100', function() {
        person.setAge(106);

        var result = person.getAge();

        expect(result).toBeOlderThan(100);
    })
})