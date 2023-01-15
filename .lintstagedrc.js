module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,json,md,mdx,css,html,yml,yaml,scss}': ['prettier --write .'],
  '*.{html,css,sass,scss,less,styl,stylus}': ['stylelint --fix'],
}
