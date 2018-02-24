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

### 支持

这篇文章有问题？ 点击 [提交错误](https://github.com/hertzZhang/hertzZhang.github.io/edit/master/pages/html-css/inputTypeNumber.md) 给我，不胜感激。