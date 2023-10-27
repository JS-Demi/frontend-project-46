publish:
	npm publish --dry-run

gendiff:
	node bin/jsonDiffProgram.js	
	
install:
	npm ci

lint:
	npx eslint .

