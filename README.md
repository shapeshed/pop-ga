# pop-ga

A Google Analytics plugin for [pop][1], a static site generator for [node.js][2]

## Installation

Install from npm

    npm install -g pop-ga

Then add it as a dependency to your pop site. In you \_config file add 

    , "require": ["pop-ga"]

Your \_config file might look something like this

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

[1]: http://popjs.com
[2]: http://nodejs.org
