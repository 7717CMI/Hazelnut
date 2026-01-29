'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessType: string
  coreBusinessActivities: string
  geographicPresence: string
  vehicleCategoriesHandled: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (for Proposition 2)
  primaryBusinessObjective: string
  keyPainPoints: string
  upcomingTriggersAndInitiatives: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  vendorSelectionCriteria: string
  preferredVendorType: string
  contractDurationPreference: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType: string
  preferredDeploymentModel: string
  performanceExpectations: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking: string
  additionalComments: string
}

// Sample data - Customers of Vehicle Scrapping/Recycling Companies in India
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Ola Fleet Technologies',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Ride hailing fleet management',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger Vehicles, EVs',
    keyContactPerson: 'Hemant Bakshi',
    designation: 'CEO - Ola Fleet',
    emailAddress: 'h.bakshi@olafleet.com',
    phoneNumber: '+91 80 4690 0000',
    linkedInProfile: 'linkedin.com/in/hemantbakshi',
    websiteUrl: 'www.olacabs.com',
    primaryBusinessObjective: 'Compliance, cost reduction, EV transition',
    keyPainPoints: 'Disposal of aging fleet, compliance',
    upcomingTriggersAndInitiatives: 'Fleet renewal, EV expansion',
    vendorSelectionCriteria: 'Cost, compliance, speed',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long term',
    preferredSolutionType: 'Depollution, reporting tools',
    preferredDeploymentModel: 'Third party, LTSA',
    performanceExpectations: 'High efficiency, fast turnaround',
    customerBenchmarking: 'High potential customer',
    additionalComments: 'Large aging fleet'
  },
  {
    customerName: 'Uber India Fleet Partners',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Taxi fleet operations',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger vehicles',
    keyContactPerson: 'Prabhjeet Singh',
    designation: 'President - Uber India',
    emailAddress: 'p.singh@uber.com',
    phoneNumber: '+91 124 4567 800',
    linkedInProfile: 'linkedin.com/in/prabhjeetsingh',
    websiteUrl: 'www.uber.com/in',
    primaryBusinessObjective: 'Compliance, fleet refresh',
    keyPainPoints: 'ELV logistics, deregistration',
    upcomingTriggersAndInitiatives: 'Fleet upgrade programs',
    vendorSelectionCriteria: 'Cost, efficiency',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Medium term',
    preferredSolutionType: 'Compliance systems',
    preferredDeploymentModel: 'Third party',
    performanceExpectations: 'ROI focused',
    customerBenchmarking: 'High volume',
    additionalComments: 'Partner driven'
  },
  {
    customerName: 'BluSmart Mobility',
    businessType: 'Fleet Operator (Electric)',
    coreBusinessActivities: 'Electric cab fleet',
    geographicPresence: 'NCR, Bengaluru',
    vehicleCategoriesHandled: 'EVs',
    keyContactPerson: 'Anmol Jaggi',
    designation: 'Co-Founder & CEO',
    emailAddress: 'a.jaggi@blusmart.in',
    phoneNumber: '+91 124 4567 890',
    linkedInProfile: 'linkedin.com/in/anmoljaggi',
    websiteUrl: 'www.blusmart.in',
    primaryBusinessObjective: 'Sustainability, circular economy',
    keyPainPoints: 'EV battery disposal',
    upcomingTriggersAndInitiatives: 'EV lifecycle management',
    vendorSelectionCriteria: 'Compliance, ESG',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long term',
    preferredSolutionType: 'Battery recycling, audit tools',
    preferredDeploymentModel: 'Third party',
    performanceExpectations: 'High recovery, ESG goals',
    customerBenchmarking: 'Strategic EV customer',
    additionalComments: 'EV focused'
  },
  {
    customerName: 'ORIX India Car Leasing',
    businessType: 'Leasing Company',
    coreBusinessActivities: 'Corporate vehicle leasing',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger vehicles',
    keyContactPerson: 'Sandeep Gambhir',
    designation: 'MD & CEO',
    emailAddress: 's.gambhir@orix.co.in',
    phoneNumber: '+91 124 4715 500',
    linkedInProfile: 'linkedin.com/in/sandeepgambhir',
    websiteUrl: 'www.orixindia.com',
    primaryBusinessObjective: 'Compliance, cost control',
    keyPainPoints: 'End of lease disposal',
    upcomingTriggersAndInitiatives: 'Lease portfolio renewal',
    vendorSelectionCriteria: 'Compliance, ROI',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Medium term',
    preferredSolutionType: 'Data reporting tools',
    preferredDeploymentModel: 'Third party',
    performanceExpectations: 'Predictable ROI',
    customerBenchmarking: 'High potential',
    additionalComments: 'Corporate fleets'
  },
  {
    customerName: 'Ayvens India (LeasePlan)',
    businessType: 'Leasing Company',
    coreBusinessActivities: 'Fleet leasing & remarketing',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger vehicles',
    keyContactPerson: 'Rajesh Mani',
    designation: 'Country Director',
    emailAddress: 'r.mani@ayvens.com',
    phoneNumber: '+91 22 6842 3000',
    linkedInProfile: 'linkedin.com/in/rajeshmani',
    websiteUrl: 'www.ayvens.com/in',
    primaryBusinessObjective: 'ESG, cost optimization',
    keyPainPoints: 'ELV processing',
    upcomingTriggersAndInitiatives: 'Green fleet strategy',
    vendorSelectionCriteria: 'Compliance, efficiency',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long term',
    preferredSolutionType: 'Traceability software',
    preferredDeploymentModel: 'Third party',
    performanceExpectations: 'High efficiency',
    customerBenchmarking: 'Strategic customer',
    additionalComments: 'Global leasing group'
  },
  {
    customerName: 'Tata Steel Recycling',
    businessType: 'Material Buyer',
    coreBusinessActivities: 'Steel recycling',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger, commercial',
    keyContactPerson: 'Ashish Anupam',
    designation: 'VP - Raw Materials',
    emailAddress: 'a.anupam@tatasteel.com',
    phoneNumber: '+91 657 2431 000',
    linkedInProfile: 'linkedin.com/in/ashishanupam',
    websiteUrl: 'www.tatasteel.com',
    primaryBusinessObjective: 'Raw material sourcing',
    keyPainPoints: 'Scrap quality consistency',
    upcomingTriggersAndInitiatives: 'Capacity expansion',
    vendorSelectionCriteria: 'Quality, volume, price',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long term',
    preferredSolutionType: 'Sorting & shredding technology',
    preferredDeploymentModel: 'Own + partners',
    performanceExpectations: 'High recovery',
    customerBenchmarking: 'Anchor buyer',
    additionalComments: 'Steel major'
  },
  {
    customerName: 'JSW Steel Recycling',
    businessType: 'Material Buyer',
    coreBusinessActivities: 'Scrap metal processing',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger, commercial',
    keyContactPerson: 'Jayant Acharya',
    designation: 'Director - Commercial',
    emailAddress: 'j.acharya@jsw.in',
    phoneNumber: '+91 22 4286 1000',
    linkedInProfile: 'linkedin.com/in/jayantacharya',
    websiteUrl: 'www.jsw.in',
    primaryBusinessObjective: 'Circular economy',
    keyPainPoints: 'Scrap supply volatility',
    upcomingTriggersAndInitiatives: 'Recycling investments',
    vendorSelectionCriteria: 'Cost, quality',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long term',
    preferredSolutionType: 'Metal recovery systems',
    preferredDeploymentModel: 'Own + partners',
    performanceExpectations: 'High throughput',
    customerBenchmarking: 'Large buyer',
    additionalComments: 'Industrial recycler'
  },
  {
    customerName: 'Mahindra First Choice',
    businessType: 'Used Parts Buyer',
    coreBusinessActivities: 'Used parts distribution',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger vehicles',
    keyContactPerson: 'Ashutosh Pandey',
    designation: 'CEO',
    emailAddress: 'a.pandey@mahindrafirstchoice.com',
    phoneNumber: '+91 124 4526 300',
    linkedInProfile: 'linkedin.com/in/ashutoshpandey',
    websiteUrl: 'www.mahindrafirstchoice.com',
    primaryBusinessObjective: 'Revenue, parts sourcing',
    keyPainPoints: 'Supply of quality parts',
    upcomingTriggersAndInitiatives: 'Used parts marketplace',
    vendorSelectionCriteria: 'Quality, consistency',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Medium term',
    preferredSolutionType: 'Dismantling solutions',
    preferredDeploymentModel: 'Partner model',
    performanceExpectations: 'ROI driven',
    customerBenchmarking: 'Major used parts player',
    additionalComments: 'Part of Mahindra Group'
  },
  {
    customerName: 'OLX Autos India (part of OLX Group)',
    businessType: 'Used Parts Buyer',
    coreBusinessActivities: 'Auto resale and parts',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'Passenger vehicles',
    keyContactPerson: 'Amit Kumar',
    designation: 'Country Head',
    emailAddress: 'a.kumar@olxautos.in',
    phoneNumber: '+91 124 4688 700',
    linkedInProfile: 'linkedin.com/in/amitkumar-olx',
    websiteUrl: 'www.olxautos.in',
    primaryBusinessObjective: 'Market expansion',
    keyPainPoints: 'Part traceability',
    upcomingTriggersAndInitiatives: 'Auto ecosystem growth',
    vendorSelectionCriteria: 'Cost, compliance',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Short term',
    preferredSolutionType: 'Data tools',
    preferredDeploymentModel: 'Partner model',
    performanceExpectations: 'Fast processing',
    customerBenchmarking: 'Digital platform',
    additionalComments: 'Marketplace driven'
  },
  {
    customerName: 'TVS Supply Chain Solutions',
    businessType: 'Logistics Provider',
    coreBusinessActivities: 'Vehicle transport & logistics',
    geographicPresence: 'Pan India',
    vehicleCategoriesHandled: 'All vehicle types',
    keyContactPerson: 'R. Dinesh',
    designation: 'Managing Director',
    emailAddress: 'r.dinesh@tvsscs.com',
    phoneNumber: '+91 44 2833 2000',
    linkedInProfile: 'linkedin.com/in/rdinesh-tvs',
    websiteUrl: 'www.tvsscs.com',
    primaryBusinessObjective: 'Revenue, service expansion',
    keyPainPoints: 'Handling ELVs safely',
    upcomingTriggersAndInitiatives: 'Reverse logistics growth',
    vendorSelectionCriteria: 'Cost, reliability',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long term',
    preferredSolutionType: 'Logistics & tracking systems',
    preferredDeploymentModel: 'Third party',
    performanceExpectations: 'High efficiency',
    customerBenchmarking: 'Key logistics partner',
    additionalComments: 'Supports scrapping ecosystem'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Common Customer Information header cells (5 columns)
  const renderCustomerInfoHeaders = () => (
    <>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Customer/Company Name</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Business Type</div>
        <div className="font-normal text-[10px] text-gray-600">OEM Partner / Independent / Scrapper / Recycler / Fleet Operator</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Core Business Activities</div>
        <div className="font-normal text-[10px] text-gray-600">Scrapping / Dismantling / Recycling / Logistics</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Geographic Presence</div>
        <div className="font-normal text-[10px] text-gray-600">Pan India / Regional / Local</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Vehicle Categories Handled</div>
        <div className="font-normal text-[10px] text-gray-600">Passenger Vehicles, Commercial Vehicles, Two Wheelers EVs</div>
      </th>
    </>
  )

  // Common Contact Details header cells (6 columns)
  const renderContactHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
    </>
  )

  // Common Customer Information data cells (5 columns)
  const renderCustomerInfoCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.coreBusinessActivities}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.geographicPresence}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.vehicleCategoriesHandled}</td>
    </>
  )

  // Common Contact Details data cells (6 columns)
  const renderContactCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
      </td>
    </>
  )

  // Professional Drivers header cells (3 columns)
  const renderProfessionalDriversHeaders = () => (
    <>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
        <div>Primary Business Objective</div>
        <div className="font-normal text-[10px] text-gray-600">Compliance / Revenue / Sustainability / Expansion / Circular Economy Focus Level / ESG and Sustainability Targets / EV and Battery Recycling / Interest / Expansion Plans / New Facilities / Capacity Upgrade</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
        <div>Key Pain Points</div>
        <div className="font-normal text-[10px] text-gray-600">ELV Supply Availability / Disposal of aging fleet / EV battery disposal / End of lease disposal</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
        <div>Upcoming Triggers and Initiatives</div>
        <div className="font-normal text-[10px] text-gray-600">Fleet renewal / EV expansion / Fleet upgrade programs / EV lifecycle management / Lease portfolio renewal / Recycling investments</div>
      </th>
    </>
  )

  // Professional Drivers data cells
  const renderProfessionalDriversCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryBusinessObjective}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPainPoints}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggersAndInitiatives}</td>
    </>
  )

  // Purchasing Behaviour Metrics header cells (3 columns)
  const renderPurchasingHeaders = () => (
    <>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Vendor Selection Criteria</div>
        <div className="font-normal text-[10px] text-gray-600">Cost, compliance, speed</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Preferred Vendor Type</div>
        <div className="font-normal text-[10px] text-gray-600">Local / Global / Integrated</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Contract Duration Preference</div>
      </th>
    </>
  )

  // Purchasing Behaviour Metrics data cells
  const renderPurchasingCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.vendorSelectionCriteria}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredVendorType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.contractDurationPreference}</td>
    </>
  )

  // Solution Requirements header cells (3 columns)
  const renderSolutionHeaders = () => (
    <>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Preferred Solution Type</div>
        <div className="font-normal text-[10px] text-gray-600">(Depollution and Hazardous Waste Handling Systems / Battery Recycling and EV Processing Solutions / Data Reporting and Audit Tools)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
        <div>Preferred Deployment Model</div>
        <div className="font-normal text-[10px] text-gray-600">Own Facility / JV / Third Party / Long Term Service Agreement Interest / Battery recycling, audit tools</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
        <div>Performance Expectations</div>
        <div className="font-normal text-[10px] text-gray-600">Processing Efficiency Targets / Recovery Rate Expectations / Environmental Impact Reduction Goals / Third party, LTSA / Own +</div>
      </th>
    </>
  )

  // Solution Requirements data cells
  const renderSolutionCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredDeploymentModel}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.performanceExpectations}</td>
    </>
  )

  // CMI Insights header cells (2 columns)
  const renderCMIHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Customer Benchmarking Summary</div>
        <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
      </th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Additional Comments/Notes By CMI team</div>
      </th>
    </>
  )

  // CMI Insights data cells
  const renderCMICells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
    </>
  )

  // Proposition 1 Table - Customer Information (5) + Contact Details (6) = 11 columns
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 Table - Customer Info (5) + Contact (6) + Professional Drivers (3) = 14 columns
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProfessionalDriversHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProfessionalDriversCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 Table - All sections: Customer Info (5) + Contact (6) + Professional Drivers (3) + Purchasing (3) + Solution (3) + CMI (2) = 22 columns
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
            <th colSpan={3} className="bg-[#D8BFD8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProfessionalDriversHeaders()}
            {renderPurchasingHeaders()}
            {renderSolutionHeaders()}
            {renderCMIHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProfessionalDriversCells(customer)}
              {renderPurchasingCells(customer)}
              {renderSolutionCells(customer)}
              {renderCMICells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
