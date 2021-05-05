export default async function setParams(sheet, query) {
    
  const type = query.type;
  const name = query.name;
  const street = query.street;
  const city = query.city;
  const slug = query.slug;
  
  await sheet.loadCells('L1:L2');
  sheet.getCellByA1('L1').value = type;
  sheet.getCellByA1('L2').value = name;
  await sheet.saveUpdatedCells();

  await sheet.loadCells('N1:N2');
  sheet.getCellByA1('N1').value = street;
  sheet.getCellByA1('N2').value = city;
  await sheet.saveUpdatedCells();

  await sheet.loadCells('P1:P1');
  sheet.getCellByA1('P1').value = slug;
  await sheet.saveUpdatedCells();
}