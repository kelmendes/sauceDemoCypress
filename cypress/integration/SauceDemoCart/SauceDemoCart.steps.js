
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
