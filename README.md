![Prosely](http://i.imgur.com/Ecskz94.png?1)

# Prosely
> Text editing for the twenty-first century

Prosely is a Markdown editor written in JavaScript and built with the Electron cross-platform application framework. It's powered by the [MirrorMark](http://musicbed.github.io/MirrorMark/) editor (MIT licensed) and the [WriteGood](https://github.com/btford/write-good) proofreading library (MIT licensed).

WriteGood lints your prose as you work, offering feedback from over a dozen style checks. MirrorMark gives you all the functionality you expect from a general purpose Markdown editor - formatting, live preview, etc.

## Installation

As this software is in its infancy, there aren't any pre-packaged distributions of Prosely; you'll have to build it manually via git and npm. If you don't have those installed already, install those first. Note that you may need to rebuild dependencies for electron with `electron-rebuild`.

```bash
git clone https://github.com/noahlange/prosely.git
cd prosely
npm install && bower install
```

Once everything's put together, running Prosely is simple.
```bash
electron .
```

## Contributions
I'd be more than happy to work on this with other folks. Just start hacking away!

## Related Packages

 - [Write-Good (as Promised)](https://github.com/noahlange/write-good-as-promised)
 - [Write-Good (as Promised) - DataList](https://github.com/noahlange/wgap-datalist)
 - [Write-Good (as Promised) - Flesch-Kincaid](https://github.com/noahlange/wgap-flesch-kincaid)

## License

MIT