import React, { useState } from 'react';

function Penghitung() {

  const [jumlah, setJumlah] = useState(0);

  function handleKlik() {
    setJumlah(jumlah + 1);
  }

  return (
    <div>
      <p>Tombol ini telah diklik sebanyak: {jumlah} kali</p>

      <button onClick={handleKlik}>
        Klik Saya
      </button>
    </div>
  );
}

export default Penghitung;