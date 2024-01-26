let canvas = document.querySelector('#canvas #viewer');
let viewer = new JSC3D.Viewer(canvas);

let colorSimulator = {
    index: 0,
    models: modelsArray,

    next: function() {
        this.index++;
        if (this.index > (this.models.length-1))
            this.index = 0;
        viewer.replaceSceneFromUrl(this.models[this.index]);
    },

    prev : function() {
        this.index--;
        if (this.index < 0)
            this.index = (this.models.length-1);
        viewer.replaceSceneFromUrl(this.models[this.index]);
    },
    update : function(hexa, code) {
        document.querySelector('#canvas .colorcode').style.backgroundColor = hexa;
        document.querySelector('#canvas .colorcode').innerHTML = (code ? '<p>'+hexa+'</p><p>'+code+'</p>' : '<p>'+hexa+'</p><p>MB-PE-C'+hexa.replace('#','')+'</p>');
        viewer.setParameter('ModelColor', hexa);
        viewer.init();
        viewer.update();
    },
    init : function(defaultColor='#fadf60',code='AM-MBG-PE-2302') {
        this.index = 0;
        viewer.setParameter('SceneUrl', this.models[0]);
        viewer.setParameter('InitRotationX', 0);
        viewer.setParameter('InitRotationY', 0);
        viewer.setParameter('InitRotationZ', 0);
        viewer.setParameter('ModelColor', defaultColor);
        viewer.setParameter('BackgroundColor1', '#B6B9B7');
        viewer.setParameter('BackgroundColor2', '#D1D4D1');
        viewer.setParameter('RenderMode', 'smooth');

        document.querySelector('#canvas .colorcode').style.backgroundColor = defaultColor;
        document.querySelector('#canvas .colorcode').innerHTML = '<p>'+defaultColor+'</p><p>'+code+'</p>';

        if (Modernizr.webgl) {
            viewer.setParameter('MipMapping', JSC3D.PlatformInfo.supportWebGL ? 'off' : 'on');
            viewer.setParameter('Renderer', 'webgl');
        }
        viewer.init();
        viewer.update();
    }
};

document.querySelector('#canvas .prev').addEventListener('click',function(){
    colorSimulator.prev();
});

document.querySelector('#canvas .next').addEventListener('click',function(){
    colorSimulator.next();
});