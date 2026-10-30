// @ts-nocheck -- adapter runtime supplies the native fetch contract.
import handler from '@astrojs/cloudflare/entrypoints/server';
const HOST='dainampark.com';
export default {async fetch(request:Request,env:Record<string,unknown>,ctx:unknown):Promise<Response>{
 const url=new URL(request.url);const known=url.hostname===HOST||url.hostname==='www.dainampark.com';
 if(known&&(url.protocol==='http:'||url.hostname!==HOST)){url.protocol='https:';url.hostname=HOST;return Response.redirect(url.toString(),301);}
 const response=await handler.fetch(request,env,ctx);const headers=new Headers(response.headers);
 headers.set('Content-Security-Policy',"default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; frame-src https://www.google.com https://www.google.com.vn; connect-src 'self' https://www.google-analytics.com");
 headers.set('X-Content-Type-Options','nosniff');headers.set('X-Frame-Options','SAMEORIGIN');headers.set('Referrer-Policy','strict-origin-when-cross-origin');headers.set('Permissions-Policy','geolocation=(), microphone=(), camera=()');
 if(known&&url.protocol==='https:')headers.set('Strict-Transport-Security','max-age=63072000; includeSubDomains; preload');
 if(response.status===404)headers.set('X-Robots-Tag','noindex, follow');if(headers.get('Content-Type')?.includes('text/html'))headers.set('Cache-Control','no-store');
 return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
}};
