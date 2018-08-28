## Steps to reproduce

1. Clone this repo
2. Open it in VS Code "Version 1.26.1 (1.26.1)"
3. Ensure `"javascript.implicitProjectConfig.checkJs": true` is in your VS Code user settings.
4. Open index.js and hover the param variable of the methods. It's recognized as "any" type, instead of what's in the type def.
5. Change the returned value of `someOtherMethod` to be a string.
6. Notice how it correctly recongized the inconcistency of return types, and in the error message mentions the defined parameter type in .d.ts but don't use it for checking.
