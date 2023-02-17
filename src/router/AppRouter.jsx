import { Route, Routes } from 'react-router-dom';
import { PortfolioRoutes } from '../components';
import { LoginPage } from '../components/auth';






export const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<PortfolioRoutes />} />
      </Routes>

    </>
  )
}
