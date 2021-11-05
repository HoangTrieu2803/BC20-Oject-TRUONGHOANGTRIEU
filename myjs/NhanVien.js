function NhanVien(account, ten, email, pass, ngaylam, luongcb, chuc, giolam){
    // properties
    this.acc = account;
    this.tenNV = ten;
    this.email = email;
    this.pass = pass;
    this.ngayLam = ngaylam;
    this.luongCB = luongcb;
    this.chucVu = chuc;
    this.gioLam = giolam;
    this.tongLuong = 0;
    this.loaiNV = "";
    //method
    this.xepLoai = function(gioLam){
        if(gioLam >= 192){
            this.loaiNV = "Xuat sac";
        }else if(gioLam >= 176){
            this.loaiNV = "Gioi";
        }else if(gioLam >= 160){
            this.loaiNV = "Kha";
        }else{
            this.loaiNV = "Trung binh";
        }
        return this.loaiNV;
    }
    this.tinhLuong = function(chuc){
        if (chuc == "Sếp"){
            return (this.luongCB * 3);
        }else if (chuc =="Trưởng phòng"){
            return (this.luongCB *2);
        }else if(chuc == "Nhân viên"){
            return (this.luongCB *1);
        }else{
            return(this.luongCB *0);
        }
    }
}