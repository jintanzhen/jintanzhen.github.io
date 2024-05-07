// 1.获取需要操作的DOM元素
const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul')

// 2.操作元素:绑定点击事件
btn.addEventListener('click',function () {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '删除';
    list.appendChild(listItem);
    
    listBtn.addEventListener('click',function() {
        list.removeChild(listItem);
    });

    input.focus();
});

