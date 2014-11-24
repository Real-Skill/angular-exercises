describe('TestError.service',function(){
  'use strict';

  beforeEach(module('exerciseApp'));

  describe('error',function(){
      describe('when user NOT have id',function(){
        it('should throw error',inject(function(TestErrorService){
          expect(angular.bind(TestErrorService,TestErrorService.error,{})).toThrow('user must have id')
        }));
      });
    describe('when user have id',function(){
      it('should ',inject(function(TestErrorService){
        expect(TestErrorService.error({id:123})).toEqual({id:123})
      }));
    });
  });
});