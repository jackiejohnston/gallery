// purgecss.config.js

module.exports = {
  // These are the files that Purgecss will search through
  content: ["./_site/**/*.html"],

  // These are the stylesheets that will be subjected to the purge
  css: ["./_site/assets/stylesheets/font-awesome_5.15.4_all.min.css", "combination.min.css"],

  // Include these classes even when they aren't in the code:
  safelist: []
};