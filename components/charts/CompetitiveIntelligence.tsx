'use client'

interface ManufacturerData {
  manufacturer: string
  brands: string[]
  soldUnits2022: string
  soldUnits2023: string
  soldUnits2024: string
}

// Golf Cart Manufacturers Data with yearly breakdown
const manufacturerData: ManufacturerData[] = [
  {
    manufacturer: 'Club Car, LLC',
    brands: ['Club Car Carryall Series', 'Club Car Villager Series', 'Club Car Onward'],
    soldUnits2022: '12,450',
    soldUnits2023: '14,280',
    soldUnits2024: '16,520'
  },
  {
    manufacturer: 'Yamaha Motor Co., Ltd.',
    brands: ['Yamaha Drive2 Electric', 'Yamaha Drive2 Gas'],
    soldUnits2022: '9,850',
    soldUnits2023: '11,420',
    soldUnits2024: '13,180'
  },
  {
    manufacturer: 'Marshell Green Power',
    brands: ['Marshell DG Series', 'Marshell DH Series', 'Marshell Utility EV Series'],
    soldUnits2022: '7,320',
    soldUnits2023: '8,940',
    soldUnits2024: '10,650'
  },
  {
    manufacturer: 'E-Z-GO',
    brands: ['E Z GO RXV', 'E Z GO TXT', 'E Z GO Express Series'],
    soldUnits2022: '11,200',
    soldUnits2023: '12,850',
    soldUnits2024: '14,920'
  },
  {
    manufacturer: 'Guangdong Lvtong New Energy EV',
    brands: ['Lvtong LT A Series', 'Lvtong LT B Series', 'Lvtong Sightseeing EV Series'],
    soldUnits2022: '5,680',
    soldUnits2023: '7,240',
    soldUnits2024: '9,150'
  },
  {
    manufacturer: 'Garia A/S',
    brands: ['Garia Golf', 'Garia Via'],
    soldUnits2022: '2,450',
    soldUnits2023: '2,980',
    soldUnits2024: '3,540'
  },
  {
    manufacturer: 'STAR EV',
    brands: ['STAR EV Capella Series', 'STAR EV Sirius Series'],
    soldUnits2022: '4,120',
    soldUnits2023: '5,280',
    soldUnits2024: '6,450'
  },
  {
    manufacturer: 'Alke',
    brands: ['Alke ATX Series'],
    soldUnits2022: '1,850',
    soldUnits2023: '2,340',
    soldUnits2024: '2,920'
  },
  {
    manufacturer: 'Others',
    brands: ['Various Models'],
    soldUnits2022: '8,540',
    soldUnits2023: '9,820',
    soldUnits2024: '11,450'
  }
]

interface CompetitiveIntelligenceProps {
  height?: number
}

export function CompetitiveIntelligence({ height }: CompetitiveIntelligenceProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Competitive Intelligence 2022-2024</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white min-w-[250px]">
                Manufacturer
              </th>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-white min-w-[300px]">
                Key Golf Cart Brands and Models
              </th>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-white min-w-[100px]">
                2022
              </th>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-white min-w-[100px]">
                2023
              </th>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-white min-w-[100px]">
                2024
              </th>
            </tr>
          </thead>
          <tbody>
            {manufacturerData.map((manufacturer, index) => {
              const rowCount = manufacturer.brands.length
              return manufacturer.brands.map((brand, brandIndex) => (
                <tr key={`${index}-${brandIndex}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {brandIndex === 0 && (
                    <td
                      rowSpan={rowCount}
                      className="bg-[#87CEEB] border border-gray-300 px-4 py-2 text-sm text-black font-medium align-top"
                    >
                      {manufacturer.manufacturer}
                    </td>
                  )}
                  <td className="border border-gray-300 px-4 py-2 text-sm text-black text-center">
                    {brand}
                  </td>
                  {brandIndex === 0 && (
                    <>
                      <td
                        rowSpan={rowCount}
                        className="border border-gray-300 px-4 py-2 text-sm text-black text-center align-middle font-medium"
                      >
                        {manufacturer.soldUnits2022}
                      </td>
                      <td
                        rowSpan={rowCount}
                        className="border border-gray-300 px-4 py-2 text-sm text-black text-center align-middle font-medium"
                      >
                        {manufacturer.soldUnits2023}
                      </td>
                      <td
                        rowSpan={rowCount}
                        className="border border-gray-300 px-4 py-2 text-sm text-black text-center align-middle font-medium"
                      >
                        {manufacturer.soldUnits2024}
                      </td>
                    </>
                  )}
                </tr>
              ))
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompetitiveIntelligence
