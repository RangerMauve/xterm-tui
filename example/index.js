const Terminal = window.Terminal

const XtermTUI = require('../')
const {widgets} = XtermTUI
const {Box} = widgets

const terminal = new Terminal()

const tui = new XtermTUI(terminal)

terminal.open(document.querySelector('main'))

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
