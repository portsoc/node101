node101
=======
An intro to node.

Downloading
-----------
To download the code, either use git (the preferred option):

```bash
git clone https://github.com/portsoc/node101.git
cd node101
```

If at all possible, we recommend you use git to download code rather than zips of a repository.  This is prefereable because if the repo is updated, then syncing those changes requires just one command (`git pull`) and usually any merging can be done automatically.  Git is very powerful and we heartily encourages you to become familiar with it.


Alternatively you may download and unpack the [zip](https://github.com/portsoc/node101/archive/master.zip)
which on linux can be achieved using
```bash
wget https://github.com/portsoc/node101/archive/master.zip
unzip master.zip
cd node101
```

Running Examples
----------------

Examples are placed in the `examples` folder for you to investigate, to run the hello world example (`hw.js`) you could type:

```bash
cd examples/1-hello-world
node hw
```


Running Tests
-------------

These are unit tests that **you** should attempt to complete.
The difference with previous unit tests is that there is no browser – you can test everything from the command line by typing:

```bash
npm test
```
Inside `test.js` you will find helpful code that tells you what the tests expect.
