const block = document.querySelector(`.block`),
      
      leftMove = window.innerWidth - block.offsetWidth,
      topMove = window.innerHeight - block.offsetHeight;
   
    window.addEventListener('keydown', (e) => {
		move = 10;
		moveBack = 20;
        switch (e.key) {
            case 'ArrowLeft':
					let currentPositionLeft = block.offsetLeft;
					let nextPosition = currentPositionLeft - move;
					if(nextPosition <= 0) {
						block.style.left = `${parseInt(block.style.left) + moveBack}px`;
						text()
					} else{
						block.style.left = !block.style.left ? `-${move}px` : `${parseInt(block.style.left) - move}px`;
					}
                break;
            case 'ArrowRight':
					let currentPositionRight = block.offsetLeft; 
					let nextPositionRight = currentPositionRight + move; 
				
					if(nextPositionRight >= leftMove) {
						block.style.left = `${parseInt(block.style.left) - moveBack}px`;
						text()
					} else{
						block.style.left = !block.style.left ? `${move}px` : `${parseInt(block.style.left)+move}px`;
					}
                break;
            case 'ArrowUp':
					let currentPositionTop = block.offsetTop; 
   				let nextPositionTop = currentPositionTop - move; 

					if(nextPositionTop <= 0) {
						block.style.top = `${parseInt(block.style.top) + moveBack}px`;
						text()
					} else{
						block.style.top = !block.style.top ? `-${move}px` : `${parseInt(block.style.top)-move}px`;
					}
					break;
            case 'ArrowDown':
					let currentPositionDown = block.offsetTop; 
					let nextPositionDown = currentPositionDown + move; 
				
					if(nextPositionDown >= topMove) {
						block.style.top = `${parseInt(block.style.top) - moveBack}px`;
						text()
					} else{
						block.style.top = !block.style.top ? `${move}px` : `${parseInt(block.style.top)+move}px`;
					}
					break;
        } 
    })
 function text() {
       let text = document.createElement(`p`);
           text.innerHTML = 'БЭМС';
           document.querySelector(`div`).append(text);
           setTimeout(removeText, 2000);
   }
   function  removeText() {
    document.querySelector('p').remove('text');
}
