const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

function generateMultiplicationTables() {
  for (let i = 1; i <= 10; i++) {
    let cardHTML = `
            <div class="card">
                <h2>${i}</h2>
                <ul>
        `;
    for (let j = 1; j <= 10; j++) {
      cardHTML += `<li>${i} x ${j} = ${i * j}</li>`;
    }
    cardHTML += `
                </ul>
            </div>
        `;

    // Masukkan tabel ke baris yang sesuai
    if (i <= 5) {
      row1.innerHTML += cardHTML;
    } else {
      row2.innerHTML += cardHTML;
    }
  }
}

generateMultiplicationTables();
