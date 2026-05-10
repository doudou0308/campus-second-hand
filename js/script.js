function checkContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == '' || email == '' || message == '') {
        alert('请填写完整信息！所有字段都不能为空。');
        return false;
    }

    if (email.indexOf('@') == -1) {
        alert('请输入正确的电子邮箱格式！');
        return false;
    }

    alert('留言提交成功！感谢您的反馈，我们会尽快回复。');
    return true;
}

function checkPublishForm() {
    var title = document.getElementById('title').value;
    var price = document.getElementById('price').value;
    var desc = document.getElementById('desc').value;

    if (title == '' || price == '') {
        alert('物品标题和价格不能为空！');
        return false;
    }

    if (isNaN(price) || Number(price) <= 0) {
        alert('请输入有效的价格（大于0的数字）！');
        return false;
    }

    if (desc == '') {
        alert('请填写物品描述，方便买家了解详情！');
        return false;
    }

    alert('发布成功！您的闲置物品已提交，审核通过后即可在平台显示。');
    window.location.href = 'index.html';
    return false;
}
