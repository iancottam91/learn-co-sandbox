
function getPrice(selection) {
  switch (selection) {
    case 'Mars':
      return 100;
    case 'Crisps':
      return 75;
    case 'Water':
      return 50;
    default:
     return 0;
  }
}

const price = getPrice('Mars');
alert(price);


