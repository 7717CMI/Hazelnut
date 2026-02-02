'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  typeOfBusiness: string
  facilityType: string
  productTypes: string
  installedProcessingCapacity: string
  numberOfProcessingLines: string

  // Contact Details
  keyContactPerson: string
  designationRole: string
  emailAddress: string
  phoneWhatsAppNumber: string
  linkedInProfile: string
  websiteUrl: string

  // Procurement & Purchase Metrics (Proposition 2+)
  annualEquipmentBudget?: string
  preferredProcurementModel?: string
  averageProcurementCycle?: string
  replacementCycle?: string

  // Digital & Technology Adoption Metrics (Proposition 3)
  levelOfAutomation?: string
  percentagePLCSCADA?: string
  dataIntegrationScore?: string
  predictiveMaintenance?: string
  cybersecurityCompliance?: string

  // Future Demand & Expansion Metrics (Proposition 3)
  plannedCapacityExpansion?: string
  expectedNewMachineryPurchases?: string
  newFacilityConstruction?: string
  longTermOpportunityScore?: string

  // CMI Insights (Proposition 3)
  customerBenchmarking?: string
  additionalComments?: string
}

// Sample data - Placeholder data
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Hazelnut Processors Inc.',
    typeOfBusiness: 'Hazelnut Processor',
    facilityType: 'Processing Plant',
    productTypes: 'Cleaning, Shelling, Sorting',
    installedProcessingCapacity: '100 Tons per Day',
    numberOfProcessingLines: '5',
    keyContactPerson: 'Michael Anderson',
    designationRole: 'CEO',
    emailAddress: 'm.anderson@hazelnutpro.com',
    phoneWhatsAppNumber: '+1 503 234 5678',
    linkedInProfile: 'linkedin.com/in/michaelanderson',
    websiteUrl: 'www.hazelnutprocessors.com',
    annualEquipmentBudget: '$1,200,000',
    preferredProcurementModel: 'OEM Distributor',
    averageProcurementCycle: '10 weeks',
    replacementCycle: '8 years',
    levelOfAutomation: 'Fully Automatic',
    percentagePLCSCADA: '90%',
    dataIntegrationScore: '9',
    predictiveMaintenance: 'High',
    cybersecurityCompliance: 'Advanced',
    plannedCapacityExpansion: '25%',
    expectedNewMachineryPurchases: '3 units',
    newFacilityConstruction: 'Yes',
    longTermOpportunityScore: '9',
    customerBenchmarking: 'Premium customer',
    additionalComments: 'Major expansion planned for next year'
  },
  {
    customerName: 'Oregon Nut Export Co.',
    typeOfBusiness: 'Nut Exporter',
    facilityType: 'Roasting Unit',
    productTypes: 'Roasting, Packaging',
    installedProcessingCapacity: '75 Tons per Day',
    numberOfProcessingLines: '4',
    keyContactPerson: 'Sarah Johnson',
    designationRole: 'Operations Director',
    emailAddress: 's.johnson@oregonnut.com',
    phoneWhatsAppNumber: '+1 503 876 5432',
    linkedInProfile: 'linkedin.com/in/sarahjohnson',
    websiteUrl: 'www.oregonnutexport.com',
    annualEquipmentBudget: '$850,000',
    preferredProcurementModel: 'EPC Contractor',
    averageProcurementCycle: '12 weeks',
    replacementCycle: '6 years',
    levelOfAutomation: 'Semi Automatic',
    percentagePLCSCADA: '70%',
    dataIntegrationScore: '7',
    predictiveMaintenance: 'Medium',
    cybersecurityCompliance: 'Intermediate',
    plannedCapacityExpansion: '18%',
    expectedNewMachineryPurchases: '2 units',
    newFacilityConstruction: 'No',
    longTermOpportunityScore: '7',
    customerBenchmarking: 'High potential customer',
    additionalComments: 'Focusing on quality improvements'
  },
  {
    customerName: 'Turkish Hazelnut Foods',
    typeOfBusiness: 'Food Ingredient',
    facilityType: 'Processing Plant',
    productTypes: 'Cleaning, Shelling, Roasting',
    installedProcessingCapacity: '150 Tons per Day',
    numberOfProcessingLines: '6',
    keyContactPerson: 'Ahmet Yilmaz',
    designationRole: 'Plant Manager',
    emailAddress: 'a.yilmaz@turkishhazelnut.com',
    phoneWhatsAppNumber: '+90 456 789 0123',
    linkedInProfile: 'linkedin.com/in/ahmetyilmaz',
    websiteUrl: 'www.turkishhazelnutfoods.com',
    annualEquipmentBudget: '$2,000,000',
    preferredProcurementModel: 'OEM Distributor',
    averageProcurementCycle: '14 weeks',
    replacementCycle: '10 years',
    levelOfAutomation: 'Fully Automatic',
    percentagePLCSCADA: '95%',
    dataIntegrationScore: '9',
    predictiveMaintenance: 'High',
    cybersecurityCompliance: 'Advanced',
    plannedCapacityExpansion: '30%',
    expectedNewMachineryPurchases: '5 units',
    newFacilityConstruction: 'Yes',
    longTermOpportunityScore: '10',
    customerBenchmarking: 'Strategic partner',
    additionalComments: 'Largest processor in region'
  },
  {
    customerName: 'Pacific Northwest Nuts',
    typeOfBusiness: 'Hazelnut Processor',
    facilityType: 'Processing Plant',
    productTypes: 'Cleaning, Sorting',
    installedProcessingCapacity: '60 Tons per Day',
    numberOfProcessingLines: '3',
    keyContactPerson: 'David Thompson',
    designationRole: 'VP Operations',
    emailAddress: 'd.thompson@pnwnuts.com',
    phoneWhatsAppNumber: '+1 360 555 1234',
    linkedInProfile: 'linkedin.com/in/davidthompson',
    websiteUrl: 'www.pacificnorthwestnuts.com',
    annualEquipmentBudget: '$600,000',
    preferredProcurementModel: 'OEM Distributor',
    averageProcurementCycle: '8 weeks',
    replacementCycle: '7 years',
    levelOfAutomation: 'Semi Automatic',
    percentagePLCSCADA: '65%',
    dataIntegrationScore: '6',
    predictiveMaintenance: 'Medium',
    cybersecurityCompliance: 'Intermediate',
    plannedCapacityExpansion: '15%',
    expectedNewMachineryPurchases: '2 units',
    newFacilityConstruction: 'No',
    longTermOpportunityScore: '7',
    customerBenchmarking: 'Medium-high potential',
    additionalComments: 'Upgrading automation systems'
  },
  {
    customerName: 'Italian Hazelnut Group',
    typeOfBusiness: 'Food Ingredient',
    facilityType: 'Roasting Unit',
    productTypes: 'Roasting, Grinding',
    installedProcessingCapacity: '120 Tons per Day',
    numberOfProcessingLines: '5',
    keyContactPerson: 'Giuseppe Rossi',
    designationRole: 'Managing Director',
    emailAddress: 'g.rossi@italianhazelnut.it',
    phoneWhatsAppNumber: '+39 011 234 5678',
    linkedInProfile: 'linkedin.com/in/giusepperossi',
    websiteUrl: 'www.italianhazelnutgroup.it',
    annualEquipmentBudget: '$1,500,000',
    preferredProcurementModel: 'EPC Contractor',
    averageProcurementCycle: '16 weeks',
    replacementCycle: '9 years',
    levelOfAutomation: 'Fully Automatic',
    percentagePLCSCADA: '88%',
    dataIntegrationScore: '8',
    predictiveMaintenance: 'High',
    cybersecurityCompliance: 'Advanced',
    plannedCapacityExpansion: '22%',
    expectedNewMachineryPurchases: '4 units',
    newFacilityConstruction: 'Yes',
    longTermOpportunityScore: '9',
    customerBenchmarking: 'Premium customer',
    additionalComments: 'Expanding into new markets'
  },
  {
    customerName: 'Georgia Nut Processing',
    typeOfBusiness: 'Hazelnut Processor',
    facilityType: 'Processing Plant',
    productTypes: 'Cleaning, Shelling, Sorting',
    installedProcessingCapacity: '45 Tons per Day',
    numberOfProcessingLines: '2',
    keyContactPerson: 'Nino Kapanadze',
    designationRole: 'General Manager',
    emailAddress: 'n.kapanadze@georgianut.ge',
    phoneWhatsAppNumber: '+995 32 234 5678',
    linkedInProfile: 'linkedin.com/in/ninokapanadze',
    websiteUrl: 'www.georgianutprocessing.ge',
    annualEquipmentBudget: '$400,000',
    preferredProcurementModel: 'OEM Distributor',
    averageProcurementCycle: '10 weeks',
    replacementCycle: '6 years',
    levelOfAutomation: 'Semi Automatic',
    percentagePLCSCADA: '50%',
    dataIntegrationScore: '5',
    predictiveMaintenance: 'Low',
    cybersecurityCompliance: 'Basic',
    plannedCapacityExpansion: '12%',
    expectedNewMachineryPurchases: '1 unit',
    newFacilityConstruction: 'No',
    longTermOpportunityScore: '6',
    customerBenchmarking: 'Medium potential',
    additionalComments: 'Growing regional player'
  },
  {
    customerName: 'Premium Nut Ingredients LLC',
    typeOfBusiness: 'Food Ingredient',
    facilityType: 'Processing Plant',
    productTypes: 'Grinding, Packaging',
    installedProcessingCapacity: '80 Tons per Day',
    numberOfProcessingLines: '4',
    keyContactPerson: 'Maria Garcia',
    designationRole: 'Production Manager',
    emailAddress: 'm.garcia@premiumnut.com',
    phoneWhatsAppNumber: '+1 503 987 6543',
    linkedInProfile: 'linkedin.com/in/mariagarcia',
    websiteUrl: 'www.premiumnutingredients.com',
    annualEquipmentBudget: '$750,000',
    preferredProcurementModel: 'OEM Distributor',
    averageProcurementCycle: '9 weeks',
    replacementCycle: '7 years',
    levelOfAutomation: 'Semi Automatic',
    percentagePLCSCADA: '75%',
    dataIntegrationScore: '7',
    predictiveMaintenance: 'Medium',
    cybersecurityCompliance: 'Intermediate',
    plannedCapacityExpansion: '20%',
    expectedNewMachineryPurchases: '3 units',
    newFacilityConstruction: 'Yes',
    longTermOpportunityScore: '8',
    customerBenchmarking: 'High potential customer',
    additionalComments: 'Investing in new facility'
  },
  {
    customerName: 'Anatolian Hazelnut Co.',
    typeOfBusiness: 'Nut Exporter',
    facilityType: 'Roasting Unit',
    productTypes: 'Roasting, Sorting, Packaging',
    installedProcessingCapacity: '110 Tons per Day',
    numberOfProcessingLines: '5',
    keyContactPerson: 'Mehmet Demir',
    designationRole: 'Export Director',
    emailAddress: 'm.demir@anatolianhazelnut.com',
    phoneWhatsAppNumber: '+90 456 123 4567',
    linkedInProfile: 'linkedin.com/in/mehmetdemir',
    websiteUrl: 'www.anatolianhazelnut.com',
    annualEquipmentBudget: '$1,100,000',
    preferredProcurementModel: 'EPC Contractor',
    averageProcurementCycle: '13 weeks',
    replacementCycle: '8 years',
    levelOfAutomation: 'Fully Automatic',
    percentagePLCSCADA: '85%',
    dataIntegrationScore: '8',
    predictiveMaintenance: 'High',
    cybersecurityCompliance: 'Advanced',
    plannedCapacityExpansion: '28%',
    expectedNewMachineryPurchases: '4 units',
    newFacilityConstruction: 'Yes',
    longTermOpportunityScore: '9',
    customerBenchmarking: 'Strategic customer',
    additionalComments: 'Major export growth planned'
  },
  {
    customerName: 'Willamette Valley Hazelnuts',
    typeOfBusiness: 'Hazelnut Processor',
    facilityType: 'Processing Plant',
    productTypes: 'Cleaning, Shelling',
    installedProcessingCapacity: '55 Tons per Day',
    numberOfProcessingLines: '3',
    keyContactPerson: 'Robert Williams',
    designationRole: 'Owner & CEO',
    emailAddress: 'r.williams@willamettehazelnut.com',
    phoneWhatsAppNumber: '+1 503 456 7890',
    linkedInProfile: 'linkedin.com/in/robertwilliams',
    websiteUrl: 'www.willamettevalleyhazelnuts.com',
    annualEquipmentBudget: '$550,000',
    preferredProcurementModel: 'OEM Distributor',
    averageProcurementCycle: '7 weeks',
    replacementCycle: '6 years',
    levelOfAutomation: 'Semi Automatic',
    percentagePLCSCADA: '60%',
    dataIntegrationScore: '6',
    predictiveMaintenance: 'Medium',
    cybersecurityCompliance: 'Intermediate',
    plannedCapacityExpansion: '16%',
    expectedNewMachineryPurchases: '2 units',
    newFacilityConstruction: 'No',
    longTermOpportunityScore: '7',
    customerBenchmarking: 'High potential customer',
    additionalComments: 'Family-owned business'
  },
  {
    customerName: 'European Nut Solutions',
    typeOfBusiness: 'Food Ingredient',
    facilityType: 'Processing Plant',
    productTypes: 'Cleaning, Shelling, Roasting, Grinding',
    installedProcessingCapacity: '140 Tons per Day',
    numberOfProcessingLines: '6',
    keyContactPerson: 'Hans Mueller',
    designationRole: 'Technical Director',
    emailAddress: 'h.mueller@euronuts.de',
    phoneWhatsAppNumber: '+49 89 1234 5678',
    linkedInProfile: 'linkedin.com/in/hansmueller',
    websiteUrl: 'www.europeannutsolutions.de',
    annualEquipmentBudget: '$1,800,000',
    preferredProcurementModel: 'EPC Contractor',
    averageProcurementCycle: '15 weeks',
    replacementCycle: '9 years',
    levelOfAutomation: 'Fully Automatic',
    percentagePLCSCADA: '92%',
    dataIntegrationScore: '9',
    predictiveMaintenance: 'High',
    cybersecurityCompliance: 'Advanced',
    plannedCapacityExpansion: '24%',
    expectedNewMachineryPurchases: '5 units',
    newFacilityConstruction: 'Yes',
    longTermOpportunityScore: '10',
    customerBenchmarking: 'Premium strategic partner',
    additionalComments: 'Industry leader with advanced automation'
  }
]

interface PropositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Proposition({ title, isOpen, onToggle, children }: PropositionProps) {
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
  const [openProposition, setOpenProposition] = useState<number | null>(1)

  const toggleProposition = (num: number) => {
    setOpenProposition(openProposition === num ? null : num)
  }

  // Customer Information header cells
  const renderCustomerInfoHeaders = () => (
    <>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Customer Name/Company Name</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Type of Business</div>
        <div className="font-normal text-[10px] text-gray-600">(Hazelnut Processor, Nut Exporter, Food Ingredient)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Facility Type</div>
        <div className="font-normal text-[10px] text-gray-600">[Processing Plant, Roasting Unit, Packaging]</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Product Types Processed</div>
        <div className="font-normal text-[10px] text-gray-600">(Cleaning, Shelling, Sorting)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Installed Processing Capacity</div>
        <div className="font-normal text-[10px] text-gray-600">(Tons per Day or Tons per Year)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Number of Processing Lines</div>
      </th>
    </>
  )

  // Contact Details header cells
  const renderContactHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/Whats App Number</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
    </>
  )

  // Procurement & Purchase Metrics headers
  const renderProcurementHeaders = () => (
    <>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Annual Equipment Purchase Budget (USD)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Preferred Procurement Model</div>
        <div className="font-normal text-[10px] text-gray-600">(OEM Distributor, EPC Contractor)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Average Procurement Cycle (Weeks)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Replacement Cycle (Years)</div>
      </th>
    </>
  )

  // Digital & Technology Adoption Metrics headers
  const renderDigitalTechHeaders = () => (
    <>
      <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Level of Automation</div>
        <div className="font-normal text-[10px] text-gray-600">(Manual, Semi Automatic, Fully...)</div>
      </th>
      <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Percentage of Lines with PLC or SCADA Control</div>
      </th>
      <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Data Integration Capabilities</div>
        <div className="font-normal text-[10px] text-gray-600">Score from 1 to 10</div>
      </th>
      <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Predictive Maintenance Tools Adoption</div>
        <div className="font-normal text-[10px] text-gray-600">(Low, Medium, High)</div>
      </th>
      <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Cybersecurity and Data Compliance Readiness</div>
        <div className="font-normal text-[10px] text-gray-600">(Basic, Intermediate, Advanced)</div>
      </th>
    </>
  )

  // Future Demand & Expansion Metrics headers
  const renderFutureExpansionHeaders = () => (
    <>
      <th className="bg-[#FFE4E1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Planned Capacity Expansion in Next 12 Months</div>
        <div className="font-normal text-[10px] text-gray-600">(Percentage increase)</div>
      </th>
      <th className="bg-[#FFE4E1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Expected New Machinery Purchases in Next Year</div>
      </th>
      <th className="bg-[#FFE4E1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>New Facility Construction Planned</div>
        <div className="font-normal text-[10px] text-gray-600">(Yes or No)</div>
      </th>
      <th className="bg-[#FFE4E1] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Long Term Opportunity Score</div>
        <div className="font-normal text-[10px] text-gray-600">(1 to 10)</div>
      </th>
    </>
  )

  // CMI Insights headers
  const renderCMIHeaders = () => (
    <>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Customer Benchmarking Summary</div>
        <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Additional Comments/Notes by CMI team</div>
      </th>
    </>
  )

  // Customer Information data cells
  const renderCustomerInfoCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typeOfBusiness}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.facilityType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.productTypes}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.installedProcessingCapacity}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.numberOfProcessingLines}</td>
    </>
  )

  // Contact Details data cells
  const renderContactCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designationRole}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneWhatsAppNumber}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
      </td>
    </>
  )

  // Procurement data cells
  const renderProcurementCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.annualEquipmentBudget || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredProcurementModel || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.averageProcurementCycle || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.replacementCycle || '-'}</td>
    </>
  )

  // Digital & Tech data cells
  const renderDigitalTechCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.levelOfAutomation || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.percentagePLCSCADA || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.dataIntegrationScore || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.predictiveMaintenance || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.cybersecurityCompliance || '-'}</td>
    </>
  )

  // Future Expansion data cells
  const renderFutureExpansionCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.plannedCapacityExpansion || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.expectedNewMachineryPurchases || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.newFacilityConstruction || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.longTermOpportunityScore || '-'}</td>
    </>
  )

  // CMI Insights data cells
  const renderCMICells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking || '-'}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments || '-'}</td>
    </>
  )

  // Proposition 1 Table - Customer Information (6) + Contact Details (6) = 12 columns
  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
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

  // Proposition 2 Table - Customer Info (6) + Contact (6) + Procurement (4) = 16 columns
  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Purchase Metrics
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProcurementHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProcurementCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 Table - All sections: Customer Info (6) + Contact (6) + Procurement (4) + Digital (5) + Future (4) + CMI (2) = 27 columns
  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Purchase Metrics
            </th>
            <th colSpan={5} className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Digital & Technology Adoption Metrics
            </th>
            <th colSpan={4} className="bg-[#FFE4E1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Future Demand & Expansion Metrics
            </th>
            <th colSpan={2} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProcurementHeaders()}
            {renderDigitalTechHeaders()}
            {renderFutureExpansionHeaders()}
            {renderCMIHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProcurementCells(customer)}
              {renderDigitalTechCells(customer)}
              {renderFutureExpansionCells(customer)}
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

      <Proposition
        title="Proposition 1 - Basic"
        isOpen={openProposition === 1}
        onToggle={() => toggleProposition(1)}
      >
        {renderProposition1Table()}
      </Proposition>

      <Proposition
        title="Proposition 2 - Advanced"
        isOpen={openProposition === 2}
        onToggle={() => toggleProposition(2)}
      >
        {renderProposition2Table()}
      </Proposition>

      <Proposition
        title="Proposition 3 - Premium"
        isOpen={openProposition === 3}
        onToggle={() => toggleProposition(3)}
      >
        {renderProposition3Table()}
      </Proposition>
    </div>
  )
}
