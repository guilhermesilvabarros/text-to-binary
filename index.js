import process from 'process'

console.clear()

process.stdout.write("=== Convert TEXT to BINARY ===\n\n")
process.stdout.write("type a text \n> ")

let text

process.stdin.on('data', dataBuffer => {
  text = dataBuffer.toString().trim()

  process.exit()
})

process.on("exit", () => {
  const textInBinaryArray = []

  for (const char of text) {
    const unicodeChar = char.charCodeAt()
    const binaryCharArray = []

    let quotient = unicodeChar
    let rest = 0

    while (quotient > 0) {
      rest = quotient % 2
      quotient = Math.trunc(quotient / 2)

      binaryCharArray.unshift(rest)
    }

    binaryCharArray.unshift(quotient)

    const binaryChar = binaryCharArray.join("").padStart(8, "0")

    textInBinaryArray.push(binaryChar)
  }

  const textInBinary = textInBinaryArray.join("\n")

  process.stdout.write(`\nYour text in binary: \n\n${textInBinary}\n\n`)
})
