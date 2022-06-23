document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square')

  squares.forEach(square => {
    square.addEventListener('click', handleClick)
  })
})

function handleClick(event) {
  // retorna o elemento que sofreu a ação
  // console.log(event.target)
  let square = event.target
  let position = square.id

  if (handleMove(position)) {
    setTimeout(() => {
      alert(`
      O jogo acabou, e o vencedor foi o player -> ${playerTime + 1} 
      símbolo = ${board[position].toString().toUpperCase()}
      `)
    }, 10)
  }
  updateSquare(position)
}

function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class=${symbol}></div>`
}

function resetGame() {
  board.forEach((element, index) => {
    board[index] = ''
    uptadeSquare(index)
  })
  playerTime = 0
  gameOver = false
}
