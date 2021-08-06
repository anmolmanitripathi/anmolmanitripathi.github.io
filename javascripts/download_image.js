$('document').ready(function () {
    $("#Download-Button").click(function(){
        document.getElementById("Download-Button").download = "image.png";
        document.getElementById("Download-Button").href = document.getElementById("Canvas-Output").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    });
});