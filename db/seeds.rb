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
  2.upto(500) do | line |         #Start and end of rows you want to include
    db_column1 = ex.cell(line,'A')  #Column A in spreadsheet
    db_column2 = ex.cell(line,'B')
    db_column3 = ex.cell(line,'C')
    db_column4 = ex.cell(line,'D')
    db_column5 = ex.cell(line,'E')
    db_column6 = ex.cell(line,'F')
    db_column7 = ex.cell(line,'G')
    db_column8 = ex.cell(line,'H')
    db_column9 = ex.cell(line,'I')
    db_column10 = ex.cell(line,'J')

    x = FiscalYear.create(
      :db_column1 => fiscal_year,
      :db_column2 => receipts_current_dollars,
      :db_column2 => outlays_current_dollars,
      :db_column2 => surplus_deficit_current_dollars,
      :db_column2 => receipts_constant,
      :db_column2 => outlays_constant,
      :db_column2 => surplus_deficit_constant,
      :db_column2 => gdp_receipts,
      :db_column2 => gdp_outlays,
      :db_column2 => gdp_surplus_deficit)
  end
end
