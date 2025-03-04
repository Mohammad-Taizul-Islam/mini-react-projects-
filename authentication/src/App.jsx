import React, { useState, createContext, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Auth Provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Hardcoded credentials for simplicity
    if (username === 'admin' && password === 'password') {
      setUser({ username });
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}



// Login Component
function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}




// Logout Component
function Logout() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <p>Welcome, {user.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}



// App Component
function App() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>User Authentication</h1>
      {user ? <Logout /> : <Login />}
    </div>
  );
}



// Wrap App with AuthProvider
export default function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}