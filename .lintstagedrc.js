module.exports = {
  '*.{js,jsx,ts,tsx,vue,html}': ['eslint --fix .'],
  '*.{js,jsx,ts,tsx,json,md,mdx,yml,yaml,html,css,sass,scss,less,styl,stylus}': ['prettier --write .'],
  '*.{html,css,sass,scss,less,styl,stylus}': ['stylelint --fix .'],
}
