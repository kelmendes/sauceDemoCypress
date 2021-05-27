
Then(/^Devo ser exibido um alerta que o esse usuario está bloqueado ou usuario e ou senha está errado$/, () => {
	cy.get('h3[data-test=error]')
    .invoke('text')
    .should('be.equal', 'Epic sadface: Username and password do not match any user in this service')
});
