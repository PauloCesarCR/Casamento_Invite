import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvitePage from './pages/InvitePage';
export default function RoutesMain() {

  return (
      <Router>
          <Routes>
            <Route path="/" element={<InvitePage />} />
          </Routes>
      </Router>
  );
}