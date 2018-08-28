lint-types:
	rm -rf ts-tmp/ && tsc --pretty --outDir ts-tmp -p jsconfig.json && rm -rf ts-tmp/