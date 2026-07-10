import React from 'react';
import ProfilPengguna from './components/ProfilPengguna';
import Pengumuman from './components/Pengumuman';
import Penghitung from './components/Penghitung';
import LoginStatus from './components/LoginStatus';
import { users } from './data/users'; // Impor data pengguna
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Pengumuman 
        judul="Info Praktikum"
        isi="Pastikan semua tugas dikumpulkan sebelum batas waktu yang ditentukan."
      />
      <Penghitung />
      <LoginStatus />
      <hr style={{width: '100%', margin: '40px 0', border: '1px solid #eee'}} />
      <h1>Tim Kami</h1>
      <div className="profil-list">
        {users.map(user => (
          <ProfilPengguna
            key={user.id} // Prop `key` esensial untuk optimasi render list
            nama={user.nama}
            pekerjaan={user.pekerjaan}
            gambar={user.gambar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;