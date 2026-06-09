function checklianxi() {
    var xingming = document.getElementById('xingming').value;
    var youjian = document.getElementById('youjian').value;
    var liuyan = document.getElementById('liuyan').value;
    if (xingming == '' || youjian == '' || liuyan == '') {
        alert('请填写完整信息！所有字段都不能为空。');
        return false;
    }
    if (youjian.indexOf('@') == -1) {
        alert('请输入正确的电子邮箱格式！');
        return false;
    }
    alert('留言提交成功！感谢您的反馈，我们会尽快回复。');
    return true;
}




//fabu页面的表单设计
function checkfabu() {
    var biaoti = document.getElementById('biaoti').value;
    var jiage = document.getElementById('jiage').value;
    var miaoshu = document.getElementById('miaoshu').value;

    if (biaoti == '' || jiage == '') {
        alert('物品标题和价格不能为空！');
        return false;
    }

    if (isNaN(jiage) || Number(jiage) <= 0) {
        alert('请输入有效的价格（大于0的数字）！');
        return false;
    }

    if (miaoshu == '') {
        alert('请填写物品描述，方便买家了解详情！');
        return false;
    }

    alert('发布成功！您的闲置物品已提交，审核通过后即可在平台显示。');
    window.location.href = 'index.html';
    return false;
}
