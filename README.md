### [Generate site](http://docs.getpelican.com/en/3.6.3/quickstart.html#generate-your-site)

```
uv run pelican content
```

### [Preview site](http://docs.getpelican.com/en/3.6.3/quickstart.html#preview-your-site)

```
cd ~/projects/yoursite/output
uv run pelican -lr
```
Visit http://localhost:8000/

### [Manual publish to GitHub Pages](http://docs.getpelican.com/en/3.6.3/tips.html#project-pages)

Note: this isn't necessary as there's a post-commit hook that rebuilds.

```
$ uv run ghp-import output

$ git push origin gh-pages
```