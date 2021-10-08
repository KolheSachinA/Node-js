//Encode and decode.
function decode(){
    let link = '"my test.asp?name=ståle&car=saab"';
    let link1=encodeURI(link)
    console.log(`Encoded URI: ${link1}`);
    let link2 = decodeURI(link1);
    console.log(`Decoded URI: ${link2}`);
}
decode();
