import SignupPage from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'


describe('Signup', () => {

 
    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d

    //     })
    // })

    var signup = new SignupPage()

    it('User should be deliver', function () {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillform(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '99999999999'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function () {

        var deliver = SignupFactory.deliver()

        deliver.email = 'user.123.com'

        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
   
    })

    context('Required fields', function(){

        const messages = [
            {field: 'name', output:'É necessário informar o nome'},
            {field: 'cpf', output:'É necessário informar o CPF'},
            {field: 'email', output:'É necessário informar o email'},
            {field: 'postalcode', output:'É necessário informar o CEP'},
            {field: 'number', output:'É necessário informar o número do endereço'},
            {field: 'delivery_method', output:'Selecione o método de entrega'},
            {field: 'cnh', output:'Adicione uma foto da sua CNH'},
        ]
        before(function(){
            signup.go()
            signup.submit()
        })
        messages.forEach(function(msg){
            it(`${msg.fiel} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })

// Teste de forma mais simples de verificação de campos obrigatórios.
    // it('Required fields', function() {     
    //     signup.go()
    //     signup.submit()
    //     signup.alertMessageShouldBe('É necessário informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o email')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })

})