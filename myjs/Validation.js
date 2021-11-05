function Validation (){
    this.checkEmpty = function(value , message , spanID){
        if (value.trim() != ""){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
             return false;
    }

    this.checkAcc = function(value , message , spanID , mangNV){
        var isExist = false;

        isExist = mangNV.some(function(nv){
           return value == nv.acc;
        })
        if(isExist){
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }else{
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

    }
    this.checkName = function(value , message, spanID){
        // Kiểu string
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
        // Đổi kiểu string sang RegExp
        var reg = new RegExp(pattern);
        if(reg.test(value)){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }else{
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkEmail = function(value , message, spanID){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkPass = function(value , message, spanID){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(pattern.test(value)){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkSeclect = function(selectID , message, spanID){
        if(document.getElementById(selectID).selectedIndex != 0){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkLuong = function(value , message , spanID){
        if(value >= 1000000 && value <= 20000000){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
   this.checkTime = function(value , message , spanID){
       if(value >= 80 && value <= 200){
        document.getElementById(spanID).innerHTML = " ";
        document.getElementById(spanID).style.display = "none";
        return true;
       }
       document.getElementById(spanID).innerHTML = message;
       document.getElementById(spanID).style.display = "block";
       return false;
   }
}