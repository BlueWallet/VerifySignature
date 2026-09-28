Verify bitcoin address signature online
=======================================

Why? Because none of the existing pages on the interwebs are good. None of them could accept all the data via get parameters, 
and none of them were easily forkable to be hosted independently.
    
This implementation can accept get parameters, so it is linkable externally, and users could easily copy-paste one link to their counterparties to verify. 
This should be useful for people who do OTC and regularly do proof-of-funds before the transaction.

Try it
------

* hosted on https://bluewallet.github.io/VerifySignature
* or try with get parameters: https://bluewallet.github.io/VerifySignature?a=1HvaxYmChk9nQUZx888a6hc7E8KnKP98ic&m=test&s=HCfgnEo8RNYTgcOXafAf11BQQ5LXSvlss0AbnezENbFJQzRl0dJRGOfYbOrOPkb2iPdj21Cty5G4paevOks%2FpJ4%3D
* ...or short it https://bit.ly/3Gm85si

Built with
----------

* Next.js
* Bitcoinjs
* Typescript
* Blockstream API (address balance)
* ..compiles into static html files so it can run completely offline

![image](https://user-images.githubusercontent.com/1913337/127367603-0bff2674-07f0-4a4f-846d-b3a6fc7860db.png)


Build it yourself
-----------------

```js
npm i
npm run export
```

And it is ready to be hosted on the website (should be served from `/VerifySignature/` path, i.e. `http://localhost:3000/VerifySignature`).
Use `npm run dev` for development.

License
-------

MIT
The fix is to authorize the GitHub integration for the repository you actually want to modify. scc/slash is owned by someone else, so you cannot grant yourself push access there.
For BigKain, do this:
Open your GitHub account → Settings
Go to Applications → Installed GitHub Apps
Find the ChatGPT/Codex GitHub integration.
Choose Configure.
Under Repository access, select Only select repositories.
Add:
Bigkain30/Bigkain30
and any other BigKain repo you actually want modified.
Make sure the app has Contents: Read and write.
For workflows, enable Actions/Workflows write access if those permissions are available.
Save/authorize the changes.
Return here and I can test the connection again.
Important: the scc/slash test cannot be turned green from your side unless the scc owner grants your GitHub account/app write access.
For BigKain, the real green test is:
Repository visible → push permission → create test branch → real commit → CI passes.
