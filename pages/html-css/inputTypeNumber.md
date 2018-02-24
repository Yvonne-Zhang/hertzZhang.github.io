## 隐藏 input 为 number 属性时框内的上下操作按钮

css代码如下：

```css
input[type='number'] {
    -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
```

如果文中哪里出现错误，欢迎在 [此处](https://github.com/hertzZhang/hertzZhang.github.io/edit/master/pages/html-css/inputTypeNumber.md) 修改提交，我会第一时间合并，感谢支持。