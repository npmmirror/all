console.log(process.cwd());
//���滹��û��ʵ�� ���ǽ���  �����ӽ���
process.stdin.on('data',function(data){
console.log(data)
})
//  ���Դ���һ��writeStream  createWriteStream  �и�write end ��������
//process.stdout.write('hello');
// �������ӽ���
var child_process=require('child_process')
