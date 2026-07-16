import React, { useState } from 'react';

function LoginStatus() {

  // ambil data login dari localStorage
  const [sudahLogin, setSudahLogin] = useState(
    localStorage.getItem('login') === 'true'
  );

  // fungsi login
  function handleLogin() {
    setSudahLogin(true);

    // simpan ke localStorage
    localStorage.setItem('login', 'true');
  }

  // fungsi logout
  function handleLogout() {
    setSudahLogin(false);

    // hapus data login
    localStorage.removeItem('login');
  }

  return (
    <div>

      <h2>
        {sudahLogin
          ? 'Selamat Datang Kembali!'
          : 'Silakan Login'}
      </h2>

      {sudahLogin ? (
        <button onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin}>
          Login
        </button>
      )}

    </div>
  );
}

export default LoginStatus;