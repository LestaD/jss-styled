import React, { PropTypes } from 'react'
import cn from 'classnames'
import domElements from './domElements'


/**
 * @callback styledJss
 * @param {string} tag
 * @param {string} name
 * @param {Function} styles
 * @param {Function} component
 */

/**
 * @param {Function} injectSheet
 * @return styledJss
 */
export default function createStyledJss(injectSheet) {
  const styledJss = (tag, name, styles) => {
    const themedStyles = { [name]: styles() }
    const sheetInjector = injectSheet(themedStyles)

    const component = ({ sheet, classes, className, ...props }) => (
      React.createElement(tag, { ...props, className: cn(classes[name], className) })
    )
    const styledComponent = sheetInjector(component)
    styledComponent.displayName = name

    return styledComponent
  }

  domElements.forEach(tag => {
    styledJss[tag] = styledJss.bind(null, tag)
  })

  return styledJss
}
