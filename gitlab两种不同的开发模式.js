��������1��
��Ҫ fork ���뵽�Լ���˽�вֿ���
Ȼ��git clone  
���Դ���һ����֧��Ҳ���Բ�������֧ 
Ȼ�����Լ���˽�вֿ�����¹��ܵĿ����� Bug ���޸�


Ȼ���ύ���Լ��ֿ� ����merge request �� ���ֿ⵽ ��dev��֧
���� ���Լ���dev��֧�� �˼ҵ�dev��֧

��������� ���˵Ĳֿ���Զ������ֱ���ύ�����Ǽ�������� merge request�Ļ�������Ҫ��ô������

�ڶ��֣�

���ھ�һ���ֿ⣬���Ǳ��˵Ĳֿ⣬Ȼ��git clone ������  master dev 
���1:clone �����Ĵ���֮��master �����Ļ� �����Լ�����dev  Ȼ��

git checkout dev 
 dev:  git rebase master 
get rebase --abort �����ͻ

������dev�Ͽ���  ���� ���Ա�֤ mater����Զ������

������֮�� git checkout master  git merge dev 
����  ok
��Ȼ ���Ҳ����Ҫ���� ��ͻ 
 git push
