const path = require('path')

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `
import Icon${exportName} from './${basename}'
export { Icon${exportName} }`
  })

  const allIconsStory = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `      <li><Icon${exportName} width={20} height={20} {...args} /><span>Icon${exportName}</span></li>`
  })

  return `
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
${exportEntries.join('\n')}

// for storybook
export default {
  title: 'Icons',
}

export const AllIcons: Story = (args) => {
  return (
    <ul>
${allIconsStory.join('\n')}
    </ul>
  )
}
`
}

module.exports = defaultIndexTemplate
