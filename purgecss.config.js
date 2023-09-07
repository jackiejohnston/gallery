// purgecss.config.js

module.exports = {
  // These are the files that Purgecss will search through
  content: ["./_site/**/*.html"],

  // These are the stylesheets that will be subjected to the purge
  css: ["combination.min.css"],

  // Include these classes even when they aren't in the code:
  safelist: []
};