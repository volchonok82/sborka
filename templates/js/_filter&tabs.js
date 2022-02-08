// слушатель всего документа
document.addEventListener('click', documentActions);

// делегирование события клик
function documentActions(e) {
    const targetElement = e.target;


    // if (targetElement.closest('.filter__button')) {
    //     toggleDocumentFilter(targetElement, '.filter__button', '.filter__item', 'all');
    // }

    // if (targetElement.closest('.tabs-button')) {
    //     toggleDocumentTabs(targetElement, '.tabs-button', '.tabs-block');
    // }


}


// переключение фильтра
  // toggleFilter('.filter__button', '.filter__item');

  function toggleFilter(buttonsFilter, itemsFilter, filterShowAll = 'all') {
    let filterButtons = document.querySelectorAll(buttonsFilter);
    let filterItems = document.querySelectorAll(itemsFilter);

    function activeFilter() {
        filterButtons.forEach(filterButton => {
            filterButton.classList.remove('_active');
            this.classList.add('_active');
            let filterName = this.dataset.filterName;

            filterItems.forEach(filterItem => {
                if (filterName == filterShowAll) {
                    filterItem.classList.remove('_hide');
                } else {
                    filterItem.classList.add('_hide');
                    if (filterItem.dataset.filterItem == `${filterName}`) {
                        filterItem.classList.remove('_hide');
                    }
                }
            });
        });
    }
    filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', activeFilter);
    });
}

// переключение фильтра( для слушателя всего документа)

// встроить в слушатель всего документа
// if (targetElement.closest('.filter__button')) {
//   toggleDocumentFilter(targetElement, '.filter__button', '.filter__item', 'all');
// }

function toggleDocumentFilter(targetElement, buttonsFilter, itemsFilter, filterShowAll = 'all') {
    let filterButtons = document.querySelectorAll(buttonsFilter);
    let filterName = targetElement.closest(buttonsFilter).dataset.filterName;
    let filterItems = document.querySelectorAll(itemsFilter);
    filterButtons.forEach(filterButton => {
        filterButton.classList.remove('_active');
    });
    targetElement.closest(buttonsFilter).classList.add('_active');
    filterItems.forEach(filterItem => {
        if (filterName == filterShowAll) {
            filterItem.classList.remove('_hide');
        } else {
            filterItem.classList.add('_hide');
            if (filterItem.dataset.filterItem == `${filterName}`) {
                filterItem.classList.remove('_hide');
            }
        }
    });
}

//=========== TABS ===============

//переключение табов
//   toggleTabs('.tabs-button', '.tabs-block');

function toggleTabs(buttonTab, blockTab) {
    let tabsButtons = document.querySelectorAll(buttonTab);
    let tabsBlocks = document.querySelectorAll(blockTab);

    function activeTab() {
        tabsButtons.forEach(tabsButton => {
            tabsButton.classList.remove('_active');
            this.classList.add('_active');
            let id = this.dataset.tab;
            tabsBlocks.forEach(tabBlock => {
                tabBlock.classList.remove('_active');
                if (tabBlock.dataset.tab == id) {
                    tabBlock.classList.add('_active');
                }
            });
        });

    }
    tabsButtons.forEach(tabsButton => {
        tabsButton.addEventListener('click', activeTab);
    });

}


//переключение табов(для слушателя всего документа)

// встроить в слушатель всего документа
//   if (targetElement.closest('.tabs-button')) {
//       toggleDocumentTabs(targetElement, '.tabs-button', '.tabs-block');
//   }

function toggleDocumentTabs(targetElement, buttonTab, blockTab) {
    let tabsTitles = document.querySelectorAll(buttonTab);
    let tabsBlocks = document.querySelectorAll(blockTab);
    let id = targetElement.closest(buttonTab).dataset.tab;
    tabsTitles.forEach(title => {
        title.classList.remove('_active');

    });
    targetElement.closest(buttonTab).classList.add("_active");
    tabsBlocks.forEach(tabsBlock => {
        tabsBlock.classList.remove('_active');
        if (tabsBlock.dataset.tab == id) {
            tabsBlock.classList.add('_active');
        }
    });
}