// TIP: Function-based components are more popular

// PascalCasing -> Capitalizar cada palavra
function Message() {
    const name = 'Dude';
    // JSX: JavaScript XML - Este código será compilado para JS
    // Podemos utilizar variáveis e funções utilizando {} e apresentar 
    //o resultado somente se uma condição se satisfazer
    if (name)
        return <h1>This can't be good for me but I feel great. -{name}</h1>;
    return <h1>This can't be good for me but I feel great. -Someone</h1>
}

export default Message;