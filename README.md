# html-pdf-linux

## The Repository

This repository ("`html-pdf-linux`") is an example of how to install and run the library [html-pdf](https://www.npmjs.com/package/html-pdf) on serverless (like `lambda` or `azure function`, or even `app service` and `Beanstalk`) with Docker.

As you mayknow, the `html-pdf` library is deprecated since it's dependency `phantomjs` is no longer being maintain, it will require you to install the phantomjs manually via package management like `brew` or `apt-get` base on your os, but with serverless, cloud provider not allow us to run command manually, hence there is no way to make it run on Linux-based serverless.

I came through discussion [stackoverflow](https://stackoverflow.com/questions/69610586/html-pdf-not-work-in-docker-to-create-pdf) and create this repo, incase you need a quick PoC

## Installation

Pull the repo to your local and the start docker desktop.
Build the image with

```
$ docker build -t html-pdf-linux .
```

Then run start a container with the image
```
$ docker run -dp 127.0.0.1:3000:3000 html-pdf-linux
```

The website should be serve via [localhost:3000](http://localhost:3000) 
