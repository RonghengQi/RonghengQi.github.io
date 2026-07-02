# Personal Academic Homepage

This repository contains a personal academic homepage based on the Academic Pages Jekyll template.

## Main Files To Edit

- `_config.yml`: site title, URL, repository, author profile, social links, and SEO settings.
- `_pages/about.md`: homepage biography, research interests, news, selected work, and contact.
- `_pages/research.md`: research themes, current projects, and methods.
- `_pages/cv.md`: Markdown CV.
- `_publications/`: one Markdown file per publication.
- `_portfolio/`: research projects, software, datasets, or other academic outputs.
- `_talks/`: talks, posters, seminars, and conference presentations.
- `_teaching/`: teaching, TA work, workshops, or mentoring.
- `images/profile.png`: sidebar profile image.

See `GETTING_STARTED_CN.md` for a Chinese setup guide.

## Local Preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

Open `http://localhost:4000`.

## GitHub Pages Deployment

Create a public repository named `RonghengQi.github.io`, update `_config.yml` if needed, and push these files to the repository. GitHub Pages will build and publish the site at:

```text
https://ronghengqi.github.io
```
