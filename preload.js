window.onload = function() {
    if (!localStorage.getItem('servers')) {
        const defaultServer = [{
            name: "UMM Clan",
            host: "play.drev.0x.no",
            port: 8080,
            password: ""
        }];
        localStorage.setItem('servers', JSON.stringify(defaultServer));
    }
};
