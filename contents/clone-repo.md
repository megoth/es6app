---
title: Cloning the skeleton repository
short: Git clone
template: slide.jade
---

Now that we have all our tools available, navigate to where you want to put your repository, and run:

    git clone https://github.com/megoth/jsframework-skeleton

This downloads all the files necessary for this workshop. The files we will focus are located in the ```src```-folder (most of them are empty; we'll write them as we go though this presentation).

Next, navigate to the project and run:

    npm install
    jspm install

The former installs all NPM-dependencies used for backend development, while the latter installs all jspm-dependencies used for front-end development.

With all of this setup done, we can now run our application by running the default Grunt task:

    grunt

This makes the application available at [localhost:8282](http://localhost:8282). As it doesn't do anything yet, opening the page will be a sad sight... let's do something about that!