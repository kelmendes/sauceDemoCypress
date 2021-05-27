Feature: Realizar operações para validar o carrinho

    Background: Login Aplicação
        Given Dado que consigo   carregar a aplicação

    @CartAddItems
    Scenario: Adicionando Itens ao carrinho de compras
        And Informo o nome de "standard_user" e "secret_sauce" válidos
        And Clico no botão login
        And Devo ser redirecionado para tela inicial do Digital
        And Adiciono os itens clicando no botão Add to Cart
        When O contado de itens no carrinho deve mudar
        Then Então deve fazer logout

    @CartValidateItems
    Scenario: Validando Itens ao carrinho de compras
        And Informo o nome de "standard_user" e "secret_sauce" válidos
        And Clico no botão login
        And Que o usuário tenha adicionado todos os itens ao carrinho
        When Validar que todos os estão adicionados
        Then Então deve fazer logout
    
    @CartCheckout
    Scenario: Proceder para checkout
        And Informo o nome de "standard_user" e "secret_sauce" válidos
        And Clico no botão login
        And Que o usuário tenha adicionado todos os itens ao carrinho
        When Validar que todos os estão adicionados
        And Clico no botão de checkout
        And Informo os dados básicos para realizar o checkout
        And confirmo a forma de pagamento, entrega e total da compra
        When Devo ser redirecionado para tela que minha ordem vai ser despachada
        Then Então deve fazer logout
    
    