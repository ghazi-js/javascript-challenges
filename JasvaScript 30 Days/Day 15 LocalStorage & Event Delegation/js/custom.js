window.onload = () => {

    "use strict";

    let storageHandler = {
        items: [],
        getAllItems: () => {
            this.items = JSON.parse(localStorage.getItem('foods')) || [];
            return this.items;
        },
        setItem: (item, _items) => {
            const matches = this.items.find(food => {
                const regex = new RegExp(item.name, 'gi');
                return (food.name.match(regex));
            });
            if (matches) {
                alert(`the food is already in the list`);
                return;
            }
            this.items.push(item);
            localStorage.setItem('foods', JSON.stringify(this.items));

            if (_items.classList.contains('empty')) {
                _items.innerHTML = itemHTML(item);
                _items.classList.remove('empty');
            } else {
                _items.innerHTML += itemHTML(item);
            }
        },
        editItemStatus: (id, status) => {
            this.items.map(item => {
                if (item.id === id)
                    item.checked = status;
            });
            localStorage.setItem('foods', JSON.stringify(this.items));
        }
    };

    const _form = document.querySelector('.add-items');
    const _items = document.getElementById('items');
    const foods = storageHandler.getAllItems();

    if (foods.length > 0) {
        _items.innerHTML = foods.map((food) => itemHTML(food)).join('');
        _items.classList.remove('empty');
    }

    function addItem(e) {
        e.preventDefault();
        const id = (_items.classList.contains('empty')) ? 1 : _items.querySelectorAll('li').length + 1;
        const food = {name: this.children[0].value, checked: false, id: id};
        storageHandler.setItem(food, _items);
        this.children[0].value = '';
    }

    function itemHTML(food) {
        return `<li>
                    <input type="checkbox" id="ch${food.id}" data-id="${food.id}" ${food.checked ? 'checked' : ''}>
                    <label for="ch${food.id}">${food.name}</label>
                </li>`;
    }

    function toggleCheck(e) {
        if (!e.target.matches('input')) return;
        const _checkbox = e.target;
        storageHandler.editItemStatus(Number(_checkbox.dataset.id), _checkbox.checked);
    }

    _form.addEventListener('submit', addItem);
    _items.addEventListener('click', toggleCheck);
};