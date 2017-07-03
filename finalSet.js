module.exports = function(app) {
    app.get("/MARIO", function(request, response) {
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            return response.render("pages/newgameultra/stage2");
        }
        response.redirect('/404');
    });

    app.get("/DEFENESTRATE", function(request, response) {
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            return response.render("pages/newgameultra/stage3");
        }
        response.redirect('/404');
    });

    app.get("/GROUNDBREAKING", function(request, response) {
        var arrs = [
            "[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]"
        ];
        var item = arrs[Math.floor(Math.random()*arrs.length)];
        if(request.cookies.GO_FOR_THE_GOOD_ENDING) {
            return response.render("pages/newgameultra/stage4", {arr: item});
        }
        response.redirect('/404');
    });

    app.get('/DIRIGIBLE/MARIO', function(request, response) {
        response.redirect('/MARIO');
    });

    app.get('/MARIO/DEFENESTRATE', function(request, response) {
        response.redirect('/DEFENESTRATE');
    });

    app.get('/DEFENESTRATE/GROUNDBREAKING', function(request, response) {
        response.redirect('/GROUNDBREAKING');
    });

    app.get('/MARIO/PMOSH.rar', function(request, response) {
        response.redirect('/PMOSH.rar');
    });
}