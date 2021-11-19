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

let number = 55

test(" not a number ", () => {
    expect(atbash(number)).not.toBe('error')
})