import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeDashboard from './../components/home/HomeDashboard'
import Footer from '../footer/Footer'
import CareerDashboard from './../components/career/CareerDashboard'
import ContactDashboard from './../components/contact/ContactDashboard'
import About from './../components/about/About'
import AboutOurTeam from './../components/about/AboutOurTeam'
import AboutTestimonials from './../components/about/AboutTestimonials'
import AboutPartneers from '../components/about/AboutPartneers'
import ServicesSalesAndMarketing from './../components/services/ServicesSalesAndMarketing'
import ServicesOrganization from './../components/services/ServicesOrganization'
import ServicesFinanceAndPayment from './../components/services/ServicesFinanceAndPayment'
import ServicesInvestment from './../components/services/ServicesInvestment'
import ServicesDoingBusinessInAzerbaijan from './../components/services/ServicesDoingBusinessInAzerbaijan'
import ServicesBusinessPlan from './../components/services/ServicesBusinessPlan'
import ServicesMarketResearch from './../components/services/ServicesMarketResearch'
import IndustryImmovableProperty from './../components/industry/IndustryImmovableProperty'
import IndustryFinancialService from './../components/industry/IndustryFinancialService'
import IndustryRetail from './../components/industry/IndustryRetail'
import IndustryProducts from '../components/industry/IndustryProducts'
import IndustryTechMediaAndFun from './../components/industry/IndustryTechMediaAndFun'
import IndustryTransPortationAndLogistics from './../components/industry/IndustryTransPortationAndLogistics'
import IndustrySupplements from './../components/industry/IndustrySupplements'
import IndustryFMCG from './../components/industry/IndustryFMCG'
import IndustryArchitect from './../components/industry/IndustryArchitect'
import IndustryManufacture from './../components/industry/IndustryManufacture'
import IndustryEducation from './../components/industry/IndustryEducation'
import IndustryEnergy from './../components/industry/IndustryEnergy'
import Articles from '../components/articles/Articles'
import ArticlesStartup from '../components/articles/ArticlesStartup'
import ArticlesAlcohol from '../components/articles/ArticlesAlcohol'
import ArticlesLogistics from '../components/articles/ArticlesLogistics'
import ArticlesFinance from '../components/articles/ArticlesFinance'
import IndustryEcommerce from './../components/industry/IndustryEcommerce';

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/contact" element={<ContactDashboard />} />
        <Route path="/career" element={<CareerDashboard />} />
        <Route path="/ideas" element={<Articles />} />
        <Route path="/ideas/startup" element={<ArticlesStartup />} />
        <Route path="/ideas/alcohol" element={<ArticlesAlcohol />} />
        <Route path="/ideas/logistics" element={<ArticlesLogistics />} />
        <Route path="/ideas/finance" element={<ArticlesFinance />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<AboutOurTeam />} />
        <Route path="/about/testimonials" element={<AboutTestimonials />} />
        <Route path="/about/partneers" element={<AboutPartneers />} />

        <Route
          path="/services/marketing"
          element={<ServicesSalesAndMarketing />}
        />
        <Route
          path="/services/companyable"
          element={<ServicesOrganization />}
        />
        <Route
          path="/services/finance"
          element={<ServicesFinanceAndPayment />}
        />
        <Route
          path="/services/investmentable"
          element={<ServicesInvestment />}
        />
        <Route
          path="/services/businessazerbaijan"
          element={<ServicesDoingBusinessInAzerbaijan />}
        />
        <Route
          path="/services/businessplan"
          element={<ServicesBusinessPlan />}
        />
        <Route
          path="/services/marketresearch"
          element={<ServicesMarketResearch />}
        />
        <Route
          path="/industry/immovableproperty"
          element={<IndustryImmovableProperty />}
        />
        <Route
          path="/industry/financialservice"
          element={<IndustryFinancialService />}
        />
        <Route path="/industry/retail" element={<IndustryRetail />} />
        <Route
          path="/industry/industryproducts"
          element={<IndustryProducts />}
        />
        <Route
          path="/industry/techmediaandfun"
          element={<IndustryTechMediaAndFun />}
        />
        <Route
          path="/industry/transportationandlogistics"
          element={<IndustryTransPortationAndLogistics />}
        />
        <Route path="/industry/supplements" element={<IndustrySupplements />} />
        <Route path="/industry/fmcg" element={<IndustryFMCG />} />
        <Route path="/industry/architect" element={<IndustryArchitect />} />
        <Route path="/industry/manufacture" element={<IndustryManufacture />} />
        <Route path="/industry/education" element={<IndustryEducation />} />
        <Route path="/industry/ecommerce" element={<IndustryEcommerce />} />
        <Route path="/industry/energy" element={<IndustryEnergy />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default Dashboard
