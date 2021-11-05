var dsnv = new DanhSachNhanVien();
var validation = new Validation();
function getELE(id){
   return document.getElementById(id);
}
function setLocalStorage(mangNV){
   // localStorage: oject có sẵn của JS
   // JSON.stringify chuyển biến JS sang JSON
   localStorage.setItem("DSNV",JSON.stringify(mangNV));
}
// Lấy danh sách từ kho offline
function getLocalStorage(){
   // Lấy lên giá trị là JSON
   if(localStorage.getItem("DSNV")!= null){
       dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
       hienThiTable(dsnv.mangNV)
   }
}
getLocalStorage();
function layThongTinNV(){
    var acc = getELE("tknv").value ;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid= true;

   isValid &= validation.checkEmpty(acc , "Tài khoản không được để trống", "tbTKNV") && validation.checkAcc(acc , "Tài khoản không được trùng",
   "tbTKNV",dsnv.mangNV);
   isValid &= validation.checkEmpty(ten , "Tên không được để trống " ,"tbTen" ) && validation.checkName(ten , "Tên không hợp lệ" , "tbTen");
   isValid &= validation.checkEmpty(email , "Email không được để trống " ,"tbEmail" ) && validation.checkEmail(email , "Email không hợp lệ" , "tbEmail");
   isValid &= validation.checkEmpty(pass , "Mật khẩu không được để trống " ,"tbMatKhau" ) && validation.checkPass(pass , "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt" , "tbMatKhau");
   isValid &= validation.checkEmpty(ngayLam , "Ngày làm không được để trống " ,"tbNgay" );
   isValid &= validation.checkEmpty(luongCB, "Lương không được để trống", "tbLuongCB") && validation.checkLuong(luongCB , "Luong không hợp lệ" , "tbLuongCB");
   isValid &= validation.checkSeclect("chucvu" , "Bạn chưa chọn chức vụ", "tbChucVu");
   isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống", "tbGiolam") && validation.checkTime(gioLam , "Giờ làm không hợp lệ" , "tbGiolam");
   if(isValid){
      var nv = new NhanVien(acc.trim(), ten.trim() , email, pass , ngayLam,Number(luongCB), chucVu,gioLam);
      nv.loaiNV = nv.xepLoai(gioLam);
      nv.tongLuong = nv.tinhLuong(chucVu);
      dsnv.themNV(nv);
      hienThiTable(dsnv.mangNV);
      setLocalStorage(dsnv.mangNV);
   }
}

function hienThiTable(mangNV){
   var content = "";
   for(var i =0 ; i<mangNV.length ; i++){
       var trNV = `
       <tr>
       <td>${mangNV[i].acc}</td>
       <td>${mangNV[i].tenNV}</td>
       <td>${mangNV[i].email}</td>
       <td>${mangNV[i].ngayLam}</td>
       <td>${mangNV[i].chucVu}</td>
       <td>${mangNV[i].tongLuong}</td>
       <td>${mangNV[i].loaiNV}</td>
       <td>
       <button onclick="xoaNhanVien('${mangNV[i].acc}')">Xoa</button>
       <button onclick="xemChiTiet('${mangNV[i].acc}')" data-target="#myModal" data-toggle="modal">Xem</button>
       </td>
       </tr>
       `;
       content += trNV;
   }
   getELE("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(acc){
   dsnv.xoaNV(acc);
   setLocalStorage(dsnv.mangNV);
   hienThiTable(dsnv.mangNV);
}
function xemChiTiet(acc){
   var nvTim = dsnv.layChiTiet(acc);
   getELE("tknv").disabled = true;
   if(nvTim != undefined){
      getELE("name").value = nvTim.tenNV;
      getELE("email").value = nvTim.email;
      getELE("password").value = nvTim.pass;
      getELE("datepicker").value = nvTim.ngayLam;
      getELE("luongCB").value = nvTim.luongCB;
      getELE("chucvu").value = nvTim.chucVu;
      getELE("gioLam").value = nvTim.gioLam;
   }
}
function resetForm(){
   getELE("formQLNV").reset();
   getELE("tknv").disabled = false;
}
function capNhat(mangNV){
   var acc = getELE("tknv").value ;
   var ten = getELE("name").value;
   var email = getELE("email").value;
   var pass = getELE("password").value;
   var ngayLam = getELE("datepicker").value;
   var luongCB = getELE("luongCB").value;
   var chucVu = getELE("chucvu").value;
   var gioLam = getELE("gioLam").value;

   var nv = new NhanVien(acc, ten , email, pass , ngayLam,Number(luongCB), chucVu,gioLam);
   nv.loaiNV = nv.xepLoai(gioLam);
   nv.tongLuong = nv.tinhLuong(chucVu);
   dsnv.capNhatNV(nv);
   
   hienThiTable(dsnv.mangNV);
   setLocalStorage(dsnv.mangNV);
}
getELE("searchName").onkeyup = function(){
   var tuKhoa = getELE("searchName").value;
   var mangTK = dsnv.timNV(tuKhoa);
   hienThiTable(mangTK);
}