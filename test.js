var _StringPrototypes   = require("./").apply(global)
,   test                = require("tape")
;

test('String Prototipes', function (assert) {
    var s;
    
    assert.plan(9);
  
    assert.strictEquals('123'.repeat(3)             ,   '123123123');
  
    s='\t\n 123 \n\t\t\r'
    assert.strictEquals(s.trim()                    ,   '123');
    
    s='from -----> to'
    
    assert.strictEquals(s.startsWith    ('from')    ,   true);  
    assert.strictEquals(s.endsWith      ('to')      ,   true);  
    assert.strictEquals(s.includes      ('----->')  ,   true);  
    
    s='file.com'
    assert.strictEquals(s.subStr        (-4)        , '.com'    );  
    assert.strictEquals(s.subStr        (-3,-1)     , '.'       );  
    assert.strictEquals(s.subStr        (-4, 1)     , '.'       );  
    assert.strictEquals(s.subStr        ( 4,-4)     , 'file'    );  
});