const atbash = require( "./atbashEncoding" );
const caesarE = require( "./caesarEncoding" );
const caesarD = require( "./caesarDecoding" );
const r8E = require( "./rot8Encoding" );
const r8D = require( "./rot8Decoding" );

let text = `This is secret. Message about "_" symbol!`

describe( "should show correct coding", () => {
    
    test( "should show correct coding atbash", () => {
        expect(atbash( text )).toBe( `Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!` )
    } ); 
    test( "should show correct encoding caesar", () => {
        expect(caesarE( text )).toBe( `Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!` )
    } ); 
    test( "should show correct decoding caesar", () => {
        expect(caesarD( text )).toBe( `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!` )
    } ); 
    test( "should show correct encoding ROT-8", () => {
        expect(r8E( text )).toBe( `Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!`)
    } ); 
    test( "should show correct decoding ROT-8", () => {
        expect(r8D( text )).toBe( `Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!` )
    } ); 
} );

let notEngText = " русский алфавит ";

describe( "should not change non-english alphabet", () => {

    test("atbash must not encode non-english alphabet", () => {
        expect(atbash(notEngText)).toBe(" русский алфавит ");
    });
    test("atbash must not encode non-english alphabet", () => {
        expect(caesarE(notEngText)).toBe(" русский алфавит ");
    });
    test("atbash must not encode non-english alphabet", () => {
        expect(caesarD(notEngText)).toBe(" русский алфавит ");
    });
    test("atbash must not encode non-english alphabet", () => {
        expect(r8E(notEngText)).toBe(" русский алфавит ");
    });
    test("atbash must not encode non-english alphabet", () => {
        expect(r8D(notEngText)).toBe(" русский алфавит ");
    });
});

let sumbol = `-!=><()@#$%^&*?/":"1234567890`;

describe( "shouldn't change any characters", () => {

    test("atbash should not encode characters", () => {
        expect(atbash(sumbol)).toBe( `-!=><()@#$%^&*?/":"1234567890` )
    });
    test("atbash should not encode characters", () => {
        expect(caesarE(sumbol)).toBe( `-!=><()@#$%^&*?/":"1234567890` )
    });
    test("atbash should not encode characters", () => {
        expect(caesarD(sumbol)).toBe( `-!=><()@#$%^&*?/":"1234567890` )
    });
    test("atbash should not encode characters", () => {
        expect(r8E(sumbol)).toBe( `-!=><()@#$%^&*?/":"1234567890` )
    });
    test("atbash should not encode characters", () => {
        expect(r8D(sumbol)).toBe( `-!=><()@#$%^&*?/":"1234567890` )
    });
});


// let  text1 = `This is secret. Message about "_" symbol!`


// test("q", () => {
//     // const argumentsParsing = {cipher: '-A'};
// expect(atbash(text1)).toBe(`Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!`)

// })