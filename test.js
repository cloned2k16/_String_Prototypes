var _StringPrototypes   = require("./")
,   test                = require("tape")
;

test('String Prototipes', function (assert) {
    var s;
    
    assert.plan(5);
  
    assert.strictEquals('123'.repeat(3)             ,   '123123123');
  
    s='\t\n 123 \n\t\t\r'
    assert.strictEquals(s.trim()                    ,   '123');
    
    s='from -----> to'
    
    assert.strictEquals(s.startsWith    ('from')    ,   true);  
    assert.strictEquals(s.endsWith      ('to')      ,   true);  
    assert.strictEquals(s.includes      ('----->')  ,   true);  
    
});