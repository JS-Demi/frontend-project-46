publish:
	npm publish --dry-run

gendiff:
	node bin/jsonDiffProgram.js	

install:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .


.PHONY: test
