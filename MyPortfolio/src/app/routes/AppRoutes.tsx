import { Routes, Route } from 'react-router-dom';
import { CV, Home } from '../pages';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
};

export default AppRoutes;