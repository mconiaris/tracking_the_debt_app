# This file should contain all the record creation
# needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed
# (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' },
#   { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def fetch_excel_data
  ex = Roo::Excel.new("public/fed_receipt_sum_historical.xls")
  ex.default_sheet = ex.sheets[0] #Mention the sheet number (0 is the first sheet, 1 is second sheet, etc.)
  2.upto(80) do | line |         #Start and end of rows you want to include
    fiscal_year                     = ex.cell(line,'A')  #Column A in spreadsheet
    receipts_current_dollars        = ex.cell(line,'B')
    outlays_current_dollars         = ex.cell(line,'C')
    surplus_deficit_current_dollars = ex.cell(line,'D')
    receipts_constant               = ex.cell(line,'E')
    outlays_constant                = ex.cell(line,'F')
    surplus_deficit_constant        = ex.cell(line,'G')
    gdp_receipts                    = ex.cell(line,'H')
    gdp_outlays                     = ex.cell(line,'I')
    gdp_surplus_deficit             = ex.cell(line,'J')

    x = FiscalYear.create(
      :fiscal_year                      => fiscal_year,
      :receipts_current_dollars         => receipts_current_dollars,
      :outlays_current_dollars          => outlays_current_dollars,
      :surplus_deficit_current_dollars  => surplus_deficit_current_dollars,
      :receipts_constant                => receipts_constant,
      :outlays_constant                 => outlays_constant,
      :surplus_deficit_constant         => surplus_deficit_constant,
      :gdp_receipts                     => gdp_receipts,
      :gdp_outlays                      => gdp_outlays,
      :gdp_surplus_deficit              => gdp_surplus_deficit
    )
  end
end

fetch_excel_data();
