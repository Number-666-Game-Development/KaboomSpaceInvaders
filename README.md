# Kaboom!

## Introduction

What is Kaboom.js? you may ask. Kaboom is a relatively new technology in the world of web development. Whilst there have been many libraries similar Kaboom offers a far more simplistic and easier to understand approach from the likes of Phaser3 or other libraries. 

Kaboom.js lets you focus on the game you are building. A common complaints with libraries like Phaser3 is that some of the code you had to write seemed nonsensical Kaboom.js addresses that issue providing a much simpler syntax, where the complexity of loading files, and other behaviours, is handled behind the scenes by Node. 

As someone working with JS daily this is an exciting technology to play with, You can quickly get started with the Replit on the Kaboom.js docs, however, I noticed there are not many resources showing you how to set up a project locally in the Text Editor you know and love, with many creators focusing on Replit to use it as a means of teaching absolute beginners to code. 

This template is to help those of you who make projects regularly, and want to use VSCode or any other editior a simple way to initialise a Kaboom.js project.

## How does it work?

First of all you need a parcel-bundler. In this example I have used Parcel, but you can switch this out for whatever preference you like. Secondly, you need Node installed, Node will be serving the "game", you can simply think of this as a Node project in itself, whilst we have our index.html entry point, you may notice we are not loading JS as a vanilla script, we are loading it as a module, this is why we use the .mjs extension. 

## Quick Start

To quickly get started with this template run the following commands from the root directory.

<pre>
                                <code>yarn install</code>
                                <code>yarn start:dev</code>
</pre>

This will run the parcel bundler and create a distribution folder. To build the application for production you can simply run: <code>yarn build</code>.

The game will be served on port: <code>3000</code> by default, this can be changed in the package.json. You will know if this started successfully from the green build messgae in the terminal, and the grid appearing when you navigate to <code>localhost:3000</code>

## Note

To use images with Kaboom.js these must be hosted via a URL. As a local solution to this I have included a basic Node server, when running <code>yarn start-dev</code> both the static server and the game server will run in parallel, this means you can access your images folder at <code>localhost:3001</code> allowing you to host your static assets locally.

Please read the package.json for a list of commands, some of these may be out of date with later versions of the README. 