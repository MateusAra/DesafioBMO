/// <reference types="Cypress"/>

describe('ControllerUser', () => {
    it('PostUser', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithArray',
            body: [
                    {
                      "id": 2,
                      "username": "Mateus",
                      "firstName": "MateusA",
                      "lastName": "Sousa",
                      "email": "teste2@gmail.com",
                      "password": "string2424",
                      "phone": "88999999999",
                      "userStatus": 1
                    }
                ]
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body.message).to.eq('ok')
        });
    });
    it('GetUser', () => {
        cy.request({
            method: 'GET',
            url:'https://petstore.swagger.io/v2/user/Mateus'
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body.lastName).to.eq('Sousa')
        });
    });
});

describe('ControllerPet',() => {
    it('PutPet', () => {
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 1,
                "category": {
                  "id": 1,
                  "name": "dogggggg"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 1,
                    "name": "string"
                  }
                ],
                "status": "available"
              }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        });
    });
    it('DeletePet', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/pet/2',
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        });
    })
});