angular.module('trackingTheDebtAppApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('404.html',
    "<!doctype html> <html lang=\"en\"> <head> <meta charset=\"utf-8\"> <title>Page Not Found :(</title> <style>::-moz-selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      ::selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      html {\n" +
    "        padding: 30px 10px;\n" +
    "        font-size: 20px;\n" +
    "        line-height: 1.4;\n" +
    "        color: #737373;\n" +
    "        background: #f0f0f0;\n" +
    "        -webkit-text-size-adjust: 100%;\n" +
    "        -ms-text-size-adjust: 100%;\n" +
    "      }\n" +
    "\n" +
    "      html,\n" +
    "      input {\n" +
    "        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
    "      }\n" +
    "\n" +
    "      body {\n" +
    "        max-width: 500px;\n" +
    "        padding: 30px 20px 50px;\n" +
    "        border: 1px solid #b3b3b3;\n" +
    "        border-radius: 4px;\n" +
    "        margin: 0 auto;\n" +
    "        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n" +
    "        background: #fcfcfc;\n" +
    "      }\n" +
    "\n" +
    "      h1 {\n" +
    "        margin: 0 10px;\n" +
    "        font-size: 50px;\n" +
    "        text-align: center;\n" +
    "      }\n" +
    "\n" +
    "      h1 span {\n" +
    "        color: #bbb;\n" +
    "      }\n" +
    "\n" +
    "      h3 {\n" +
    "        margin: 1.5em 0 0.5em;\n" +
    "      }\n" +
    "\n" +
    "      p {\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      ul {\n" +
    "        padding: 0 0 0 40px;\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      .container {\n" +
    "        max-width: 380px;\n" +
    "        margin: 0 auto;\n" +
    "      }\n" +
    "\n" +
    "      /* google search */\n" +
    "\n" +
    "      #goog-fixurl ul {\n" +
    "        list-style: none;\n" +
    "        padding: 0;\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-fixurl form {\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt,\n" +
    "      #goog-wm-sb {\n" +
    "        border: 1px solid #bbb;\n" +
    "        font-size: 16px;\n" +
    "        line-height: normal;\n" +
    "        vertical-align: top;\n" +
    "        color: #444;\n" +
    "        border-radius: 2px;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt {\n" +
    "        width: 220px;\n" +
    "        height: 20px;\n" +
    "        padding: 5px;\n" +
    "        margin: 5px 10px 0 0;\n" +
    "        box-shadow: inset 0 1px 1px #ccc;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb {\n" +
    "        display: inline-block;\n" +
    "        height: 32px;\n" +
    "        padding: 0 10px;\n" +
    "        margin: 5px 0 0;\n" +
    "        white-space: nowrap;\n" +
    "        cursor: pointer;\n" +
    "        background-color: #f5f5f5;\n" +
    "        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        -webkit-appearance: none;\n" +
    "        -moz-appearance: none;\n" +
    "        appearance: none;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb:hover,\n" +
    "      #goog-wm-sb:focus {\n" +
    "        border-color: #aaa;\n" +
    "        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n" +
    "        background-color: #f8f8f8;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt:hover,\n" +
    "      #goog-wm-qt:focus {\n" +
    "        border-color: #105cb6;\n" +
    "        outline: 0;\n" +
    "        color: #222;\n" +
    "      }\n" +
    "\n" +
    "      input::-moz-focus-inner {\n" +
    "        padding: 0;\n" +
    "        border: 0;\n" +
    "      }</style> </head> <body> <div class=\"container\"> <h1>Not found <span>:(</span></h1> <p>Sorry, but the page you were trying to view does not exist.</p> <p>It looks like this was the result of either:</p> <ul> <li>a mistyped address</li> <li>an out-of-date link</li> </ul> <script>var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;</script> <script src=\"//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script> </div> </body> </html>"
  );


  $templateCache.put('index.html',
    "<!doctype html> <html ng-app=\"trackingTheDebtApp\"> <head> <meta charset=\"utf-8\"> <!-- TODO: Turn title into a variable so that individual pages are loaded with the correct names. --> <title>Tracking the Debt | {{page}}</title> <meta name=\"description\" content=\"\"> <meta name=\"viewport\" content=\"width=device-width\"> <!-- Place favicon.ico and apple-touch-icon.png in the root directory --> <!-- build:css(.) styles/vendor.css --> <!-- bower:css --> <link rel=\"stylesheet\" href=\"bower_components/bootstrap/dist/css/bootstrap.css\"> <!-- endbower --> <!-- endbuild --> <!-- build:css(.tmp) styles/main.css --> <link rel=\"stylesheet\" href=\"styles/main.css\"> <!-- endbuild --> </head> <!-- <body ng-app=\"trackingTheDebtApp\"> --> <body> <!--[if lte IE 8]>\n" +
    "      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "    <![endif]--> <!-- Add your site or application content here --> <div class=\"header\"> <div class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"container\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> <a class=\"navbar-brand\" href=\"#/\">Tracking the Debt</a> </div> <div class=\"collapse navbar-collapse\" id=\"js-navbar-collapse\"> <ul class=\"nav navbar-nav\"> <li class=\"active\"><a href=\"#/\">Home</a></li> <li><a ng-href=\"#/about\">About</a></li> <li><a ng-href=\"#/contact\">Contact</a></li> </ul> </div> </div> </div> </div> <div class=\"container\"> <!-- This is where the pages are loaded into the template. --> <div ng-view=\"\"></div> </div> <div class=\"footer\"> <div class=\"container\"> <p>&#169; Michael Coniaris Awesomeness</p> </div> </div> <!-- Google Analytics: change UA-XXXXX-X to be your site's ID --> <script>!function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){\n" +
    "       (A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),\n" +
    "       r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)\n" +
    "       }(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n" +
    "\n" +
    "       ga('create', 'UA-XXXXX-X');\n" +
    "       ga('send', 'pageview');</script> <!-- build:js(.) scripts/vendor.js --> <!-- bower:js --> <script src=\"bower_components/jquery/dist/jquery.js\"></script> <script src=\"bower_components/angular/angular.js\"></script> <script src=\"bower_components/bootstrap/dist/js/bootstrap.js\"></script> <script src=\"bower_components/angular-animate/angular-animate.js\"></script> <script src=\"bower_components/angular-cookies/angular-cookies.js\"></script> <script src=\"bower_components/angular-resource/angular-resource.js\"></script> <script src=\"bower_components/angular-route/angular-route.js\"></script> <script src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script> <script src=\"bower_components/angular-touch/angular-touch.js\"></script> <script src=\"bower_components/angular-bootstrap/ui-bootstrap-tpls.js\"></script> <!-- endbower --> <!-- endbuild --> <!-- Dygraph code --> <script src=\"bower_components/dygraphs/dygraph-combined.js\"></script> <!-- End Dygraph code --> <!-- build:js({.tmp,app}) scripts/scripts.js --> <script src=\"scripts/app.js\"></script> <script src=\"scripts/controllers/main.js\"></script> <!-- endbuild --> </body> </html>"
  );

}]);
