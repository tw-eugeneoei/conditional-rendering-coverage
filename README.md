# conditional-rendering-coverage

This is a minial reproducible issue with "Branch" coverage value for a `VueJS` project using `vitest`, `vue-testing-library` and `c8`. Versions are as follows:

- `vue`: ^3.2.45
- `vitest`: ^0.25.6
- `@testing-library/vue`: ^6.6.1
- `@vitest/coverage-c8`: ^0.28.5,

# Issue

When using `v-if` and `v-else` directives to conditionally render a block, `Branch` coverage remains at **100%** even though it is not an expected behaviour.

The following code block does not affect value of `Branch` in coverage report.

![conditional-rendering-code-block](/images/conditional-rendering-code-block.png)

The above produces even though only test has been written for the `v-if` block:

![coverage-result](/images/coverage-result.jpg)

Here is the written test:

![conditional-rendering-test](/images/conditional-rendering-test.png)

# Steps to reproduce

- Clone repo
- Run `npm i`
- Run `npm run test:cov`
