<template lang='pug'>
  footer.p2.bg--off-white
    .contain
      p
        em Use Grow UP at your own risk.
      p Using Grow UP{{ version.gekko }} and Grow UP UI v{{ version.ui }}.
</template>

<script>
const gekkoPackage = require('../../../../../package.json');
const uiPackage = require('../../../package.json');

export default {
  data: () => {
    return {
      version: {
        gekko: gekkoPackage.version,
        ui: uiPackage.version
      }
    }
  }
}
</script>
