const solution = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,';
const cells = document.querySelectorAll('td');

cells.forEach(cell => cell.addEventListener('click', e => {
    move(e.target);
    win() && alert('You win');
}));

/**
 * Return true if all the cells are in the correct orders
 * @returns {Boolean}
 */
const win = () => Array
    .from(document.querySelectorAll('td'))
    .map(el => el.innerText)
    .join() === solution;

/**
 * Return the position of a given cell
 * @param {HTMLElement} cell
 * @returns {Array} x, y
 */
const findPosition = cell => [cell.cellIndex, cell.parentElement.rowIndex];

/**
 * Given the position of two cells, return true if there are adjacent, return false otherwise
 * @param {Number} x1 Position on the x axis of the first cell
 * @param {Number} y1 Position on the y axis of the first cell
 * @param {Number} x2 Position on the x axis of the second cell
 * @param {Number} y2 Position on the y axis of the second cell
 * @returns {Boolean}
 */
const canMove = (x1, y1, x2, y2) => (
    (x1 === x2 && y2 === y1 - 1) || 
    (x1 === x2 && y2 === y1 + 1) ||
    (x2 === x1 - 1 && y2 === y1) ||
    (x2 === x1 + 1 && y2 === y1)
);

/**
 * Try to move a cell
 * @param {HTMLElement} cell 
 */
const move = cell => {
    const empty = document.querySelector(".empty");

    const [x1, y1] = findPosition(cell);
    const [x2, y2] = findPosition(empty);
    
    if (!canMove(x1, y1, x2, y2)) return;

    empty.innerHTML = cell.innerHTML;
    empty.classList.remove('empty');
    cell.innerHTML = "";
    cell.classList.add('empty');
};
