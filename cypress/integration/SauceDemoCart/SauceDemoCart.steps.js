
And(/^Adiciono os itens clicando no botão Add to Cart$/, () => {

    var produtos =  ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 
    'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt'];
    for (var nomeProduto in produtos){
        var tempId = produtos[nomeProduto].replace(/\s/g, '-').toLowerCase();
        cy.get('#add-to-cart-'+tempId).click();
    };

});

When(/^O contado de itens no carrinho deve mudar$/, () => {

	cy.get('.shopping_cart_badge')
        .invoke('text')
        .should('be.equal', '5');

});

When(/^Que o usuário tenha adicionado todos os itens ao carrinho$/, () => {

    // repiticao de codigo - alterar depois 
	var produtos =  ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 
    'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt'];
    for (var nomeProduto in produtos){
        var tempId = produtos[nomeProduto].replace(/\s/g, '-').toLowerCase();
        cy.get('#add-to-cart-'+tempId).click();
    };

});

When(/^Validar que todos os estão adicionados$/, () => {

    cy.get('.shopping_cart_link').click();

    var produtos =  ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 
    'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt'];
    cy.get('.inventory_item_name').as('itensCarrinho')
    for (var nomeProduto in produtos){
        cy.get('@itensCarrinho')
            .contains(produtos[nomeProduto])
    };

});


And(/^Clico no botão de checkout$/, () => {
	cy.get('#checkout').click();
});

And(/^Informo os dados básicos para realizar o checkout$/, () => {
	cy.get('#first-name').type('Oliver');
    cy.get('#last-name').type('Queen');
    cy.get('#postal-code').type('55034290');
    cy.get('#continue').click();
});

When(/^confirmo a forma de pagamento, entrega e total da compra$/, () => {
	cy.get('#finish').click();
});


When(/^Devo ser redirecionado para tela que minha ordem vai ser despachada$/, () => {
	cy.get('.complete-header')
        .invoke('text')
        .should('be.equal', 'THANK YOU FOR YOUR ORDER');
});


