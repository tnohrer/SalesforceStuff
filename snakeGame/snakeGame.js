import { LightningElement, track } from 'lwc';

export default class SnakeGame extends LightningElement {
    @track gameData = Array(20).fill().map(() => ({ id: '', cells: Array(20).fill({ id: '', value: 0, class: 'empty-cell' }) })); // 20x20 game board
    direction = 'right'; // Initial direction
    snake = [{ top: 10, left: 10 }]; // Initial snake position
    gameInterval = null; // Game interval
    food = { top: Math.floor(Math.random() * 20), left: Math.floor(Math.random() * 20) }; // Initial food position

    connectedCallback() {
        window.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    handleKeydown(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.direction = 'up';
                break;
            case 'ArrowDown':
                this.direction = 'down';
                break;
            case 'ArrowLeft':
                this.direction = 'left';
                break;
            case 'ArrowRight':
                this.direction = 'right';
                break;
        }
    }

    updateGame() {
        const head = Object.assign({}, this.snake[0]); // Copy head
        switch (this.direction) {
            case 'up':
                head.top--;
                break;
            case 'down':
                head.top++;
                break;
            case 'left':
                head.left--;
                break;
            case 'right':
                head.left++;
                break;
        }

        if (head.top === this.food.top && head.left === this.food.left) { // If the snake eats the food
            this.food = { top: Math.floor(Math.random() * 20), left: Math.floor(Math.random() * 20) }; // New food position
        } else {
            this.snake.pop(); // Remove tail
        }

        this.snake.unshift(head); // Add new head to snake

        this.gameData = this.gameData.map((row, i) => 
            ({ 
                id: `row-${i}`,
                cells: row.cells.map((cell, j) => 
                    ({ 
                        id: `${i}-${j}`, 
                        value: this.snake.some(s => s.top === i && s.left === j) ? 1 : this.food.top === i && this.food.left === j ? 2 : 0,
                        class: this.snake.some(s => s.top === i && s.left === j) ? 'snake-cell' : this.food.top === i && this.food.left === j ? 'food-cell' : 'empty-cell'
                    })
                )
            })
        );
    }

    startGame() {
        if (!this.gameInterval) {
            this.gameInterval = setInterval(this.updateGame.bind(this), 200); // Start game
        }
    }

    pauseGame() {
        if (this.gameInterval) {
            clearInterval(this.gameInterval); // Pause game
            this.gameInterval = null;
        } else {
            this.startGame(); // Unpause game
        }
    }

    restartGame() {
        if (this.gameInterval) {
            clearInterval(this.gameInterval); // Stop current game
        }
        this.direction = 'right'; // Reset direction
        this.snake = [{ top: 10, left: 10 }]; // Reset snake position
        this.food = { top: Math.floor(Math.random() * 20), left: Math.floor(Math.random() * 20) }; // Reset food position
        this.gameData = Array(20).fill().map(() => ({ id: '', cells: Array(20).fill({ id: '', value: 0, class: 'empty-cell' }) })); // Reset game board
        this.startGame(); // Start game
    }
}