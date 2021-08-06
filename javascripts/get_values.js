function alertFunction(value1, value2, value3){
    alert("Please select a value for "+ value2 +" that is no "+ value1 +" than "+ value3);
}

function resizeImage(reqHeight, reqWidth){
    let src = cv.imread('View-Image');
    let dst = new cv.Mat();
    let dsize = new cv.Size(reqHeight, reqWidth);
    // You can try more different parameters
    cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
    cv.imshow('Canvas-Output', dst);
    src.delete(); 
    dst.delete();
    document.getElementById("View-Resize-Image").scrollIntoView({behavior: 'smooth'});
}

$('document').ready(function () {
    $("#Resize-Button").click(function(){
        var reqHeight = parseInt(document.getElementById("Get-Height").value);
        var reqWidth =  parseInt(document.getElementById("Get-Width").value);
        var minHeight = parseInt(document.getElementById("Get-Height").min);
        var maxHeight = parseInt(document.getElementById("Get-Height").max);
        var minWidth =  parseInt(document.getElementById("Get-Width").min);
        var maxWidth =  parseInt(document.getElementById("Get-Width").max);
                
        if (reqHeight.length == 0  || reqWidth.length == 0){
            alert("Please enter both Height & Width");
        }
        else{
            if (reqHeight > maxHeight){
                alertFunction("More", "Height", maxHeight);
                console.log(reqHeight, maxHeight);
            }   
            else
            if (reqWidth > maxWidth){
                alertFunction("More", "Width", maxWidth);
            }
            else
            if (reqHeight < minHeight ){
                alertFunction("Less","Height", minHeight);
            }
            else
            if(reqWidth < minWidth){
                alertFunction("Less", "Width", minWidth);
            }
            else{
                resizeImage(reqHeight, reqWidth);
            }
        }
    });
});