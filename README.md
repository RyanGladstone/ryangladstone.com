### [Generate site](http://docs.getpelican.com/en/3.6.3/quickstart.html#generate-your-site)

```
pelican content
```

### [Preview site](http://docs.getpelican.com/en/3.6.3/quickstart.html#preview-your-site)

```
cd ~/projects/yoursite/output
python -m pelican.server
```
Visit http://localhost:8000/

### [Publish to GitHub pages](http://docs.getpelican.com/en/3.6.3/tips.html#project-pages)


```
$ ghp-import output

$ git push origin gh-pages
```