module.exports = `md
@INPUT
* Trigger: Breakpoint match
* Payload: State[Object]

@CHANGE
* Trigger: Breakpoint match
* Payload: State[Object]

@<BREAKPOINT-NAMEPSPACE> = breakpoint[String] // "small"
// E.g.:
// @small, @medium, @large...
`
