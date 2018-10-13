const Main = withFetcher({
    url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=50',
    collName: 'logs',
})(App)
