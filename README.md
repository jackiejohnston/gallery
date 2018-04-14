git # Gallery
This is my personal website built with [Jekyll](https://jekyllrb.com/).

You can view it on GitHub Pages at: [http://www.jackiejohnston.us](http://www.jackiejohnston.us)

## Requirements

 - [Ruby v1.9.3 or above](https://www.ruby-lang.org/en/downloads/)
 - [RubyGems](https://rubygems.org/pages/download)
 - Linux, Unix, or Mac OS X

## Usage

Run the following commands in your console:
```
$  git clone git@github.com:jackiejohnston/gallery.git
$  cd gallery
$  bundle install
```

For development, run:
```
$  jekyll liveserve
```

then navigate to `http://localhost:4000/` in your browser.

To create a build for production, run:
```
$  jekyll build
```
Then upload the contents of the `_site` directory to your webhost.

The command to do this on GitHub pages is:
```
$  git subtree push --prefix _site origin gh-pages
```