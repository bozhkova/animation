(function () {
    var paper = Raphael(0, 0, 1024, 500);
    var rect = paper.rect(0, 0, 1024, 500);
    rect.attr({
        fill: '#9290FF',
    });

    function drowBricks() {
        for (var i = 0; i < 1024 / 30; i++) {
            var rectBr0 = paper.rect(i*30, 470, 28, 28);
            rectBr0.attr({
                fill: '#994E00',
                stroke: '#110800',
                'stroke-width': 2
            });
            var rectBr1 = paper.rect(i * 30, 440, 28, 28);
            rectBr1.attr({
                fill: '#994E00',
                stroke: '#110800',
                'stroke-width': 2
            });
        }
    }
    drowBricks();

    var path = paper.path('M 380 440 c 40 -50 80 -50 120 0');
    path.attr({
        stroke: '#110800',
        fill: '#0D9300',
        'stroke-width': 2
    });

    var path1 = paper.path('M 580 440 c 100 -280 180 -280 320 0');
    path1.attr({
        stroke: '#110800',
        fill: '#0D9300',
        'stroke-width': 2
    });

    var cloud1 = paper.path('M 180 40 c 4 -30 80 -30 84 0');
    cloud1.attr({
        stroke: '#110800',
        fill: 'white',
        'stroke-width': 2
    });

    var cloud2 = paper.path('M 180 40 c 4 30 80 30 84 0');
    cloud2.attr({
        stroke: '#110800',
        fill: 'white',
        'stroke-width': 2
    });

    var column1 = paper.rect(30, 440, 60, 60);
    column1.attr({
        fill: '#88D800',
        stroke: '#110800',
        'stroke-width': 2
    });
    var col1Top = paper.rect(28, 420, 64, 20);
    col1Top.attr({
        fill: '#88D800',
        stroke: '#110800',
        'stroke-width': 2
    });

    var column2 = paper.rect(330, 440, 60, 60);
    column2.attr({
        fill: '#88D800',
        stroke: '#110800',
        'stroke-width': 2
    });
    var col2Top = paper.rect(328, 420, 64, 20);
    col2Top.attr({
        fill: '#88D800',
        stroke: '#110800',
        'stroke-width': 2
    });

    var men = paper.image('images/men.png', 835, 400, 80, 40);

}());
