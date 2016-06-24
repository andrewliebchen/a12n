serve:
	bundle exec jekyll serve --watch

deploy:
	git checkout gh-pages
	git reset --hard master
	git push -f
	git checkout master
