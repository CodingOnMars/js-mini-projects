// Get company names
const getNames = (name) => {
  let names = [];

  if (name === 'first') {
    names = [
      'Tiny',
      'Face',
      'Modern',
      'Green',
      'American',
      'General',
      'i',
      'Bio',
      'Global',
      'Net',
      'Poor',
      'Evil',
      'Crypto',
      'Fire',
      'Cheat',
      'Dev',
      'Ad',
      'Space',
      'Banana',
      'Infinity',
      'AI',
      'Potato',
    ];
  }

  if (name === 'last') {
    names = [
      'Soft',
      'Tech',
      'Booking',
      'Pal',
      'Bank',
      'Energy',
      'Corp',
      'Med',
      'Ex',
      'Star',
      'Solutions',
      'Coffee',
      'Galaxy',
      'Networks',
      'Wall',
      'Tech',
      'Capital',
      'Standards',
      'Trend',
      'Systems',
      'Fix',
      'Coin',
    ];
  }

  return { data: names };
};

export default getNames;
