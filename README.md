# JSS Styled


## Usage

```js
// app/styled.js

import { create as createJss } from 'jss'
import { create as createInjectSheet } from 'react-jss'
import presetDefault from 'jss-preset-default'
import createStyledJss from 'jss-styled'

export const jss = createJss()

jss.setup(presetDefault())

export const injectSheet = createInjectSheet(jss)
export default createStyledJss(injectSheet)


// app/components/button.js

import React from 'react'
import styled from '../styled'

const Button = styled.button('Button', () => ({
  backgroundColor: 'black',
  padding: 20,
  color: 'white',
}))

export default Button
```
