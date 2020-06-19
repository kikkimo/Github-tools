window.MathJax = {
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [ ["$","$"] ],
    displayMath: [ ["$$","$$"] ],
    processEscapes: true
  },
  imageFont: null,
  "HTML-CSS": { availableFonts: ["TeX"] },
  TeX: { equationNumbers: { autoNumber: "AMS" } }
};