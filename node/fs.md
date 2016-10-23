#### fs
fs.readFileSync('./age.txt','utf8');
fs.readFile('./age.txt', 'utf8', function (err, data) {});
fs.writeFileSync('./hello.txt',"xiaohong",{flag:'a'})
## ����һ���������ʽ��ֻ���Ӽ���Ŀ¼
fs.readFile()
fs.readdirSync()
```
var fs = require('fs');
var per = {};
//�����첽�ķ��������� ��index �� keys promise
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.name = data
    out()
});
fs.readFile('./name.txt', 'utf8', function (err, data) {
    per.age = data
    out()
});
function out() {
    if (Object.keys(per).length == 2) {
        console.log(per)
    }
}
var index = 0;
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.age = data
    index++
    out()
})
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.name = data
    index++
    out()
});
function out() {
    if (index == 2) {
        console.log(per)
    }
}
```
## д�ļ�����
 fs.writeFileSync()
 fs.appendFileSync()
```
//��ʹ��ͬҲ��д�뵫���ٴ�ִ�л���һ����
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});
//{flag:'a'}��ͬ��appendFile
fs.appendFileSync('./hello.txt',"���");//�����ظ����õķ���
//return O_TRUNC �ض� | O_CREAT ���� | O_WRONLY ֻд
```
##
 fs.exists �ļ��Ƿ����()bollean
 fs.existsSync �ļ��Ƿ����
 fs.mkdirSync  �����ļ�ͬ��
  fs.mkdir �����ļ��첽��
```
makeP('a/b/c/d');
function makeP(path){
    //��path��/�ķ�ʽ�ָ
    var arr = path.split('/');
    //��ԭ�������ͣ��ȡ���Ӧ��Ŀ¼������/
    for(var i = 1; i<=arr.length;i++){
       var curDir =  arr.slice(0,i).join('/');
        //�����ڴ���Ŀ¼֮ǰ��Ҫ�Ȳ鿴curDir�Ƿ����
       var flag = fs.existsSync(curDir);
        //flag��ʾ��ǰ�Ƿ����
        if(!flag)
        fs.mkdirSync(curDir);//����Ŀ¼
    }
}
```
##  ɾ���ļ� unlinkSync rmdirSync
fs.statSync()//�ж�Ŀ¼��״̬Ҫ��ȫĿ¼
stat.isDirectory() �Ƿ����ļ�����
stat.isFile() �Ƿ����ļ�
fs.rmdirSync() ɾ���ļ���
fs.unlinkSync() ɾ���ļ�
```
curArr.forEach(function (item) {

    var stat = fs.statSync('./dir/' + item);
    if (stat.isDirectory()) {
        console.log('./dir/' + item + "���ļ���");
        fs.rmdirSync('./dir/' + item);
    }
    if (stat.isFile()) {
        console.log('./dir/' + item + "���ļ�");
        fs.unlinkSync('./dir/' + item);
    }
});

```
## path
```
path.join('a','b','..')�������·��ƴ�����������Լ�ϵͳ�ķָ���
path.normalize('a////c////d///..//e/')�����Ϸ���·��ת���ɱ�׼·��
path.resolve����·��path.resolve('..','a.js/')
path.basename����ļ��Ļ�������
path.extname('b.png')
console.log(path.sep);���Ŀ¼�ָ��
console.log(path.delimiter); //����������mac����windows��ȡ���������ָ��� mac��ð�ţ�
```