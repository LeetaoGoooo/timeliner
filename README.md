# timeliner

时间轴插件

# Usage

## options

```shell
{
        contents: [
            {
                "date": "2017-05-04",
                "img": "source/imgs/star.svg",
                "content": "测试内容"
            }
        ]
}
```

参数

| Tables        | defualt        | remark  |
| ------------- |:-------------:| -----:|
| content     | {contents: [{"date": "2017-05-04","img": "source/imgs/star.svg","content": "测试内容"}]} | 默认时间轴内容 |

## html

```html
<div id = "timeliner">
</div>
```

## script

```html
<script src="../jquery-1.10.2.min.js"></script>
<script src="../src/timeliner.js"></script>
<script>
    var timeliner = $('#timeliner').timeliner();
</script>
```

## demo

[www.leetao94.cn/timeliner](http://www.leetao94.cn/timeliner/index.html)
