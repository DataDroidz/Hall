(function () {

    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loader= document.querySelector("#loader");
    var loaderFill= document.querySelector("#fill");

    function onProgress(progress) {
        loaderFill.style.width = progress * 100 + "%";
    }

    function onComplete(unityInstance) {
        loader.remove();
    }
    function onWindowResize() {
        var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        canvas.height=height;
        canvas.width=width;
    }

    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/New_Hall.loader.js";
    var config = {
        dataUrl: buildUrl + "/New_Hall.data",
        frameworkUrl: buildUrl + "/New_Hall.framework.js",
        codeUrl: buildUrl + "/New_Hall.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: " ",
        productName: "The Hall of Droidz",
        productVersion: "0.5",
    };

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(canvas, config, onProgress)
            .then(onComplete)
            .catch((message) => {
                alert(message);
        });
    };
    document.body.appendChild(script);

    window.addEventListener('resize', onWindowResize);
    onWindowResize();

})();
