console.log(process.cwd());
//���滹��û��ʵ�� ���ǽ���  �����ӽ��� ��data �¼�����req �ɶ�����data�¼���end�¼�
//res�ǿ�д�������������� �ֱ���write ��end end����������д��������� ͬʱ����send ���������������Ϊexpress ����������е� ���кܶ���� body-parse cookie-parse �ٴ�˵�����ǲ������������������ڵ���ʽ��buffer
//���� ����ʹ�þ�̬ģ��Ļ����͵���Ҫʹ�� render�������
/**
 * ��ϰдһ��
 * app.set('view engine','html');
 * app.set('views',path.join(__dirname,));
 * app.engine('html',require('ejs').__express)
 * res.render('�ļ�������'��jsonData)
 */
/**
 *
 */
process.stdin.on('data',function(data){
console.log(data)
})
//  ���Դ���һ��writeStream  createWriteStream  �и�write end ��������
//process.stdout.write('hello');
// �������ӽ���
var child_process=require('child_process');
