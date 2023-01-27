module.exports = {
  '*.{js,jsx,ts,tsx,vue,html,json,md}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,html,json,md,mdx,yml,yaml,css,sass,scss,less,styl,stylus}': ['prettier --write'],
  '*.{html,css,sass,scss,less,styl,stylus}': ['stylelint --fix'],
}
