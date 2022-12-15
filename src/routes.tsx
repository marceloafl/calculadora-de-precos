import BasePage from 'components/BasePage';
import CalculatorSection from 'components/CalculatorSection';
import FixedCosts from 'components/FixedCosts';
import Productivity from 'components/Productivity';
import Rates from 'components/Rates';
import Results from 'components/Results';
import UnitFixedCost from 'components/UnitFixedCost';
import UnitVariableCost from 'components/UnitVariableCost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export default function AppRouter(){
  return(
    <main className='container'>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path='/' element={<BasePage />}>
              <Route path='/' element={< CalculatorSection/>}>
                <Route index element={<FixedCosts />} />
                <Route path='produtividade' element={<Productivity />} />
                <Route path='custo-fixo-unitario' element={<UnitFixedCost />} />
                <Route path='custo-fixo-variavel' element={<UnitVariableCost />} />
                <Route path='taxas' element={<Rates />} />
                <Route path='resultado' element={<Results />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </main>
  );
}