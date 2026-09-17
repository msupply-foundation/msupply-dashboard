import { chromium } from 'playwright-core';
const BASE='http://localhost:3001', UID='1e9ae057-1fe4-45a5-9f04-372b509f4f5d';
const errors=[];
const browser=await chromium.launch({channel:'chrome'});
const ctx=await browser.newContext({viewport:{width:1700,height:1000},acceptDownloads:true,bypassCSP:true});
await ctx.clearCookies();
const page=await ctx.newPage();
page.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE: '+m.text().slice(0,180));});
page.on('pageerror',e=>errors.push('PAGEERROR: '+e.message.slice(0,180)));
// hard-bypass cache
await page.route('**/module.js*', r => r.continue({ headers: {...r.request().headers(), 'cache-control':'no-cache'} }));

await page.goto(`${BASE}/d/${UID}?orgId=1&editPanel=1`,{waitUntil:'networkidle'});
await page.waitForTimeout(8000);
const pane=await page.locator('body').innerText();
for (const s of ['Standard options','Value mappings','Thresholds','Column width','Cell display mode','Export button title'])
  console.log(`OPTION "${s}":`, pane.includes(s));

await page.goto(`${BASE}/d/${UID}?orgId=1`,{waitUntil:'networkidle'});
await page.waitForTimeout(6000);
const btn=page.locator('button',{hasText:'Export to Excel AR'});
let filename='NO DOWNLOAD';
if(await btn.count()>0){
  const [dl]=await Promise.all([page.waitForEvent('download',{timeout:25000}).catch(()=>null), btn.first().click()]);
  if(dl){filename=dl.suggestedFilename();await dl.saveAs('/tmp/exported2.xlsx');}
}
console.log('DOWNLOAD:', filename);
await page.screenshot({path:'/tmp/panel_opts.png'});
console.log('JS_ERRORS:', errors.length?JSON.stringify(errors.slice(0,4),null,1):'none');
await browser.close();
