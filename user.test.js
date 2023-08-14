const axios = require('axios');

const baseUrl = 'https://petstore.swagger.io/v2';
describe("Customer API Testing", async () => {
    
    const newUser = {
        id: 123,
        username: 'JuanLu',
        firstName: 'Mayenco',
        lastName: 'Lopez',
        email: 'apiswagger@swagger.com',
        password: 'apiswagger',
        phone: '1234567890',
        status: 0
    };  

    it("Register user", async () => {
        await axios.post(`${baseUrl}/user`, newUser).then(response => {
            console.log('Usuario registrado:', response.data);
        })
    })
    it("Get user", async () => {
        await axios.get(`${baseUrl}/user/JuanLu`).then(response => {
            console.log('Usuario JuanLu:', response.data);
            })
            
        })

    it("Get sold pets", async () => {
        await axios.get(`${baseUrl}/pet/findByStatus?status=sold`).then(response => {
            const elementos = response.data; 
            const idNombreElementos = elementos.map(elemento => ({
                id: elemento.id,
                nombre: elemento.name
    })
    
    );
    
            console.log(idNombreElementos);  
            });
            })
                
        })
        


  