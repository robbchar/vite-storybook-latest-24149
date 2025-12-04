### What
This is the reproduction for https://github.com/storybookjs/storybook/issues/24149.

### Expected
When you click the 'reset controls' button after editing the items in JSON mode the items reset to what they initially were.

### Actual
When you click the 'reset controls' button after editing the items in JSON mode the items *DO NOT* reset to what they initially were.

### Reproduction steps
1. Clone the code locally `git clone https://github.com/robbchar/vite-storybook-latest-24149`.
1. Run yarn install.
1. Run yarn storybook.
1. Open the dev tools in your browser.
1. Click on the List story.
1. Find the 'Items' property in the 'Controls' tab at the bottom and click 'Edit JSON'.
1. Change the text of 'Item 1' to 'Item 1asd' and click out of the box, noticing that the rendered list now has 'Item 1asd' as the first itemn.
1. Click the icon for 'Reset Controls' in the upper right of the 'Controls' tab.
1. Notice that the first item of the rendered list reverts back to 'Item 1asd' but the first item in the list in the 'Controls' tab stays 'Item 1asd'.

### Versions
- Node v22 
- Next 16.0.7 
- Storybook 10.1.4 
- vite 7.2.6