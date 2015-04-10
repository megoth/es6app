---
title: Setting up repository
short: Setup - repo
template: slide.jade
---

Now that we have all our tools available, navigate to where you want to put your repository, and run:

    git clone https://github.com/megoth/jsframework-skeleton
    cd jsframework-skeleton

You're now in the project. Next, run:

    npm install
    jspm install

This install all the dependencies that the application have. Now we can run our application:

    grunt

This makes the application available at [localhost:8282](http://localhost:8282). As it doesn't do anything yet, opening the page will be a sad sight... let's do something about that!