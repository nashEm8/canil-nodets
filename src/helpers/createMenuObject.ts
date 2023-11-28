type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';


export const createMenuObject = (activeMenu: MenuOptions) => {
    let menuList = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    activeMenu !== '' ? menuList[activeMenu] = true : null;

    return menuList;
}