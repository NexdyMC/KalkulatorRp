/// ---------- ------------------------------ ----------- ///
/// ---------- Codingan ini dibuat oleh Nexdy ----------- ///
/// ----- codingan ini digabungin oleh css dan html ----- ///
/// ----- ----------------------------------------- ----- ///

const header= document.querySelector("header");
header.innerHTML =[
    "<nav>" +
        "<h1>Calculator</h1>" +
    "</nav>"
];

/// ---------- function calculator ---------- ///
    function calculator() {
        const namaInput = document.getElementById("nameInput").value;

        const a = document.getElementById("satu").value;
        const b = document.getElementById("dua").value ;
        const c = document.getElementById("tiga").value ;
        
        const d = document.getElementById("empat").value ;
        const e = document.getElementById("lima").value ;
        const f = document.getElementById("enam").value ;

        const g = document.getElementById("tujuh").value ;
        const h = document.getElementById("delapan").value ;
        const i = document.getElementById("sembilan").value ;
        
        const j = document.getElementById("sepuluh").value ;
        const k = document.getElementById("sebelas").value ;

        const hasil = document.getElementById("hasil");
        const HasilData = document.getElementById("HasilData");
        
        const out = new Date();
        const hours = String(out.getHours()).padStart(2, "0");
        const minutes = String(out.getMinutes()).padStart(2, "0");
        const seconds = String(out.getSeconds()).padStart(2, "0");
        
        const day = String(out.getDate()).padStart(2, "0");
        const month = String(out.getMonth()).padStart(2, "0");
        const year = String(out.getFullYear()).padStart(2, "0");
        
        const calender = day + "/" + month + "/" + year;
        const time = hours + ":" + minutes + ":" + seconds ;

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
            (a * 1) +
            (b * 1) +
            (c * 1) +
            (d * 1) +
            (e * 1) +
            (f * 1) +
            (g * 1) +
            (h * 1) + 
            (i * 1) +
            (j * 1) +
            (k * 1) 
        ];

        // template textarea //
        const DataTextarea = [
            ("www.calculator-com.vercel.app")                       + "\n" +
            ("name: " + namaInput )                                 + "\n" +
            ("---------------------------------")                   + "\n" +
            (calender + ' - ' + time)                               + "\n" +
            ("---------------------------------")                   + "\n" +
            ("100       : " + a * 1 + "\t" + ":  " + a * 100    )   + "\n" +
            ("200       : " + b * 1 + "\t" + ":  " + b * 200    )   + "\n" +
            ("500       : " + c * 1 + "\t" + ":  " + c * 500    )   + "\n" +
            ("1000      : " + d * 1 + "\t" + ":  " + d * 1000   )   + "\n" +
            ("2000      : " + e * 1 + "\t" + ":  " + e * 2000   )   + "\n" +
            ("5000      : " + f * 1 + "\t" + ":  " + f * 5000   )   + "\n" +
            ("10000     : " + g * 1 + "\t" + ":  " + g * 10000  )   + "\n" +
            ("20000     : " + h * 1 + "\t" + ":  " + h * 20000  )   + "\n" +
            ("50000     : " + i * 1 + "\t" + ":  " + i * 50000  )   + "\n" +
            ("75000     : " + j * 1 + "\t" + ":  " + j * 75000  )   + "\n" +
            ("100000    : " + k * 1 + "\t" + ":  " + k * 100000 )   + "\n" +
            ("--------------------------------")                    + "\n" +
            ("total     : " +xx +     "\t" + ":  " +'Rp'+jumlah )
        ];
        HasilData.value = DataTextarea;
        hasil.textContent = 'Rp' + jumlah ; 

    };
    
    /// ---------- tambahan icon pada btn download ---------- ///
    const download = document.getElementById("download");
    download.style.display = 'flex';
    download.style.placeItems = 'center';
    download.style.justifyContent = 'center';
    download.style.fill = '#ffffff';
    // download.innerHTML = [
    //     "<p> Download </p>" +
    //     "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" style=\"transform: ;msFilter:;\">" +
    //         "<path d=\"m12 16 4-5h-3V4h-2v7H8z\"></path>" +
    //         "<path d=\"M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z\">" +
    //         "</path>"+
    //     "</svg>"
    // ];

    /// ---------- tambahkan icon pada btn copy ---------- ///
    const copy= document.getElementById("copy");
    copy.style.display = 'flex';
    copy.style.placeItems = 'center';
    copy.style.justifyContent = 'center';
    copy.style.fill = '#ffffff';
    copy.innerHTML = [
        "<p> Copy </p>" +
        "<svg xmlns=\"https://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" style=\"transform: ;msFilter:;\">",
            "<path d=\"M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z\">",
            "</path>",
        "</svg>"
    ];

    // function reset //
    function Reset() {
        const Reset = document.getElementById("Reset");
        const input = document.querySelectorAll("input");
        const HasilData = document.getElementById("HasilData");

        var inputa = input[1]; 
        var inputb = input[2]; 
        var inputc = input[3]; 
        var inputd = input[4]; 
        var inpute = input[5]; 
        var inputf = input[6]; 
        var inputg = input[7]; 
        var inputh = input[8]; 
        var inputi = input[9]; 
        var inputj = input[10]; 
        var inputk = input[11]; 

        inputa.value = "";
        inputb.value = "";
        inputc.value = "";
        inputd.value = "";
        inpute.value = "";
        inputf.value = "";
        inputg.value = "";
        inputh.value = "";
        inputi.value = "";
        inputj.value = "";
        inputk.value = "";
        HasilData.value = "";
    }
    
    // function copytext //
    function copyText() {
        const HasilData = document.getElementById("HasilData");
        HasilData.select();
        document.execCommand('copy');
        alert("text Berhasil Dicopy");
    }
    
    // function download //
    download.addEventListener('click', () => {
        const calculator = document.getElementById("HasilData").value;

        // fungsi download file + template download js
        const blob = new Blob([calculator], { type: 'text/plain' }); //type file
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); /// membuat elemen a anchor
        a.href = url;
        a.download = 'calculator.txt'; ///nama fila

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
