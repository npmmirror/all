### process

```
process.nextTick(function () {
    console.log('nextTick');
});
```
process.stdin.on('data',function(data){
    console.log(data) //<Buffer e6 9d a8 e5 86 b2 e5 a4 9a 0a>
});
��Ҫת���ַ�������������ʶ��
process.stdin.on('data',function(data){
    console.log(data.toString())
});
//�����̨����� console.log���õľ����������
process.stdout.write('hello')
### �ӽ��� spawn ����Ĵ������� ���޷����еĲ�֪��
##### һ����Ǽ���data�¼� ����̨������¼�   
```
var cp = require('child_process');
var cat = cp.spawn('cat');
cat.stdin.on('data', function(d) {
    console.log(d.toString());
});
cat.on('exit', function() {
    console.log('kthxbai');
});
cat.stdout.write('meow');
cat.stdin.end();

```