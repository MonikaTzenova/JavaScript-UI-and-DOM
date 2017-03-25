function solve() {
    return function (selector, isCaseSensitive) {
        var element = document.querySelector(selector);
        element.className='items-control';

        // if (isCaseSensitive == undefined) {
        //     isCaseSensitive = false;
        // }

        isCaseSensitive = isCaseSensitive || false;

        var addControl = document.createElement('div');
        addControl.className='add-controls';
        var addControlsLabel = document.createElement('label');
        var addControlsInput = document.createElement('input');
        var addControlsButton = document.createElement('button');
        addControlsButton.className= 'button';
        addControlsLabel.innerHTML = 'Enter text';
        addControl.appendChild(addControlsLabel);
        addControl.appendChild(addControlsInput);
        addControl.appendChild(addControlsButton);

        var searchControl = document.createElement('div');
        searchControl.className='search-controls';
        var searchControlLabel = document.createElement('label');
        searchControlLabel.innerHTML = 'Search:';
        var searchControlInput = document.createElement('input');
        searchControl.appendChild(searchControlLabel);
        searchControl.appendChild(searchControlInput);

        var resultControls = document.createElement('div');
        resultControls.className='result-controls';
        var resultControlsItemsList = document.createElement('ul');
        resultControlsItemsList.className += 'items-list';
        resultControls.appendChild(resultControlsItemsList);

        addControlsButton.addEventListener('click', function () {
            var newListItem = document.createElement('li');
            newListItem.className = 'list-item';
            var delButton = document.createElement('button');
            delButton.className = 'button';
            delButton.innerHTML = 'X';

            var listContent = document.createElement('span');
            listContent.className = 'text-content';
            listContent.innerHTML = addControlsInput.value;

            newListItem.appendChild(listContent);
            newListItem.appendChild(delButton);

            //newListItem.style.display = 'none';
            resultControlsItemsList.appendChild(newListItem);

        });

        searchControlInput.addEventListener('input', function () {
            var items = document.getElementsByClassName('list-item');
            for (var i = 0; i < items.length; i += 1) {
                if (isCaseSensitive) {
                    if(items[i].firstElementChild.innerHTML.indexOf(searchControlInput.value) >= 0){
                        items[i].style.display = '';
                    } else{
                        items[i].style.display = 'none';
                    }
                } else {
                    if(items[i].firstElementChild.innerHTML.toLowerCase().indexOf(searchControlInput.value.toLowerCase()) >= 0){
                        items[i].style.display = '';
                    } else{
                        items[i].style.display = 'none';
                    }
                }
            }
        });

        resultControls.addEventListener('click', function(event) {
            if (event.target.className == 'button') {
                var parent = event.target.parentElement;
                resultControlsItemsList.removeChild(parent);
            }
        });

        element.appendChild(addControl);
        element.appendChild(searchControl);
        element.appendChild(resultControls);
    };
}

module.exports = solve;