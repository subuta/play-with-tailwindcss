import "regenerator-runtime/runtime"

import { configure } from '@storybook/react'

// SEE: https://github.com/storybookjs/storybook/tree/next/examples/standalone-preview

// SEE: https://storybook.js.org/docs/basics/writing-stories/#story-hierarchy
configure(() => require('../stories'), module)
