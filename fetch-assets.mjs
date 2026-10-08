// Download the six public, non-sensitive portfolio demo illustrations at build time.
// The generated static site includes the files and does not rely on the source VM at runtime.
import fs from 'node:fs/promises';
const root='site/assets';
await fs.mkdir(root,{recursive:true});
const base='https://toolbar-immigration-dam-area.trycloudflare.com/assets/';
const files=['hero.jpg','dining.jpg','dish1.jpg','dish2.jpg','dish3.jpg','experience.jpg'];
for(const file of files){
 const resp=await fetch(base+file,{signal:AbortSignal.timeout(25000)});
 if(!resp.ok || !(resp.headers.get('content-type')||'').includes('image/'))throw Error('Invalid image response '+file+' '+resp.status);
 const data=Buffer.from(await resp.arrayBuffer());
 if(data.length<20000 || data.length>3000000 || data[0]!==0xff || data[1]!==0xd8)throw Error('Invalid illustration '+file);
 await fs.writeFile(root+'/'+file,data);
 console.log('Bundled',file,data.length);
}
console.log('All demo illustrations bundled for standalone delivery.');
