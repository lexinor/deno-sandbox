const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8');

const data = await Deno.readFile('toto.txt');

console.log(decoder.decode(data));

const txt = encoder.encode("Hello Again mamen");
await Deno.writeFile('readme.txt', txt);

await Deno.rename('readme.txt', "deleteme.txt");
await Deno.remove("deleteme.txt");

const file = await Deno.readTextFile('toto.txt')
console.log(file)

// We can also simply use readTextFile when reading text file to avoid using Decoder & Encoder
const file = await Deno.readTextFile('toto.txt')
console.log(file)