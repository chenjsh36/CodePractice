[The position of a digital string in a infinite digital string](https://www.codewars.com/kata/582c1092306063791c000c00/train/javascript)
if 几个相邻数字组合
    找出第一个数字，计算在哪个位置
else
    计算出这个数字之前的所有数字组成的长度之和

几个相邻数字组合的情况：

1 最理想的情况，第一个和最后一个都没有被截取：'123', '1011', '99100', '100010001'

2 第一个被截取了，最后一个没有： '9100', '00101', '0010001'

3 最后一个被截取了： '891', '101', '9910', '989910'

4 前后都被截取了： '89910', '0010110210'


'92'

'9', '2' => 19 20
'92' => 92

9910

'99', '10' => 