import { useContext } from 'react';
import { AccountContext } from './store/AccountContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import AccountTab from './page/AccountTab';
import AccountAdd from './page/AccountAdd';
import Layout from './components/Layout/Layout';

function App() {
  const { authLogin } = useContext(AccountContext);
  return (
    <Layout>
      {authLogin ? (
        <Routes>
          <Route path="/" element={<Navigate to="/accounts" />} />
          <Route path="/accounts" element={<AccountTab />} />
          <Route path="/accounts/:pageNumber" element={<AccountTab />} />
          <Route path="/accounts/:search" element={<AccountTab />} />
          <Route path="/accounts/add" element={<AccountAdd />} />
          <Route path="/accounts/edit/:idAccount" element={<AccountAdd />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Layout>
  );
}

export default App;

// function App() {
//   const { authLogin } = useContext(AccountContext);
//   return (
//     <Layout>
//       {authLogin ? (
//         <Routes>
//           <Route path="/" element={<Navigate to="/accounts" />} />
//           <Route path="/accounts" element={<AccountTab />}>
//             <Route path=":pageNumber" element={<AccountTab />} />
//             <Route path=":search" element={<AccountTab />} />
//           </Route>
//           <Route path="/accounts/edit/:idAccount" element={<AccountAdd />} />
//           <Route path="/accounts/add" element={<AccountAdd />} />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       )}
//     </Layout>
//   );
// }

// export default App;
