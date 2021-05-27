
Given(/^Dado que consigo   carregar a aplicação$/, () => {
	cy.visit('/');
});

And(/^Informo o nome de "([^"]*)" e "([^"]*)" válidos$/, (strNomeUsuario,strSenha) => {
	console.log(strNomeUsuario,strSenha);
    cy.get('#user-name').type(strNomeUsuario);
    cy.get('#password').type(strSenha);
});

And(/^Clico no botão login$/, () => {
	cy.get('#login-button').click();
});

When(/^Devo ser redirecionado para tela inicial do Digital$/, () => {
	cy.get('.title')
    .invoke('text')
    .should('be.equal', 'Products');
});

Then(/^Então deve fazer logout$/, () => {
	cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});

