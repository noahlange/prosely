# Prosely
> Text editing for the twenty-first century

Prosely is a Markdown editor written in JavaScript and built with the Electron cross-platform application framework. It's powered by the [MirrorMark](http://musicbed.github.io/MirrorMark/) editor (MIT licensed) and the [WriteGood](https://github.com/btford/write-good) proofreading library (MIT licensed).

WriteGood lints your prose as you work, offering feedback from over a dozen style checks. MirrorMark gives you all the functionality you expect from a general purpose Markdown editor - formatting, live preview, etc.

## Installation

As this is software in its infancy, there aren't any pre-packaged distributions of Prosely; you'll have to build it manually via git and npm. If you don't have those installed already, get out of here and install those first. Note that you'll need to rebuild dependencies with `electron-rebuild`.

```bash
git clone https://github.com/noahlange/prosely.git
cd prosely
npm install
./node_modules/.bin/electron-rebuild
```

Once everything's put together, running Prosely is simple.
```bash
electron .
```

## Contributions
I'd be more than happy to work on this with other folks. Just start hacking away

## License

MIT