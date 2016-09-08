#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Ryan Gladstone'
SITENAME = u'Ryan Gladstone'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True




# Specify theme

THEME = "themes/middle"

# THEME-SPECIFIC VARIABLES
GITHUB_USERNAME = "ryangladstone"
TWITTER_USERNAME = "ryangladstone"
SHOW_ARCHIVES = True
GOOGLE_ANALYTICS = "UA-1324463-15"

# Plugins

#PLUGIN_PATH = '/home/terri/pelican/pelican-plugins'
#PLUGINS = ['latex', 'neighbors', 'summary']

# Only use LaTeX for selected articles

LATEX = 'article'