# xterm-tui
Attach graphics to an [xterm.js](https://xtermjs.org/) terminal using blessed

```
<script src="//unpkg.com/xterm-tui/bundle.js"></script>
```

-- OR --

```
npm install --save xterm-tui

const XtermTUI = require('xterm-tui')
```

```js
const terminal = new Terminal()

const tui = new XtermTUI(terminal)

terminal.open(document.querySelector('main'))

const {widgets} = XtermTUI
const {Box} = widgets

const screen = tui.screen

// Create a box perfectly centered horizontally and vertically.
const box = Box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});

// Append our box to the screen.
screen.append(box);

box.focus()

screen.render()
```

## Widgets

In addition to the default widgets in blessed, we also have the ones inside blessed-contrib

From [blessed](https://github.com/chjj/blessed)

- Base Nodes
    - Node (abstract)
    - Screen
    - Element (abstract)
- Boxes
    - Box
    - Text
    - Line
    - ScrollableBox (deprecated)
    - ScrollableText (deprecated)
    - BigText
- Lists
    - List
    - FileManager
    - ListTable
    - Listbar
- Forms
    - Form
    - Input (abstract)
    - Textarea
    - Textbox
    - Button
    - Checkbox
    - RadioSet
    - RadioButton
- Prompts
    - Prompt
    - Question
    - Message
    - Loading
- Data Display
    - ProgressBar
    - Log
    - Table
- Special Elements
    - Terminal
    - Image
    - ANSIImage
    - OverlayImage
    - Video
    - Layout


From [blessed-contrib](https://github.com/yaronn/blessed-contrib)

- Line Chart
- Bar Chart
- Stacked Bar Chart
- Map
- Gauge
- Stacked Gauge
- Donut
- LCD Display
- Rolling Log
- Picture
- Sparkline
- Table
- Tree
- Markdown
