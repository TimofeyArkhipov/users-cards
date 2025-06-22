export default function sorting(array, options){
 
    const sortedArray= [...array].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (options === 'asc') {
      return nameA > nameB ? 1 : nameA < nameB ? -1 : 0;
    } else {
      return nameA < nameB ? 1 : nameA > nameB ? -1 : 0;
    }
  });
 return sortedArray;
}




