# PiLight

PiLight is a ember based companion app for the piRGB-server (https://github.com/Abhorsen99/piRGB-server) application. PiLight provides a simple mobile friendly user interface for controlling your piRGB-server. PiLight is specifically designed to be ran in tandem with piRGB-server on a raspberry pi.
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd PiLight`
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* Install piRGB-server
  * Follow instructions to deploy the server (https://github.com/Abhorsen99/piRGB-server)
* Install hosting server (apache example)
  * `sudo apt-get install apache2 -y`
* Build and Deploy the app to the pi
  * `ember build --environment production`
  * copy contents of the dist folder to pi
  * move the contents to the hosted directory (/var/www/html)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
