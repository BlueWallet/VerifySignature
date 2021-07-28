Verify bitcoin address signature online
=======================================

Why? Because none of the existing pages on the interwebs are good, for example https://tools.bitcoin.com/verify-message/
None of them could accept all the data via get parameters, and none of them were easily forkable to be hosted independently.
    
This implementation can accept get parameters, so it is linkable externally, and users could easily copy-paste one link to their counterparties to verify. 
This should be useful for people who do OTC and regularly do proof-of-funds before the transaction.

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

Built directory `verifysignature/` is ready to be hosted on the website.
Or adjust `basePath` in `next.config.js` if you want to host it in root.


License
-------

MIT
