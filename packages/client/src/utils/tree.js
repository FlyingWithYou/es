/**
 * 树状的算法
 * @params list    待转化数组
 * @params parentId 起始节点
 */
function createTree(list, parentId) {
    let items= {};
    let len = list.length;
    // 获取每个节点的直属子节点，*记住是直属，不是所有子节点
    for (let i = 0; i < len; i++) {
        let key = list[i].parentId;
        if (items[key]) {
            items[key].push(list[i]);
        } else {
            items[key] = [];
            items[key].push(list[i]);
        }
    }
    return formatTree(items, parentId);
}

/**
 * 利用递归格式化每个节点
 */
function formatTree(items, parentId) {
    let result = [];
    if (!items[parentId]) {
        return result; 
    }
  
    for (let t of items[parentId]) {
        t.children = formatTree(items, t.id);
        result.push(t);
    }
    return result;
}
/*
* 将有层级的树拍平
* */
function flattenTree (tree) {
    return tree.reduce((array, {text, id, parent, children = []}) =>
        array.concat([{text, id, parent}], flattenTree(children)), []);
}

/*
* 获取第一个子节点
* */
function getFirstChild(node, cb){
    var tmp = Object.assign({},node);
    if (tmp.children && tmp.children.length >= 1) {
        tmp = Object.assign({}, tmp.children[0]);
        getFirstChild(tmp,cb);
    } else {
        cb && cb(tmp);
    }
}

module.exports = {
    createTree,
    flattenTree,
    getFirstChild
};
