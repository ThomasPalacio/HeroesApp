import { Navbar } from "../ui/NavBar"
import MarvelScreen from '../marvel/MarvelScreen';
import SearchScreen from '../search/SearchScreen';

import DcScreen from '../dc/DcScreen';
import { Routes, Route } from "react-router-dom";
import { HeroScreen } from "../hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar />
    <div className='container'>
        <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero/:heroId" element={<HeroScreen />} />
                <Route path="/" element={<MarvelScreen />} />
        </Routes>
    </div>
    </>
  )
}
