/// ----------- ------------------------------ ------------ ///
/// ----------- Codingan ini dibuat oleh Nexdy -----------  ///
/// ----- codingan ini digabungin dengan css dan html ----- ///
/// ----- ------------------------------------------- ----- ///

// --- Ganti title ketika fokus dan blur --- //
window.addEventListener('blur', () => {
    document.title = 'Calculator RP';
});
window.addEventListener('focus', () => {
    document.title = 'Menghasilkan';
});

// --- Tampilkan bantuan --- //
function help() {
    const calculator = document.getElementById("display");
    const help = document.getElementById("help");
    const content = document.getElementById("container");

    setTimeout(() => {
        calculator.classList.toggle('calcuratorA');
        help.classList.toggle('helpA');
        content.classList.toggle('containerA');
    }, 100);
}

// --- Fungsi untuk menghitung jumlah uang --- //
function calculator() {
    const namaInput = document.getElementById("nameInput").value;
    const a = document.getElementById("satu").value;
    const b = document.getElementById("dua").value;
    const c = document.getElementById("tiga").value;
    const d = document.getElementById("empat").value;
    const e = document.getElementById("lima").value;
    const f = document.getElementById("enam").value;
    const g = document.getElementById("tujuh").value;
    const h = document.getElementById("delapan").value;
    const i = document.getElementById("sembilan").value;
    const j = document.getElementById("sepuluh").value;
    const k = document.getElementById("sebelas").value;

    const hasil = document.getElementById("hasil");
    const HasilData = document.getElementById("HasilData");

    const now = new Date();
    const hari = ["Mingggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const formattedDate = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth()).padStart(2, "0")}/${now.getFullYear()}`;
    const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    const jumlah = [
            ( a * 100   ) +
            ( b * 200   ) +
            ( c * 500   ) +
            ( d * 1000  ) +
            ( e * 2000  ) +
            ( f * 5000  ) +
            ( g * 10000 ) +
            ( h * 20000 ) +
            ( i * 50000 ) +
            ( j * 75000 ) +
            ( k * 100000) 
        ];
    const xx = [
            (a * 1) + (b * 1) +
            (c * 1) + (d * 1) +
            (e * 1) + (f * 1) +
            (g * 1) + (h * 1) + 
            (i * 1) + (j * 1) +
            (k * 1) 
        ];
    
    const DataTextarea = [

            (document.domain)                                                       + "\n" +
            ("Name : " + namaInput )                                                + "\n" +
            ("-----------------------------------")                                 + "\n" +
            ( hari[out.getDay()] + calender + ' - ' + time)                         + "\n" +
            ("-----------------------------------")                                 + "\n" +
            ("100    " + "\t" + ":" + "\t" + a * 1 + "\t" + " :  "  + a * 100    )  + "\n" +
            ("200    " + "\t" + ":" + "\t" + b * 1 + "\t" + " :  "  + b * 200    )  + "\n" +
            ("500    " + "\t" + ":" + "\t" + c * 1 + "\t" + " :  "  + c * 500    )  + "\n" +
            ("1000   " + "\t" + ":" + "\t" + d * 1 + "\t" + " :  "  + d * 1000   )  + "\n" +
            ("2000   " + "\t" + ":" + "\t" + e * 1 + "\t" + " :  "  + e * 2000   )  + "\n" +
            ("5000   " + "\t" + ":" + "\t" + f * 1 + "\t" + " :  "  + f * 5000   )  + "\n" +
            ("10000  " + "\t" + ":" + "\t" + g * 1 + "\t" + " :  "  + g * 10000  )  + "\n" +
            ("20000  " + "\t" + ":" + "\t" + h * 1 + "\t" + " :  "  + h * 20000  )  + "\n" +
            ("50000  " + "\t" + ":" + "\t" + i * 1 + "\t" + " :  "  + i * 50000  )  + "\n" +
            ("75000  " + "\t" + ":" + "\t" + j * 1 + "\t" + " :  "  + j * 75000  )  + "\n" +
            ("100000 " + "\t" + ":" + "\t" + k * 1 + "\t" + " :  "  + k * 100000 )  + "\n" +
            ("-----------------------------------")                                 + "\n" +
            ("Total  " + "\t" + ":" + "\t" + xx    + "\t" + " :  "  +'Rp'+jumlah )
        ];

        HasilData.value = DataTextarea;

        hasil.textContent = 'Rp' + jumlah ; 
}

// --- Tambahkan ikon pada tombol download --- //
const download = document.getElementById("download");
download.style.display = 'flex';
download.style.placeItems = 'center';
download.style.justifyContent = 'center';
download.style.fill = '#ffffff';
download.innerHTML = `
    <p>Download</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(225, 225, 255);transform: msFilter;">
        <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
    </svg>
`;

// --- Tambahkan ikon pada tombol copy --- //
const copy = document.getElementById("copy");
copy.style.display = 'flex';
copy.style.placeItems = 'center';
copy.style.justifyContent = 'center';
copy.style.fill = '#ffffff';
copy.innerHTML = `
    <p>Copy</p>
    <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: msFilter;">
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
    </svg>
`;

// --- Fungsi reset --- //
function Reset() {
    document.querySelectorAll("input").forEach((input, index) => {
        if (index >= 1 && index <= 11) input.value = "";
    });
    document.getElementById("HasilData").value = "";
}

// --- Fungsi copy text --- //
function copyText() {
    const HasilData = document.getElementById("HasilData");
    HasilData.select();
    HasilData.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(HasilData.value)
        .then(() => alert("Berhasil Dicopy"))
        .catch(err => console.error("Gagal Menyalin Text: ", err));

    document.execCommand('copy');
}

// --- Fungsi download --- //
download.addEventListener('click', () => {
    const calculatorContent = document.getElementById("HasilData").value;
    const now = new Date();
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const formattedDate = `${String(now.getDate()).padStart(2, "0")}${String(now.getMonth()).padStart(2, "0")}${now.getFullYear()}`;
    const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    const fileName = `${hari[now.getDay()]} ${formattedDate}/${formattedTime}/Calculator.txt`;

    const blob = new Blob([calculatorContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
        
