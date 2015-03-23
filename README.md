##secure-notes

[![Build Status](https://travis-ci.org/pussinboots/secure-notes.svg?branch=master)](https://travis-ci.org/pussinboots/secure-notes)
[![Coverage Status](https://img.shields.io/coveralls/pussinboots/secure-notes.svg)](https://coveralls.io/r/pussinboots/secure-notes?branch=master)
[![Dependencies](https://david-dm.org/pussinboots/secure-notes.png)](https://david-dm.org/pussinboots/secure-notes)
[![Heroku](http://heroku-badge.heroku.com/?app=secure-notes)](https://secure-notes.herokuapp.com)
[![Gitter chat](https://badges.gitter.im/pussinboots/secure-notes.png)](https://gitter.im/pussinboots/secure-notes)

Live Demo
------------------

This is a example application that use [angularjs-crypto](https://github.com/pussinboots/angularjs-crypto) to achieve client side encryption. The data are stored in a mongodb but this data are encrypted and will be encrypted on the client side. That means on the server side only encrypted data are stored and so the backend doesn't know really what that data means.

It is a very simple application to demonstrate the use of the [angularjs-crypto](https://github.com/pussinboots/angularjs-crypto) modul to achieve client side encryption and decryption. 

Versions
-----------------

- 0.0.2 not implemented yet user based encryption/decryption key
- 0.0.1 storing of encrypted data and display of decrypted data
