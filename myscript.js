var btn = document.querySelector('button');
var square = document.querySelectorAll('td');
var cnt1 = 0;
var cnt2 = 0;

function clearBoard() {
  for(var i=0;i<9;i++){
    square[i].textContent = '';
  }
  cnt1 = 0;
  cnt2 = 0;
}

btn.addEventListener('click',clearBoard);


function game() {
  if (this.textContent === '' && cnt1<=cnt2) {
    this.textContent = 'X';
    cnt1++;
  }else if (this.textContent === '' && cnt2<=cnt1) {
    this.textContent = 'O';
    cnt2++;
  }else if (this.textContent === 'X') {
    this.textContent = '';
    cnt1--;
  }else if (this.textContent === 'O') {
    this.textContent = '';
    cnt2--;
  }
}

for (var i = 0; i < 9; i++) {
  square[i].addEventListener('click',game);
}
