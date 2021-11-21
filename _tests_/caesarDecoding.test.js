const caesarD = require( "../Ciphers/Caesar/caesarDecoding" );

let text = `This is secret. Message about "_" symbol!`;
let notEngText = `русский алфавит`;
let sumbol = `-!=><()@#$%^&*?/":"1234567890`;
    
test( "should show correct decoding caesar", () => {
    expect( caesarD( text )).toBe( `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!` );
} ); 
    
test( "caesar must not encode non-english alphabet", () => {
    expect( caesarD( notEngText )).toBe( `русский алфавит` );
});
    
test("caesar should not encode characters", () => {
    expect (caesarD( sumbol )).toBe( `-!=><()@#$%^&*?/":"1234567890` );
});
