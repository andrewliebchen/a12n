gh-pages:
	git checkout gh-pages
	git rebase master
	git push
	git co master
	@echo "GH pages updated!"
