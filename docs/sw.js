if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,f)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let d={};const n=e=>c(e,a),r={module:{uri:a},exports:d,require:n};s[a]=Promise.all(i.map((e=>r[e]||n(e)))).then((e=>(f(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ticket-manage"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.dc22b871.js",revision:"5565f5d7d0b44d0577de72d2b47f0d00"},{url:"assets/ClosePopup.e5b34b01.js",revision:"363e51448ccdf8a387e48bd0ec1acdb5"},{url:"assets/ErrorNotFound.84ae3f38.js",revision:"2896bce5802c1783b59c1ce660a932f0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.17d4c5b5.css",revision:"293e7b35ca59d1f976f7cc4250e85aa2"},{url:"assets/index.dc2a14a0.js",revision:"fe43d1308db2989f4db227b78b96370e"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.92417308.js",revision:"af88842f03d8e7ddfd8f3f232509d98a"},{url:"assets/print-ticket.09b1bad9.js",revision:"2601961fbb03c523b714a47cf487ebc1"},{url:"assets/PrintTicket.73c407eb.js",revision:"40808a03d91d487d90c582618ea748cf"},{url:"assets/QLayout.db5da894.js",revision:"1d30b9e464760ce58fa5fe4905369d0b"},{url:"assets/Ticket-a5.0c48036e.css",revision:"cb99b489c9dfcc5066cdce1d25897d77"},{url:"assets/ticket-a5.435488f8.js",revision:"c867354881eaae89c6d6cc6331cf2870"},{url:"assets/Ticket-a5.b2fe987c.js",revision:"0727f39072fc6dfc683d339507fc113d"},{url:"assets/ticket-a5.ff910d5c.css",revision:"eb0e9c5c54250e23f18d65205afe6c3f"},{url:"assets/tools.2cce9e3a.js",revision:"d2bc3e8f907690d8fef99a64f75a882c"},{url:"assets/tools.ba666e0c.css",revision:"c56d8ebd18840a5ef861ab8e6fa928dc"},{url:"assets/use-dark.2d0a12c7.js",revision:"259b007641a3008b3aa999691b371727"},{url:"assets/write-ticket.cd8d9407.js",revision:"83c1392a831ab0f4d5f540a69a6542ac"},{url:"assets/WriteTicket.62b0a30b.js",revision:"8f42871e028fb6df1f72d9f0f350c6b0"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"b07fd6612a0e36d053258cad13993c54"},{url:"manifest.json",revision:"3a4a48c85e20668d367cb341dbde6313"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
