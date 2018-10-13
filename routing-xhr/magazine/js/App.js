class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/routing-xhr/magazine/"
                        component={Homepage}
                    />
                    <Route
                        exact
                        path="/routing-xhr/magazine/index.html"
                        component={Homepage}
                    />
                    <Route
                        exact
                        path="/routing-xhr/magazine/subscribtion"
                        component={SubscribtionPage}
                    />
                    <Route
                        path="/routing-xhr/magazine/article"
                        component={ArticlePage}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}
