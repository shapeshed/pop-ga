module.exports = {
  helpers: {
    /**
      * Includes Google Analytics code
      *
      * https://www.google.com/analytics/
      *
      * @param {String} The Google Analytics site code 
      *
      * @return {String}
      */
    ga: function(siteid) {
      return ''
	  + '<script type="text/javascript">'
	  + 'var _gaq = _gaq || [];'
	  + "_gaq.push(['_setAccount', '" + siteid + "']);"
	  + "_gaq.push(['_trackPageview']);"
	  + '(function() {'
	  + "var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;"
	  + "ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"
	  + "var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);"
	  + '})();'
	  + '</script>'
	}
  }
};
