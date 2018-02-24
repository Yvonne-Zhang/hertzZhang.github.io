## 一次性卸载 Visual Studio for Mac

因为微软未提供现成的卸载程序，所以最基本的方法是把安装时所涉及的文件夹统统删除掉。这种方法很麻烦，今天就为大家推荐个用脚本文件的方法，执行即可一次性卸载 Visual Studio 及其关联的组件。

点击 [此处](https://raw.githubusercontent.com/MicrosoftDocs/visualstudio-docs/master/mac/resources/uninstall-vsmac.sh) 下载所需要的脚本。

```bash
1. 右键单击脚本，并选择“另存为...” 在 Mac 上保存文件。

2. 打开“终端”，并将工作目录更改为下载脚本的位置：
$ cd /Downloads

3. 使脚本可执行，并通过 sudo 运行它：
$ chmod +x ./uninstall-vsmac.sh
$ sudo ./uninstall-vsmac.sh

4. 最后，删除卸载脚本。
```

### 支持

这篇文章有问题？ 点击 [提交错误](https://github.com/hertzZhang/hertzZhang.github.io/edit/master/pages/tools/uninstallvisualstudio.md) 给我，不胜感激。