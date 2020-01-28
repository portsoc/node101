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

Install
-------

The unit tests (and some of the examples) make use of library modules that must be installed.  You can achieve this with a single command:

```bash
npm i
```

Running Examples
----------------

Examples are placed in the `examples` folder for you to investigate, to run the hello world example (`hw.js`) you could type:

```bash
cd examples
node hw
```


Running Tests
-------------

We continue to use QUnit to define tests that **you** should attempt to complete.

The difference now is that there is no browser – you can test everything from the command line :


Run the tests by typing:

  ```bash
  npm test
  ```

Inside `test.js` you will find helpful comments that tell you what the tests expect.
