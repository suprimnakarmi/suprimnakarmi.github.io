# Suprim Nakarmi - personal academic website

Source for <https://suprimnakarmi.github.io>, built with Jekyll using the
[Academic Pages](https://github.com/academicpages/academicpages.github.io) template
(a fork of Minimal Mistakes).

## Where to edit things

| What | File |
| --- | --- |
| Name, bio, location, email, social links, site title | `_config.yml` (the `author:` block) |
| Home page text (news, experience, education, teaching, awards, projects, skills) | `_pages/about.md` |
| Top menu links | `_data/navigation.yml` |
| One publication | `_publications/*.md` (one file per paper) |
| Profile photo | `images/profile.png` (replace it, keep the same file name) |
| Favicons | `images/favicon*`, `images/apple-touch-icon-180x180.png` |

### Adding a publication

Copy any file in `_publications/`, rename it, and edit the front matter:
`title`, `category` (`under_review`, `conferences`, `journals`, or `books`),
`date`, `venue`, `citation`, and optional `paperurl`, `videourl`, `codeurl`.
The home page and `/publications/` pick it up automatically.

### Adding news

Add a line at the top of the **News** section in `_pages/about.md`, for example:

```
**[2026.09]** Short sentence about the news.
```

## Run locally (optional)

```bash
bundle install
bundle exec jekyll serve -l -H localhost
# open http://localhost:4000
```

Restart the server after editing `_config.yml`.

## Deploy

Push this repository to GitHub as `suprimnakarmi.github.io`, then in
**Settings > Pages** choose **Deploy from a branch**, branch `main` (or `master`), folder `/ (root)`.

## License

Template code is MIT licensed (see `LICENSE`).
