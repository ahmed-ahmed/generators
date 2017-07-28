'use strict';
describe('<<name>>', function() {
    let $stateParams,
        buildComponent;

    beforeEach(angular.mock.module('scifinder.<<camelCase name>>'));
    beforeEach(angular.mock.module('scifinder.testUtils'));

    beforeEach(inject(function(testUtils) {
        buildComponent = testUtils.buildDirective('sf<<capCase name>>');
    }));

    it('should work', () => {
        expect(true).toBe(true);
    });
});
