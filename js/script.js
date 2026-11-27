function checklianxi() {
    var xingming = document.getElementById('xingming').value.trim();
    var youjian = document.getElementById('youjian').value.trim();
    var liuyan = document.getElementById('liuyan').value.trim();
    if (xingming == '' || youjian == '' || liuyan == '') {
        alert('请填写完整信息！所有字段都不能为空。');
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+$/.test(youjian)) {
        alert('请输入正确的电子邮箱格式！');
        return false;
    }
    alert('这是前端演示，留言不会发送或保存。');
    return false;
}




//fabu页面的表单设计
function checkfabu() {
    var biaoti = document.getElementById('biaoti').value.trim();
    var jiage = document.getElementById('jiage').value.trim();
    var miaoshu = document.getElementById('miaoshu').value.trim();
    var fenlei = document.getElementById('fenlei');

    if (biaoti == '' || jiage == '') {
        alert('物品标题和价格不能为空！');
        return false;
    }

    if (fenlei.selectedIndex <= 0) {
        alert('请选择物品分类！');
        return false;
    }

    if (!Number.isFinite(Number(jiage)) || Number(jiage) <= 0) {
        alert('请输入有效的价格（大于0的数字）！');
        return false;
    }

    if (miaoshu == '') {
        alert('请填写物品描述，方便买家了解详情！');
        return false;
    }

    alert('这是前端演示，物品信息不会发布或保存。');
    return false;
}
