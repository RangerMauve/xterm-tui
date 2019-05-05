const { Readable, Writable } = require('stream')

const Program = require('blessed/lib/program')
const Screen = require('blessed/lib/widgets/screen')
const BLESSED_WIDGETS = require('blessed/lib/widget')
const CONTRIB_WIDGETS = require('blessed-contrib')

const WIDGETS = Object.assign({}, BLESSED_WIDGETS, CONTRIB_WIDGETS)

module.exports =

class XtermTUI {
  constructor (term) {
    this.term = term

    this.toConsole = new Writable({
      write: (chunk, encoding, cb) => {
        const string = chunk.toString('utf8')
        console.log('writing', chunk, string)
        this.term.write(string)
        cb(null)
      },
      encoding: 'utf8'
    })

    Object.defineProperty(this.toConsole, 'columns',{
      get: () => this.term.cols
    })
    Object.defineProperty(this.toConsole, 'rows',{
      get: () => this.term.rows
    })

    this.fromConsole = new Readable({
      read () {
        console.log('Reading started')
      },
      encoding: 'utf8'
    })

    this.writeFromConsole = (data) => {
      console.log('Writing from console', data)
      this.fromConsole.push(data)
    }

    this.program = new Program({
      input: this.fromConsole,
      output: this.toConsole,
      tput: false
    })

    this.screen = new Screen(this.program)

    this.attached = false

    this.attach()
  }

  detach () {
    if (!this.attached) return
    this.attached = false
    this.term.removeListener('data', this.writeFromConsole)
  }

  attach () {
    if (this.attached) return
    this.attached = true
    this.term.on('data', this.writeFromConsole)
  }

  static get widgets () {
    return WIDGETS
  }
}
