import customData from 'App/json/static_data.json';

let api = {
  fetchData() {
    return Promise.resolve(customData.value);

    /* Simulating Async */
    // return new Promise(function(resolve){
    //   setTimeout(function(){
    //     resolve(customData.value);
    //   }, 1000);
    // });

    // fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    // .then((response) => { return response.json()})
    // .then((data) => console.log('data:', data))
    // .then((data) => this.props.updateJokes(data.value))
  }
}

module.exports = api;
