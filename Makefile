publish:
	npm publish --dry-run

gendiff:
	node bin/jsonDiffProgram.js	

install:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .


.PHONY: test
