import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import BlockInfo from './pages/BlockInfo';
import TransactionInfo from './pages/TransactionInfo';

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',  // Set minimum height to 100% of the viewport height
        background: "linear-gradient(to left, #003973, #000000)",
        color: "white",
        padding: "20px",
        boxSizing: 'border-box',  // Include padding in the total height
        display: 'flex',
        flexDirection: 'column',  // Ensure children stack vertically
      }}>
        <nav style={{ background: "linear-gradient(to left, #003973, #000000)", color: "white", padding: "20px" }}>
          <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/block-info">Block Info</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/transaction-info">Transaction Info</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/block-info" element={<BlockInfo />} />
          <Route path="/transaction-info" element={<TransactionInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
