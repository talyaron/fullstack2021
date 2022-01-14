/// ------- 1 ------- ///
// interface Object{
//     a?:number;
//     b?:number;
//     c?:number;
// }
var obj = {};
var keys = ['Author', 'PYear', 'Pages'];
var values = ['J K Rowlings', 2001, 430];
var formObj = {};
for (var i = 0; i < keys.length; i++) {
    formObj[keys[i]] = values[i];
}
console.log(formObj);
