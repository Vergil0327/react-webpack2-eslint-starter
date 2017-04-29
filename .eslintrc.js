module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
    	"browser": true,
    	"node": true,
        "es6": true
    },
    "plugins": [
        "react",
        "jsx-a11y/recommended",// Avoid parsing error: unexpected token export default `const` App = () => {...}
        "import"
    ],
    "rules": {
        "strict": 0,
    	"indent": [2, "tab"],
    	"no-tabs": 0,
        "react/jsx-indent": [2, "tab"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-console": 0,
        "arrow-body-style": ["error", "always"]
    }
};
	