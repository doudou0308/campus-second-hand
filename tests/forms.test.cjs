const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../js/script.js'), 'utf8');

function submit(handler, fields) {
    const messages = [];
    const context = vm.createContext({
        document: { getElementById: id => fields[id] },
        alert: message => messages.push(message)
    });
    vm.runInContext(source, context);
    assert.equal(context[handler](), false, 'demo must never submit data');
    assert.equal(messages.length, 1);
    return messages[0];
}

function contact(overrides = {}) {
    const values = { xingming: '同学', youjian: 'a@example.test', liuyan: '建议', ...overrides };
    return submit('checklianxi', Object.fromEntries(
        Object.entries(values).map(([id, value]) => [id, { value }])));
}

function publish(overrides = {}, selectedIndex = 1) {
    const values = { biaoti: '教材', jiage: '10.50', miaoshu: '九成新', ...overrides };
    const fields = Object.fromEntries(
        Object.entries(values).map(([id, value]) => [id, { value }]));
    fields.fenlei = { selectedIndex };
    return submit('checkfabu', fields);
}

test('contact rejects whitespace-only fields', () => {
    for (const id of ['xingming', 'youjian', 'liuyan']) {
        assert.match(contact({ [id]: '  ' }), /不能为空/);
    }
});

test('contact rejects malformed email addresses', () => {
    for (const youjian of ['@', 'a@', '@example.test', 'a@@example.test', 'a b@example.test']) {
        assert.match(contact({ youjian }), /邮箱格式/);
    }
});

test('valid contact remains a demo without submission', () => {
    assert.match(contact(), /不会发送或保存/);
});

test('publishing requires a category and nonblank text', () => {
    assert.match(publish({}, 0), /请选择物品分类/);
    assert.match(publish({ biaoti: ' ' }), /不能为空/);
    assert.match(publish({ miaoshu: ' ' }), /物品描述/);
});

test('publishing rejects nonpositive or nonfinite prices', () => {
    for (const jiage of ['0', '-1', 'Infinity', '1e309', 'NaN']) {
        assert.match(publish({ jiage }), /有效的价格/);
    }
});

test('valid decimal price remains a demo without submission', () => {
    assert.match(publish(), /不会发布或保存/);
});
