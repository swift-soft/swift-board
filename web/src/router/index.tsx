import {Navigate, Route, Routes} from 'react-router-dom'

import CompanyPanel from '@/company/panel'
import EmployeeDetails from '@/company/panel/employees/task-list'
import EmployeePanelRouter from '@/employee'

import Layout from './layout'
import Home from './pages/home'
import RegisterCompanyPage from './pages/register-company'
import {COMPANY_EMPLOYEE_VIEW, COMPANY_PANEL, EMPLOYEE_PANEL, HOME, REGISTER_COMAPNY} from './paths'

const Router = () => (
  <Routes>
    <Route path={EMPLOYEE_PANEL}>
      {/* TODO: find a better way to split routers into multiple files */}
      {EmployeePanelRouter()}
    </Route>

    <Route path={HOME} element={<Layout />}>
      <Route index={true} element={<Home />} />
      <Route path={REGISTER_COMAPNY} element={<RegisterCompanyPage />} />
      <Route path={COMPANY_PANEL} element={<CompanyPanel />} />
      <Route path={COMPANY_EMPLOYEE_VIEW} element={<EmployeeDetails />} />
    </Route>

    <Route path="*" element={<Navigate to={{pathname: HOME}} />} />
  </Routes>
)

export default Router
