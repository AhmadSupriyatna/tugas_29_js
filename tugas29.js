function tugasDuaSembilan(){
    let data = "Belajar menimba ikmu programing bersama Niomic";
    let data2 = new RegExp("Niomic");
    return data2.exec(data);
}
console.log(tugasDuaSembilan())