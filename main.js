function code(cd) { if(cd.length%2 === 0) {
} else {cd+=" ";
}
return (new Int16Array((new TextEncoder()).encode(cd).buffer)).join("e");
}
    
function decode(cd) { 
var b = new Array();
var a = (new Int8Array(new Int16Array(cd.split("e")).buffer));
for(var i = 0; i<a.length; i++) {
b[i] = String.fromCharCode(a[i]);
}
return b.join("");
}
