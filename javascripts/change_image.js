function set_max(){
    var img = document.getElementById("View-Image");
    img.onload = function(){
        var maxWidth = img.naturalWidth;
        var maxHeight = img.naturalHeight;
        var minHeight = document.getElementById("Get-Height").min;
        var minWidth = document.getElementById("Get-Height").min;
        document.getElementById("Get-Height").max = maxHeight;
        document.getElementById("Get-Width").max = maxWidth;
        document.getElementById("Height-Info").innerHTML = "Min: "+minHeight+"px, Max: "+maxHeight+"px";
        document.getElementById("Width-Info").innerHTML = "Min: "+minWidth+"px, Max: "+maxWidth+"px";
    }
}
$('document').ready(function () {
    $("#Upload-Button").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#View-Image').attr('src', e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
            set_max();
        }
    });
});