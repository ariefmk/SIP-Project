let  fetchData = (token) => {
    let network = 'public'
    let asset = token+"-GBBOA35SM4LAIOA36GAIZPVWM6V6LQFDSR7SJNS6OE6WC4F7J2HG2PDB"
    fetch(`https://api.stellar.expert/explorer/${network}/asset/${asset}`)
        .then(resp => console.log(resp))
}
