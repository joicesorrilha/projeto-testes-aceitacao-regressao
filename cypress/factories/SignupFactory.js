//criar modulo

var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11954396447',
            address: {
                postalcode: '07114-000',
                street: 'Avenida Doutor Renato de Andrade Maia',
                number: '1000',
                details: 'sala 20',
                district: 'Jardim Maia',
                city_state: 'Guarulhos/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}
