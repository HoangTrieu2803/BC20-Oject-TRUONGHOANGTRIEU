function DanhSachNhanVien(){
    this.mangNV = [];
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    var viTri = -1;

    this.timViTri = function(acc){
        this.mangNV.map(function(nv,index){
            if(nv.acc == acc){
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoaNV = function(acc){
        var viTri = this.timViTri(acc);
        if(viTri > -1){
            this.mangNV.splice(viTri,1);
        }
    }
    this.layChiTiet = function(acc){
        var viTri = this.timViTri(acc);
        if(viTri > -1){
            return this.mangNV[viTri];
        }else{
            console.log("ko tim thay");
        }
    }
    this.capNhatNV = function(nv){
        var viTri = this.timViTri(nv.acc);
        if(viTri > -1){
            this.mangNV[viTri] = nv;
        }else{
            console.log("ko tim thay");
        }
    }
    this.timNV = function(tuKhoa){
        var mangTK = [];
        var tk = tuKhoa.trim().toLowerCase();
        this.mangNV.map(function(nv){
            var loaiNV = nv.loaiNV.toLowerCase();
            if(loaiNV.indexOf(tk) > -1){
                mangTK.push(nv);
            }
        });
        return mangTK;
    }
}