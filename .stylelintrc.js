module.exports = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-empty-line-before": null,
    "color-function-notation": "legacy",
    "color-hex-case": null,
    "custom-property-empty-line-before": null,
    "custom-property-pattern": null,
    "declaration-block-no-duplicate-properties": [true, {
      "ignore": ["consecutive-duplicates-with-different-values"]
    }],
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-block-no-shorthand-property-overrides": null,
    "hue-degree-notation": "number",
    indentation: 4,
    "max-line-length": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "number-leading-zero": null,
    "number-no-trailing-zeros": null,
    "property-no-unknown": null,
    "property-no-vendor-prefix": null,
    "selector-class-pattern": null,
    "value-keyword-case": null,
  },
};
