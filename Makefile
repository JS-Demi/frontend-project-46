publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js	
	
install:
	npm ci

lint:
	npx eslint .

