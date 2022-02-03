/*this file is used for utilities*/
/*basically one func inclueded in this file is sorting*/

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.cases > b.cases){
            return -1
        }
        else{
            return 1
        }
         

    })
    return sortedData;

    /*retrun sortedData.sort((a, b) => (a.cases > b.cases ? -1: 1));
      ^^^performs the same thing  */
} 
/*essentially a func that take some data and copy out the parameter that we passed in into an array,
assigning it to a const before sorting it, using a ES6 func sort(), which sorts two compenents,
hence using that it will go through an sort out all of 'a'(-1) before returing the sorted data array woth countries sorted */

