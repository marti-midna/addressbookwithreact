
 export const getContacts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    
    data.forEach(data => {
        data[`favorite`] = false;
    });
    // console.log(data);
    return data;
    
}