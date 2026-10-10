// Optional external portfolio illustrations. Never fail the website build when the host is unavailable.
import fs from 'node:fs/promises';
const root='site/assets';
await fs.mkdir(root,{recursive:true});
const base='https://developpementlazzaro-cpu.github.io/lazzaro-castiglia-site/assets/';
const files=['hero.jpg','dining.jpg','dish1.jpg','dish2.jpg','dish3.jpg','experience.jpg'];
for(const file of files){
 try {
  const resp=await fetch(base+file,{signal:AbortSignal.timeout(8000)});
  if(!resp.ok || !(resp.headers.get('content-type')||'').includes('image/')) {console.log('Skipping missing image',file,resp.status);continue;}
  const data=Buffer.from(await resp.arrayBuffer());
  if(data.length<20000 || data.length>3000000 || data[0]!==0xff || data[1]!==0xd8){console.log('Skipping invalid image',file);continue;}
  await fs.writeFile(root+'/'+file,data);
 }catch(error){console.log('Skipping unavailable image',file,String(error));}
}
console.log('Optional image processing complete.');
