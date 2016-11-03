module.exports = app => {
    const Domains = app.models.domains;
    app.get("/domains", (req, res) => {
        Domains.findAll({}, (domains) => {
            res.json({domains: domains});
        });    
    });
};