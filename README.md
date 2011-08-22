# pop-ga

A [Google Analytics][1] plugin for [pop][2], a static site generator for [node.js][3]

## Installation

Install from npm

    npm install -g pop-ga

Then add it as a dependency to your pop site. In your \_config.json file add 

    , "require": ["pop-ga"]

Your \_config.json file might look something like this

    {  "url": "http://yoursite.com"
     , "title": "Your Site"
     , "permalink": "/:title"
     , "perPage": 10
     , "exclude": ["\\.swp"]
     , "require": ["pop-ga"]
     , "autoGenerate": [{"feed": "feed.xml", "rss": "feed.rss"}] }

## Usage

To use the plugin you need the Web Property ID for your site from Google Analytics. You get this from the Google Analytics web console. I'm assuming you know the score. 

Then add the following code to your jade template
    
    !{ga('UA-345678-90')}

Your template might look something like

    !!! 5
    html(lang="en")
      head
        title #{post.title}
        link(href="/stylesheets/screen.css", media="screen", rel="stylesheet", type="text/css")
        link(rel="alternate", type="application/rss+xml", title="RSS 2.0", href="/feed.rss")
        link(rel="alternate", type="application/atom+xml", title="Atom Feed", href="/feed.xml")
        !{ga('UA-345678-90')}
      body

The plugin will generate the default Google Analytics code for you. 

[1]: http://www.google.com/analytics/
[2]: http://popjs.com
[3]: http://nodejs.org
